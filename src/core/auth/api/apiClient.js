// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise API Client
// Version: 2.2
// ============================================================

import AuthenticationEngine from "../authenticationEngine";
import tokenEngine from "../tokenEngine";
import authStorage from "../authStorage";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

// Holds the in-flight refresh so concurrent 401s share a single refresh call
// instead of each firing their own (which would race the token rotation).
let refreshPromise = null;

class ApiClient {
  constructor(baseUrl = import.meta.env.VITE_API_BASE_URL || "") {
    this.baseUrl = baseUrl;
  }

  // Performs one token refresh against the backend. Returns the new access
  // token on success, or null on failure. Rotates BOTH tokens in storage.
  async refreshTokens() {
    const refreshToken = tokenEngine.getRefreshToken();

    if (!refreshToken) {
      return null;
    }

    try {
      const response = await fetch(`${this.baseUrl}/auth/refresh`, {
        method: "POST",
        headers: { ...DEFAULT_HEADERS },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        return null;
      }

      const body = await response.json();
      const data = body?.data ?? body;

      if (!data?.accessToken || !data?.refreshToken) {
        return null;
      }

      // Rotation: overwrite both tokens (old refresh token is now revoked).
      tokenEngine.setAccessToken(data.accessToken);
      tokenEngine.setRefreshToken(data.refreshToken);

      return data.accessToken;
    } catch {
      return null;
    }
  }

  // Ensures only one refresh runs at a time.
  refreshTokensOnce() {
    if (!refreshPromise) {
      refreshPromise = this.refreshTokens().finally(() => {
        refreshPromise = null;
      });
    }

    return refreshPromise;
  }

  async request(endpoint, options = {}, isRetry = false) {
    const headers = {
      ...DEFAULT_HEADERS,
      ...AuthenticationEngine.authorizationHeader(),
      ...(options.headers || {}),
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    // Access token likely expired — try one silent refresh + retry.
    // We skip this for the refresh endpoint itself and for a second attempt.
    if (
      response.status === 401 &&
      !isRetry &&
      !endpoint.includes("/auth/refresh") &&
      !endpoint.includes("/auth/login")
    ) {
      const newToken = await this.refreshTokensOnce();

      if (newToken) {
        // Retry the original request once with the refreshed token.
        return this.request(endpoint, options, true);
      }

      // Refresh failed — session is unrecoverable. Clear it so the app
      // falls back to the login screen on the next guarded navigation.
      authStorage.clear();
    }

    if (!response.ok) {
      let error = "Request failed.";

      try {
        const body = await response.json();
        error = body.message || error;
      } catch {
        // Ignore JSON parsing errors
      }

      throw new Error(error);
    }

    if (response.status === 204) {
      return null;
    }

    return response.json();
  }

  get(endpoint) {
    return this.request(endpoint, {
      method: "GET",
    });
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  patch(endpoint, body) {
    return this.request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE",
    });
  }
}

export default new ApiClient();
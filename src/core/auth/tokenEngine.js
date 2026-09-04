// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Token Engine
// Version: 2.1
// ============================================================

import authStorage from "./authStorage";

class TokenEngine {
  // ----------------------------------------------------------
  // Access Token
  // ----------------------------------------------------------

  getAccessToken() {
    return authStorage.getAccessToken();
  }

  setAccessToken(token) {
    authStorage.setAccessToken(token);
  }

  removeAccessToken() {
    authStorage.removeAccessToken();
  }

  // ----------------------------------------------------------
  // Refresh Token
  // ----------------------------------------------------------

  getRefreshToken() {
    return authStorage.getRefreshToken();
  }

  setRefreshToken(token) {
    authStorage.setRefreshToken(token);
  }

  removeRefreshToken() {
    authStorage.removeRefreshToken();
  }

  // ----------------------------------------------------------
  // Utilities
  // ----------------------------------------------------------

  hasAccessToken() {
    return Boolean(this.getAccessToken());
  }

  hasRefreshToken() {
    return Boolean(this.getRefreshToken());
  }

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
  }

  getAuthorizationHeader() {
    const token = this.getAccessToken();

    if (!token) {
      return {};
    }

    return {
      Authorization: `Bearer ${token}`,
    };
  }
}

export default new TokenEngine();
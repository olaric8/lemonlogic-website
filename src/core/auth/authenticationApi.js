// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Authentication API
// Version: 2.1
// ============================================================

import apiClient from "./api/apiClient";

class AuthenticationApi {
  async login(email, password, rememberMe = false) {
    return apiClient.post("/auth/login", {
      email,
      password,
      rememberMe,
    });
  }

  async logout(refreshToken) {
    return apiClient.post("/auth/logout", { refreshToken });
  }

  async refreshToken(refreshToken) {
    return apiClient.post("/auth/refresh", {
      refreshToken,
    });
  }

  async forgotPassword(email) {
    return apiClient.post("/auth/forgot-password", {
      email,
    });
  }

    async resetPassword(token, newPassword) {
    return apiClient.post("/auth/reset-password", {
      token,
      newPassword,
    });
  }

  async me() {
    return apiClient.get("/auth/me");
  }
}

export default new AuthenticationApi();
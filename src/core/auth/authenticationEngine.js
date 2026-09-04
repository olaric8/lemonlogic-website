// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Authentication Engine
// Version: 2.1
// ============================================================

import authStorage from "./authStorage";
import tokenEngine from "./tokenEngine";
import sessionEngine from "./sessionEngine";
import permissionEngine from "./permissionEngine";

class AuthenticationEngine {
  /**
   * Creates an authenticated session.
   *
   * Expected payload:
   * {
   *   accessToken,
   *   refreshToken,
   *   user
   * }
   */
  login({
    accessToken,
    refreshToken,
    user,
  }) {
    if (!accessToken) {
      throw new Error("Access token is required.");
    }

    if (!user) {
      throw new Error("Authenticated user is required.");
    }

    tokenEngine.setAccessToken(accessToken);

    if (refreshToken) {
      tokenEngine.setRefreshToken(refreshToken);
    }

    authStorage.setUser(user);

    sessionEngine.create(user);

    return {
      success: true,
      user,
    };
  }

  logout() {
    tokenEngine.clear();

    authStorage.removeUser();

    sessionEngine.destroy();

    return true;
  }

  restoreSession() {
    if (!tokenEngine.hasAccessToken()) {
      return false;
    }

    if (!sessionEngine.validate()) {
      this.logout();
      return false;
    }

    return authStorage.isAuthenticated();
  }

  isAuthenticated() {
    return (
      tokenEngine.hasAccessToken() &&
      sessionEngine.validate() &&
      authStorage.getUser() !== null
    );
  }

  currentUser() {
    return authStorage.getUser();
  }

  currentSession() {
    return sessionEngine.get();
  }

  refreshActivity() {
    return sessionEngine.updateActivity();
  }

  authorizationHeader() {
    return tokenEngine.getAuthorizationHeader();
  }

  hasRole(role) {
    return permissionEngine.hasRole(role);
  }

  hasAnyRole(roles) {
    return permissionEngine.hasAnyRole(roles);
  }

  hasPermission(permission) {
    return permissionEngine.hasPermission(permission);
  }

  hasAnyPermission(permissions) {
    return permissionEngine.hasAnyPermission(permissions);
  }

  canManageUsers() {
    return permissionEngine.canManageUsers();
  }

  canManageSettings() {
    return permissionEngine.canManageSettings();
  }

  canViewBoardReports() {
    return permissionEngine.canViewBoardReports();
  }
}

export default new AuthenticationEngine();
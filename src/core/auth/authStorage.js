// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Auth Storage Engine
// Version: 2.1
// ============================================================

const STORAGE_KEYS = {
  ACCESS_TOKEN: "leip_access_token",
  REFRESH_TOKEN: "leip_refresh_token",
  USER: "leip_user",
  SESSION: "leip_session",
};

class AuthStorage {
  // ----------------------------------------------------------
  // Access Token
  // ----------------------------------------------------------

  getAccessToken() {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  setAccessToken(token) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  }

  removeAccessToken() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  // ----------------------------------------------------------
  // Refresh Token
  // ----------------------------------------------------------

  getRefreshToken() {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  setRefreshToken(token) {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  }

  removeRefreshToken() {
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  // ----------------------------------------------------------
  // User
  // ----------------------------------------------------------

  getUser() {
    const user = localStorage.getItem(STORAGE_KEYS.USER);

    if (!user) return null;

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

  setUser(user) {
    localStorage.setItem(
      STORAGE_KEYS.USER,
      JSON.stringify(user)
    );
  }

  removeUser() {
    localStorage.removeItem(STORAGE_KEYS.USER);
  }

  // ----------------------------------------------------------
  // Session
  // ----------------------------------------------------------

  getSession() {
    const session = localStorage.getItem(STORAGE_KEYS.SESSION);

    if (!session) return null;

    try {
      return JSON.parse(session);
    } catch {
      return null;
    }
  }

  setSession(session) {
    localStorage.setItem(
      STORAGE_KEYS.SESSION,
      JSON.stringify(session)
    );
  }

  removeSession() {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  }

  // ----------------------------------------------------------
  // Utilities
  // ----------------------------------------------------------

  clear() {
    Object.values(STORAGE_KEYS).forEach((key) =>
      localStorage.removeItem(key)
    );
  }

  hasAccessToken() {
    return Boolean(this.getAccessToken());
  }

  isAuthenticated() {
    return (
      this.hasAccessToken() &&
      this.getUser() !== null
    );
  }
}

export default new AuthStorage();
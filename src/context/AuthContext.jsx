// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Authentication Context
// Version: 2.2
// ============================================================

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import AuthenticationEngine from "../core/auth/authenticationEngine";
import tokenEngine from "../core/auth/tokenEngine";
import authenticationApi from "../core/auth/authenticationApi";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    AuthenticationEngine.currentUser()
  );

  const [authenticated, setAuthenticated] = useState(
    AuthenticationEngine.isAuthenticated()
  );

  // True until the first session restore + /me hydration completes. Gated
  // pages should wait on this before deciding to show "access restricted",
  // so a hard refresh does not flash the restricted screen while permissions
  // are still being fetched.
  const [initializing, setInitializing] = useState(true);

  const login = useCallback((payload) => {
    const result = AuthenticationEngine.login(payload);

    setUser(AuthenticationEngine.currentUser());
    setAuthenticated(true);

    return result;
  }, []);

  const logout = useCallback(async () => {
    // Tell the backend to revoke the session (needs the refresh token).
    // We clear locally no matter what, so a network failure still logs out.
    try {
      const refreshToken = tokenEngine.getRefreshToken();

      if (refreshToken) {
        await authenticationApi.logout(refreshToken);
      }
    } catch {
      // Ignore network/API errors on logout - local clear still runs below.
    }

    AuthenticationEngine.logout();

    setUser(null);
    setAuthenticated(false);
  }, []);

  const restoreSession = useCallback(async () => {
    const restored = AuthenticationEngine.restoreSession();

    setAuthenticated(restored);
    setUser(
      restored
        ? AuthenticationEngine.currentUser()
        : null
    );

    // Login stores only roles; permissions come from /me. On a hard refresh
    // no login runs, so re-hydrate here - otherwise permission-gated pages
    // read a stale stored user and wrongly show "access restricted".
    if (restored) {
      try {
        const meResponse = await authenticationApi.me();
        const me = meResponse?.data ?? meResponse;

        if (me?.user) {
          AuthenticationEngine.login({
            accessToken: tokenEngine.getAccessToken(),
            refreshToken: tokenEngine.getRefreshToken(),
            user: {
              ...me.user,
              roles: me.roles ?? me.user.roles ?? [],
              permissions: me.permissions ?? [],
            },
          });
          setUser(AuthenticationEngine.currentUser());
        }
      } catch {
        // /me failed (offline, expired token) - keep the restored user
        // (roles only). apiClient handles a 401 via refresh/redirect.
      }
    }

    return restored;
  }, []);

  useEffect(() => {
    let active = true;

    restoreSession().finally(() => {
      if (active) setInitializing(false);
    });

    return () => {
      active = false;
    };
  }, [restoreSession]);

  const value = useMemo(
    () => ({
      user,
      authenticated,
      initializing,

      login,
      logout,
      restoreSession,

      isAuthenticated:
        AuthenticationEngine.isAuthenticated,

      currentUser:
        AuthenticationEngine.currentUser,

      currentSession:
        AuthenticationEngine.currentSession,

      authorizationHeader:
        AuthenticationEngine.authorizationHeader,

      hasRole:
        AuthenticationEngine.hasRole,

      hasAnyRole:
        AuthenticationEngine.hasAnyRole,

      hasPermission:
        AuthenticationEngine.hasPermission,

      hasAnyPermission:
        AuthenticationEngine.hasAnyPermission,

      canManageUsers:
        AuthenticationEngine.canManageUsers,

      canManageSettings:
        AuthenticationEngine.canManageSettings,

      canViewBoardReports:
        AuthenticationEngine.canViewBoardReports,
    }),
    [user, authenticated, initializing, login, logout, restoreSession]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

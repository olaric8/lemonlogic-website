// ==========================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Authentication Constants
// ==========================================================

export const AUTH_STORAGE = {
  ACCESS_TOKEN: "leip_access_token",
  REFRESH_TOKEN: "leip_refresh_token",
  USER: "leip_user",
  SESSION: "leip_session",
};

export const AUTH_STATUS = {
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
  LOADING: "loading",
};

export const SESSION = {
  IDLE_TIMEOUT_MINUTES: 30,
  REFRESH_THRESHOLD_MINUTES: 5,
};

export const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  EXECUTIVE: "EXECUTIVE",
  MANAGER: "MANAGER",
  USER: "USER",
};

export const PERMISSIONS = {
  DASHBOARD_VIEW: "dashboard:view",
  WORKSPACE_VIEW: "workspace:view",
  BOARD_REPORT_VIEW: "board:view",
  SETTINGS_MANAGE: "settings:manage",
  USERS_MANAGE: "users:manage",
};
// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Permission Engine
// Version: 2.1
// ============================================================

import authStorage from "./authStorage";

class PermissionEngine {
  getUser() {
    return authStorage.getUser();
  }

  getRoles() {
    const user = this.getUser();

    return Array.isArray(user?.roles)
      ? user.roles
      : [];
  }

  getPermissions() {
    const user = this.getUser();

    return Array.isArray(user?.permissions)
      ? user.permissions
      : [];
  }

  hasRole(role) {
    return this.getRoles().includes(role);
  }

  hasAnyRole(roles = []) {
    return roles.some((role) => this.hasRole(role));
  }

  hasAllRoles(roles = []) {
    return roles.every((role) => this.hasRole(role));
  }

  hasPermission(permission) {
    return this.getPermissions().includes(permission);
  }

  hasAnyPermission(permissions = []) {
    return permissions.some((permission) =>
      this.hasPermission(permission)
    );
  }

  hasAllPermissions(permissions = []) {
    return permissions.every((permission) =>
      this.hasPermission(permission)
    );
  }

  isSuperAdmin() {
    return this.hasRole("SUPER_ADMIN");
  }

  isAdmin() {
    return (
      this.hasRole("ADMIN") ||
      this.isSuperAdmin()
    );
  }

  canManageUsers() {
    return (
      this.hasPermission("users.update") ||
      this.isSuperAdmin()
    );
  }

  canManageSettings() {
    return (
      this.hasPermission("settings.manage") ||
      this.isSuperAdmin()
    );
  }

  canViewBoardReports() {
    return (
      this.hasPermission("reports.view") ||
      this.isAdmin()
    );
  }
}

export default new PermissionEngine();
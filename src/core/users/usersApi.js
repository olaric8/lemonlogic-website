// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Users API — frontend layer for the tenant-scoped /users backend
// Version: 1.0
// ============================================================

import apiClient from "../auth/api/apiClient";

class UsersApi {
  // GET /users?page&pageSize — tenant-scoped list (users.view)
  async list({ page = 1, pageSize = 20 } = {}) {
    const query = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
    }).toString();

    return apiClient.get(`/users?${query}`);
  }

  // GET /users/:id — one user in the caller''s tenant (users.view)
  async getOne(id) {
    return apiClient.get(`/users/${id}`);
  }

  // PATCH /users/:id — profile fields only (users.update)
  async updateProfile(id, profile) {
    return apiClient.patch(`/users/${id}`, profile);
  }

  // PATCH /users/:id/role — replace-role semantics, by name (users.update)
  async updateRole(id, roleName) {
    return apiClient.patch(`/users/${id}/role`, { roleName });
  }

  // PATCH /users/:id/status — ACTIVE | SUSPENDED | INACTIVE (users.update)
  async updateStatus(id, status) {
    return apiClient.patch(`/users/${id}/status`, { status });
  }
}

export default new UsersApi();

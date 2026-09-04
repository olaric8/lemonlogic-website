// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Settings API — frontend layer for the tenant-scoped /settings backend
// Version: 1.0
// ============================================================

import apiClient from "../auth/api/apiClient";

class SettingsApi {
  // GET /settings — the caller''s org settings (settings.view)
  async get() {
    return apiClient.get("/settings");
  }

  // PATCH /settings — whitelisted profile fields only (settings.manage).
  // Allowed: name, industry, country, timezone, locale, website, logoUrl.
  // `code` is immutable server-side and must never be sent.
  async updateProfile(fields) {
    return apiClient.patch("/settings", fields);
  }

  // PATCH /settings/preferences — shallow-merge the preferences bag
  // (settings.manage). Sending a key with null removes it.
  async updatePreferences(patch) {
    // Backend expects the bag wrapped: { preferences: { ...pairs } }.
    // (Profile PATCH /settings takes bare fields — the two endpoints differ.)
    return apiClient.patch("/settings/preferences", { preferences: patch });
  }
}

export default new SettingsApi();

// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Onboarding API - frontend layer for the public token flows
// Version: 1.0
// ============================================================

import apiClient from "../auth/api/apiClient";

class OnboardingApi {
  // POST /onboarding/accept - invitee completes registration (public, token).
  // Backend body: { token, firstName, lastName, password }
  async accept({ token, firstName, lastName, password }) {
    return apiClient.post("/onboarding/accept", {
      token,
      firstName,
      lastName,
      password,
    });
  }

  // POST /onboarding/verify-email - confirm an email (public, token).
  // Backend body: { token }. Success returns { success, message } (no data).
  async verifyEmail(token) {
    return apiClient.post("/onboarding/verify-email", { token });
  }

  // POST /onboarding/resend-verification - request a fresh link (public).
  // Backend body: { email }. Always returns a generic success (no enumeration).
  async resendVerification(email) {
    return apiClient.post("/onboarding/resend-verification", { email });
  }
}

export default new OnboardingApi();

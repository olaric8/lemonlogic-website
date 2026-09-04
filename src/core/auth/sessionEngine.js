// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// Session Engine
// Version: 2.1
// ============================================================

import authStorage from "./authStorage";

const DEFAULT_SESSION_TIMEOUT = 30 * 60 * 1000; // 30 Minutes

class SessionEngine {
  constructor(timeout = DEFAULT_SESSION_TIMEOUT) {
    this.timeout = timeout;
  }

  create(user) {
    const now = Date.now();

    const session = {
      authenticated: true,
      createdAt: now,
      lastActivity: now,
      expiresAt: now + this.timeout,
      userId: user?.id ?? null,
    };

    authStorage.setSession(session);

    return session;
  }

  get() {
    return authStorage.getSession();
  }

  updateActivity() {
    const session = this.get();

    if (!session) return null;

    const now = Date.now();

    const updated = {
      ...session,
      lastActivity: now,
      expiresAt: now + this.timeout,
    };

    authStorage.setSession(updated);

    return updated;
  }

  isExpired() {
    const session = this.get();

    if (!session) return true;

    return Date.now() > session.expiresAt;
  }

  destroy() {
    authStorage.removeSession();
  }

  validate() {
    if (this.isExpired()) {
      this.destroy();
      return false;
    }

    return true;
  }

  remainingTime() {
    const session = this.get();

    if (!session) return 0;

    return Math.max(session.expiresAt - Date.now(), 0);
  }
}

export default new SessionEngine();
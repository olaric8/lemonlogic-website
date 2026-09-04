// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Verify Email
// Version: 1.0
// ============================================================

import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import onboardingApi from "../core/onboarding/onboardingApi";

// Status machine: verifying -> success | error (or "missing" if no token).
export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";

  const [status, setStatus] = useState(token ? "verifying" : "missing");
  const [message, setMessage] = useState("");

  // Resend form (shown on failure so a user with a dead link can get a fresh one).
  const [email, setEmail] = useState("");
  const [resending, setResending] = useState(false);
  const [resendMsg, setResendMsg] = useState("");

  // Guard against double-invocation (React 18 StrictMode mounts effects twice).
  const startedRef = useRef(false);

  useEffect(() => {
    if (!token || startedRef.current) return;
    startedRef.current = true;

    (async () => {
      try {
        await onboardingApi.verifyEmail(token);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setMessage(err.message || "This verification link is invalid or has expired.");
      }
    })();
  }, [token]);

  async function handleResend(e) {
    e.preventDefault();
    setResendMsg("");

    if (!email.trim()) return;

    setResending(true);
    try {
      const res = await onboardingApi.resendVerification(email.trim());
      // Backend always returns a generic message (no account enumeration).
      setResendMsg(res?.message || "If that account exists and is unverified, a new link has been sent.");
    } catch {
      // Even on an unexpected error, keep the message neutral.
      setResendMsg("If that account exists and is unverified, a new link has been sent.");
    } finally {
      setResending(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-white">
            Verify Your Email
          </h1>

          <p className="text-gray-400 mt-3">
            Executive Identity Platform
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

          {status === "verifying" && (
            <div className="rounded-lg bg-slate-800/60 border border-slate-700 text-gray-300 px-4 py-4 text-center">
              Verifying your email&hellip;
            </div>
          )}

          {status === "success" && (
            <div className="space-y-6">
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-4">
                Your email has been verified. You can now sign in.
              </div>
              <div className="text-center">
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300">
                  Continue to Login
                </Link>
              </div>
            </div>
          )}

          {status === "missing" && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-4">
              This verification link is invalid or incomplete.
            </div>
          )}

          {status === "error" && (
            <div className="space-y-6">
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-4">
                {message}
              </div>

              <form onSubmit={handleResend} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Resend verification link
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {resendMsg && (
                  <div className="rounded-lg bg-slate-800/60 border border-slate-700 text-gray-300 px-4 py-3 text-sm">
                    {resendMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={resending}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg py-3 transition disabled:opacity-50"
                >
                  {resending ? "Sending..." : "Send New Link"}
                </button>
              </form>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link to="/login" className="text-yellow-400 hover:text-yellow-300">
              &larr; Back to Login
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Reset Password
// Version: 1.0
// ============================================================

import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import authenticationApi from "../core/auth/authenticationApi";

const MIN_PASSWORD_LENGTH = 12;

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("This reset link is invalid or incomplete.");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await authenticationApi.resetPassword(token, password);
      setDone(true);
      setTimeout(() => navigate("/login", { replace: true }), 2500);
    } catch (err) {
      setError(err.message || "Unable to reset your password. The link may have expired.");
    } finally {
      setLoading(false);
    }
  }

  const missingToken = !token;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-white">
            Set a New Password
          </h1>

          <p className="text-gray-400 mt-3">
            Executive Identity Platform
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

          {done ? (

            <div className="space-y-6">
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-4">
                Your password has been reset. Redirecting you to sign in...
              </div>
            </div>

          ) : missingToken ? (

            <div className="space-y-6">
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-4">
                This reset link is invalid or incomplete. Please request a new one.
              </div>
              <div className="text-center">
                <Link to="/forgot-password" className="text-yellow-400 hover:text-yellow-300">
                  Request a new reset link
                </Link>
              </div>
            </div>

          ) : (

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <p className="text-xs text-gray-500 mt-2">
                  At least {MIN_PASSWORD_LENGTH} characters.
                </p>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg py-3 transition disabled:opacity-50"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>

            </form>

          )}

          <div className="mt-8 text-center">
            <Link to="/login" className="text-yellow-400 hover:text-yellow-300">
              ← Back to Login
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Forgot Password
// Version: 3.0
// ============================================================

import { useState } from "react";
import { Link } from "react-router-dom";

import authenticationApi from "../core/auth/authenticationApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // The backend always returns a generic success (no account enumeration),
      // so we simply show the confirmation regardless of whether the email
      // is registered.
      await authenticationApi.forgotPassword(email.trim());
      setSubmitted(true);
    } catch {
      // Even on an unexpected error, avoid leaking whether the email exists.
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-white">
            Reset Password
          </h1>

          <p className="text-gray-400 mt-3">
            Executive Identity Platform
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

          {!submitted ? (

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Executive Email
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {loading
                  ? "Sending..."
                  : "Send Reset Link"}
              </button>

            </form>

          ) : (

            <div className="space-y-6">

              <div className="rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-4">

                If the email exists in our system,
                a password reset link has been sent.

              </div>

            </div>

          )}

          <div className="mt-8 text-center">

            <Link
              to="/login"
              className="text-yellow-400 hover:text-yellow-300"
            >
              ← Back to Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
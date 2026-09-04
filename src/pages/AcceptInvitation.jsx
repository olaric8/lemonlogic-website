// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Accept Invitation
// Version: 1.0
// ============================================================

import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import onboardingApi from "../core/onboarding/onboardingApi";

const MIN_PASSWORD_LENGTH = 12;

export default function AcceptInvitation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token") || "";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("This invitation link is invalid or incomplete.");
      return;
    }
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name.");
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
      await onboardingApi.accept({
        token,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        password,
      });
      setDone(true);
      setTimeout(() => navigate("/login", { replace: true }), 2500);
    } catch (err) {
      setError(err.message || "Unable to complete registration. The invitation may have expired.");
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
            Accept Your Invitation
          </h1>

          <p className="text-gray-400 mt-3">
            Executive Identity Platform
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

          {done ? (

            <div className="space-y-6">
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-4">
                Your account has been created. Redirecting you to sign in...
              </div>
            </div>

          ) : missingToken ? (

            <div className="space-y-6">
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-4">
                This invitation link is invalid or incomplete. Please ask your administrator to send a new one.
              </div>
              <div className="text-center">
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300">
                  Back to Login
                </Link>
              </div>
            </div>

          ) : (

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Password
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
                  Confirm Password
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
                {loading ? "Creating account..." : "Create Account"}
              </button>

            </form>

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

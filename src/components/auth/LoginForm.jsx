// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Executive Login Form
// Version: 2.1
// ============================================================
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import authenticationApi from "../../core/auth/authenticationApi";
export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/dashboard";
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await authenticationApi.login(
        form.email,
        form.password,
        form.rememberMe
      );
      const data = response?.data ?? response;
      login({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      });
      try {
        const meResponse = await authenticationApi.me();
        const me = meResponse?.data ?? meResponse;
        if (me?.user) {
          login({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            user: {
              ...me.user,
              roles: me.roles ?? me.user.roles ?? [],
              permissions: me.permissions ?? [],
            },
          });
        }
      } catch {
        // If /me fails we still proceed with the login user (roles only).
      }
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.message || "Unable to sign in."
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              name="rememberMe"
              checked={form.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-yellow-400 hover:text-yellow-300"
          >
            Forgot Password?
          </button>
        </div>
        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-yellow-400 text-black font-semibold py-3 transition hover:bg-yellow-300 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <p className="text-center text-sm text-slate-400 mt-6">
        Access by invitation only.{" "}
        <Link
          to="/assessment"
          className="text-yellow-400 hover:text-yellow-300 underline"
        >
          Take our free assessment to get started.
        </Link>
      </p>
    </>
  );
}

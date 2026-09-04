// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Executive Login
// Version: 2.1
// ============================================================

import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-white">
            LemonLogic
          </h1>

          <p className="text-gray-400 mt-3">
            Executive Intelligence Platform
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8">

          <LoginForm />

        </div>

        <p className="text-center text-gray-500 text-sm mt-8">

          © {new Date().getFullYear()} LemonLogic

        </p>

      </div>

    </div>
  );
}
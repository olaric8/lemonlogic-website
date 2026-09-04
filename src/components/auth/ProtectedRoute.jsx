import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({
  children,
  redirectTo = "/login",
}) {
  const { authenticated, initializing } = useAuth();
  const location = useLocation();

  // Session restore + /me hydration runs on mount. Until it settles we can't
  // tell a valid returning user from an unauthenticated one, so we wait here
  // rather than redirect (which would flash /login on every refresh) or render
  // the page (which would flash "access restricted" before permissions load).
  if (initializing) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Loading&hellip;
      </div>
    );
  }

  if (!authenticated) {
    return (
      <Navigate
        to={redirectTo}
        replace
        state={{ from: location }}
      />
    );
  }

  if (children) {
    return children;
  }

  return <Outlet />;
}

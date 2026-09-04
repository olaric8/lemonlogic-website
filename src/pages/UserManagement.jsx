// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// User Management — org user administration (tenant-scoped)
// Version: 1.1
// ============================================================

import { useCallback, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import usersApi from "../core/users/usersApi";

// Roles a tenant admin may assign. PLATFORM_OWNER is intentionally excluded —
// the backend blocks assigning it via this module anyway; this just hides it.
// These strings MUST match the backend role names exactly (role replaced by name).
const ASSIGNABLE_ROLES = ["SUPER_ADMIN", "EXECUTIVE", "MANAGER", "VIEWER"];

const PAGE_SIZE = 20;

const STATUS_STYLES = {
  ACTIVE: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  SUSPENDED: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
  INACTIVE: "bg-slate-600/20 text-slate-400 border border-slate-600/40",
};

// Confirmed shape: roles is an array of plain strings.
function roleNames(u) {
  return (u?.roles ?? []).filter(Boolean);
}

function primaryRole(u) {
  return roleNames(u)[0] ?? "";
}

function displayName(u) {
  const full = [u?.firstName, u?.lastName].filter(Boolean).join(" ");
  return full || u?.email || "\u2014";
}

export default function UserManagement() {
  const { user, hasPermission } = useAuth();

  const canView = hasPermission ? hasPermission("users.view") : false;
  const canManage = hasPermission ? hasPermission("users.update") : false;
  const currentUserId = user?.id ?? null;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Drives the confirm modal: { kind: "role"|"status", target, value } | null
  const [pendingAction, setPendingAction] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await usersApi.list({ page, pageSize: PAGE_SIZE });

      // Confirmed envelope: { success, data: { users, total, page, pageSize } }.
      const payload = res?.data ?? {};
      const list = payload.users ?? [];
      const total = payload.total ?? list.length;
      const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

      setUsers(list);
      setTotalPages(pages);
    } catch (err) {
      setError(err.message || "Failed to load users.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (canView) {
      loadUsers();
    } else {
      setLoading(false);
    }
  }, [canView, loadUsers]);

  const confirmPending = useCallback(async () => {
    if (!pendingAction) return;

    setSubmitting(true);
    setActionError("");

    try {
      const { kind, target, value } = pendingAction;

      if (kind === "role") {
        await usersApi.updateRole(target.id, value);
      } else if (kind === "status") {
        await usersApi.updateStatus(target.id, value);
      }

      setPendingAction(null);
      await loadUsers();
    } catch (err) {
      setActionError(err.message || "Action failed.");
    } finally {
      setSubmitting(false);
    }
  }, [pendingAction, loadUsers]);

  if (!canView) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold text-slate-100">Access restricted</h1>
          <p className="mt-2 text-slate-400">
            You don't have permission to view user management for this organization.
          </p>
        </div>
      </div>
    );
  }

  const modalCopy = () => {
    if (!pendingAction) return { title: "", body: "", confirmLabel: "", danger: false };
    const { kind, value, target } = pendingAction;
    const who = displayName(target);

    if (kind === "role") {
      return {
        title: "Change role",
        body: `Change ${who}''s role to ${value}? This replaces their current role.`,
        confirmLabel: "Change role",
        danger: false,
      };
    }
    if (value === "SUSPENDED") {
      return {
        title: "Suspend user",
        body: `Suspend ${who}? They will be signed out immediately and blocked from logging in until reactivated.`,
        confirmLabel: "Suspend",
        danger: true,
      };
    }
    if (value === "INACTIVE") {
      return {
        title: "Deactivate user",
        body: `Deactivate ${who}? They will be signed out and their account set inactive.`,
        confirmLabel: "Deactivate",
        danger: true,
      };
    }
    return {
      title: "Reactivate user",
      body: `Reactivate ${who}? They will be able to log in again.`,
      confirmLabel: "Reactivate",
      danger: false,
    };
  };

  const copy = modalCopy();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-100">Team</h1>
          <p className="mt-1 text-sm text-slate-400">
            Manage the people in your organization &mdash; roles and account status.
          </p>
        </header>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Role</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                      Loading users&hellip;
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((u) => {
                    const isSelf = currentUserId && u.id === currentUserId;
                    const isOwner = roleNames(u).includes("PLATFORM_OWNER");
                    const locked = isSelf || isOwner;
                    const status = u.status || "ACTIVE";

                    return (
                      <tr key={u.id} className="hover:bg-slate-800/40">
                        <td className="px-4 py-3">
                          <span className="text-slate-100">{displayName(u)}</span>
                          {isSelf && (
                            <span className="ml-2 text-xs text-yellow-400">(you)</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-300">{u.email}</td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {roleNames(u).length ? (
                              roleNames(u).map((r) => (
                                <span
                                  key={r}
                                  className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-200"
                                >
                                  {r}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-slate-500">&mdash;</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              STATUS_STYLES[status] || STATUS_STYLES.INACTIVE
                            }`}
                          >
                            {status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {!canManage || locked ? (
                            <div className="text-right text-xs text-slate-600">
                              {locked ? "\u2014" : "View only"}
                            </div>
                          ) : (
                            <div className="flex flex-wrap items-center justify-end gap-2">
                              <select
                                value={primaryRole(u)}
                                onChange={(e) =>
                                  setPendingAction({
                                    kind: "role",
                                    target: u,
                                    value: e.target.value,
                                  })
                                }
                                className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-100 focus:border-yellow-400 focus:outline-none"
                              >
                                {!ASSIGNABLE_ROLES.includes(primaryRole(u)) &&
                                  primaryRole(u) && (
                                    <option value={primaryRole(u)}>
                                      {primaryRole(u)}
                                    </option>
                                  )}
                                {ASSIGNABLE_ROLES.map((r) => (
                                  <option key={r} value={r}>
                                    {r}
                                  </option>
                                ))}
                              </select>

                              {status === "ACTIVE" ? (
                                <>
                                  <button
                                    onClick={() =>
                                      setPendingAction({
                                        kind: "status",
                                        target: u,
                                        value: "SUSPENDED",
                                      })
                                    }
                                    className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-300 hover:bg-amber-500/20"
                                  >
                                    Suspend
                                  </button>
                                  <button
                                    onClick={() =>
                                      setPendingAction({
                                        kind: "status",
                                        target: u,
                                        value: "INACTIVE",
                                      })
                                    }
                                    className="rounded-md border border-red-500/40 bg-red-500/10 px-2.5 py-1 text-xs text-red-300 hover:bg-red-500/20"
                                  >
                                    Deactivate
                                  </button>
                                </>
                              ) : (
                                <button
                                  onClick={() =>
                                    setPendingAction({
                                      kind: "status",
                                      target: u,
                                      value: "ACTIVE",
                                    })
                                  }
                                  className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300 hover:bg-emerald-500/20"
                                >
                                  Reactivate
                                </button>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-800 px-4 py-3 text-sm text-slate-400">
            <span>Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1 || loading}
                className="rounded-md border border-slate-700 px-3 py-1 text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages || loading}
                className="rounded-md border border-slate-700 px-3 py-1 text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-6 text-center text-xs text-slate-600">
          Built by{" "}
          <a
            href="https://lemonlogicai.com"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 hover:underline"
          >
            LemonLogic
          </a>
        </footer>
      </div>

      {pendingAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-100">{copy.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{copy.body}</p>

            {actionError && (
              <div className="mt-3 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                {actionError}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setPendingAction(null);
                  setActionError("");
                }}
                disabled={submitting}
                className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmPending}
                disabled={submitting}
                className={`rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50 ${
                  copy.danger
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-yellow-400 text-slate-900 hover:bg-yellow-300"
                }`}
              >
                {submitting ? "Working\u2026" : copy.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

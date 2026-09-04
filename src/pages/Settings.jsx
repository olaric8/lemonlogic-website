// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Settings — org profile + preferences editor (tenant-scoped)
// Version: 1.0
// ============================================================

import { useCallback, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import settingsApi from "../core/settings/settingsApi";

// Editable profile fields (must match the backend PATCH /settings whitelist).
const PROFILE_FIELDS = [
  { key: "name", label: "Organization name", type: "text" },
  { key: "industry", label: "Industry", type: "text" },
  { key: "country", label: "Country", type: "text" },
  { key: "timezone", label: "Timezone", type: "text" },
  { key: "locale", label: "Locale", type: "text" },
  { key: "website", label: "Website", type: "url" },
  { key: "logoUrl", label: "Logo URL", type: "url" },
];

const inputClass =
  "w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm " +
  "text-slate-100 placeholder-slate-500 focus:border-yellow-400 focus:outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-60";

export default function Settings() {
  const { hasPermission } = useAuth();
  const canView = hasPermission ? hasPermission("settings.view") : false;
  const canManage = hasPermission ? hasPermission("settings.manage") : false;

  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Profile form state
  const [profile, setProfile] = useState({});
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState("");
  const [profileErr, setProfileErr] = useState("");

  // Preferences editor state: array of { key, value } rows for stable editing.
  const [prefRows, setPrefRows] = useState([]);
  const [newPrefKey, setNewPrefKey] = useState("");
  const [newPrefValue, setNewPrefValue] = useState("");
  const [savingPrefs, setSavingPrefs] = useState(false);
  const [prefMsg, setPrefMsg] = useState("");
  const [prefErr, setPrefErr] = useState("");

  const hydrate = useCallback((s) => {
    setSettings(s);
    setProfile({
      name: s.name ?? "",
      industry: s.industry ?? "",
      country: s.country ?? "",
      timezone: s.timezone ?? "",
      locale: s.locale ?? "",
      website: s.website ?? "",
      logoUrl: s.logoUrl ?? "",
    });
    const prefs = s.preferences ?? {};
    setPrefRows(
      Object.keys(prefs).map((k) => ({
        key: k,
        value: typeof prefs[k] === "string" ? prefs[k] : JSON.stringify(prefs[k]),
      }))
    );
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await settingsApi.get();
      // Confirmed shape: { success, data: { settings: {...} } }
      const s = res?.data?.settings;
      if (!s) throw new Error("Unexpected settings response shape.");
      hydrate(s);
    } catch (err) {
      setError(err.message || "Failed to load settings.");
    } finally {
      setLoading(false);
    }
  }, [hydrate]);

  useEffect(() => {
    if (canView) load();
    else setLoading(false);
  }, [canView, load]);

  const saveProfile = useCallback(async () => {
    setSavingProfile(true);
    setProfileMsg("");
    setProfileErr("");
    try {
      // Send only the editable whitelist. Empty strings are sent as-is
      // (clears the field); the backend ignores anything off-whitelist.
      const payload = {};
      for (const f of PROFILE_FIELDS) {
        const v = (profile[f.key] ?? "").trim();
        if (v !== "") payload[f.key] = v;
      }
      const res = await settingsApi.updateProfile(payload);
      const s = res?.data?.settings;
      if (s) hydrate(s);
      setProfileMsg("Profile saved.");
    } catch (err) {
      setProfileErr(err.message || "Failed to save profile.");
    } finally {
      setSavingProfile(false);
    }
  }, [profile, hydrate]);

  const savePreferences = useCallback(async () => {
    setSavingPrefs(true);
    setPrefMsg("");
    setPrefErr("");
    try {
      // Build a shallow-merge patch from the current rows. We diff against the
      // loaded preferences so removed keys are sent as null (backend removes them).
      const current = settings?.preferences ?? {};
      const patch = {};

      // Set/overwrite from rows (skip blank keys).
      const liveKeys = new Set();
      for (const row of prefRows) {
        const k = row.key.trim();
        if (!k) continue;
        liveKeys.add(k);
        patch[k] = row.value;
      }
      // Any key that existed before but is no longer present → null (remove).
      for (const k of Object.keys(current)) {
        if (!liveKeys.has(k)) patch[k] = null;
      }

      const res = await settingsApi.updatePreferences(patch);
      const s = res?.data?.settings;
      if (s) hydrate(s);
      setPrefMsg("Preferences saved.");
    } catch (err) {
      setPrefErr(err.message || "Failed to save preferences.");
    } finally {
      setSavingPrefs(false);
    }
  }, [prefRows, settings, hydrate]);

  const addPrefRow = () => {
    const k = newPrefKey.trim();
    if (!k) return;
    setPrefRows((rows) => {
      const existing = rows.find((r) => r.key === k);
      if (existing) {
        return rows.map((r) => (r.key === k ? { ...r, value: newPrefValue } : r));
      }
      return [...rows, { key: k, value: newPrefValue }];
    });
    setNewPrefKey("");
    setNewPrefValue("");
  };

  const removePrefRow = (key) =>
    setPrefRows((rows) => rows.filter((r) => r.key !== key));

  const updatePrefValue = (key, value) =>
    setPrefRows((rows) => rows.map((r) => (r.key === key ? { ...r, value } : r)));

  if (!canView) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">Access restricted</h1>
          <p className="mt-2 text-slate-400">
            You don't have permission to view settings for this organization.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Organization Settings</h1>
          <p className="mt-1 text-sm text-slate-400">
            {canManage
              ? "Update your organization profile and preferences."
              : "View your organization profile and preferences (read-only)."}
          </p>
        </header>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-10 text-center text-slate-400">
            Loading settings&hellip;
          </div>
        ) : (
          settings && (
            <div className="space-y-6">
              {/* ---- Profile ---- */}
              <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h2 className="text-lg font-medium">Profile</h2>

                {/* Immutable identity */}
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">
                      Org code (immutable)
                    </label>
                    <input value={settings.code ?? ""} disabled className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">
                      Status
                    </label>
                    <input value={settings.status ?? ""} disabled className={inputClass} />
                  </div>
                </div>

                {/* Editable whitelist */}
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {PROFILE_FIELDS.map((f) => (
                    <div key={f.key}>
                      <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={profile[f.key] ?? ""}
                        onChange={(e) =>
                          setProfile((p) => ({ ...p, [f.key]: e.target.value }))
                        }
                        disabled={!canManage || savingProfile}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>

                {profileErr && (
                  <div className="mt-3 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    {profileErr}
                  </div>
                )}
                {profileMsg && (
                  <div className="mt-3 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
                    {profileMsg}
                  </div>
                )}

                {canManage && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={saveProfile}
                      disabled={savingProfile}
                      className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
                    >
                      {savingProfile ? "Saving\u2026" : "Save profile"}
                    </button>
                  </div>
                )}
              </section>

              {/* ---- Preferences ---- */}
              <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h2 className="text-lg font-medium">Preferences</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Flexible key/value settings. Values are stored as-is; removing a
                  row deletes that preference on save.
                </p>

                <div className="mt-4 space-y-2">
                  {prefRows.length === 0 ? (
                    <p className="text-sm text-slate-500">No preferences set.</p>
                  ) : (
                    prefRows.map((row) => (
                      <div key={row.key} className="flex items-center gap-2">
                        <input
                          value={row.key}
                          disabled
                          className={`${inputClass} max-w-[40%]`}
                        />
                        <input
                          value={row.value}
                          onChange={(e) => updatePrefValue(row.key, e.target.value)}
                          disabled={!canManage || savingPrefs}
                          className={inputClass}
                        />
                        {canManage && (
                          <button
                            onClick={() => removePrefRow(row.key)}
                            disabled={savingPrefs}
                            className="shrink-0 rounded-md border border-red-500/40 bg-red-500/10 px-2.5 py-1 text-xs text-red-300 hover:bg-red-500/20 disabled:opacity-50"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {canManage && (
                  <div className="mt-4 border-t border-slate-800 pt-4">
                    <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">
                      Add / overwrite a preference
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        value={newPrefKey}
                        onChange={(e) => setNewPrefKey(e.target.value)}
                        placeholder="key"
                        className={`${inputClass} max-w-[40%]`}
                      />
                      <input
                        value={newPrefValue}
                        onChange={(e) => setNewPrefValue(e.target.value)}
                        placeholder="value"
                        className={inputClass}
                      />
                      <button
                        onClick={addPrefRow}
                        className="shrink-0 rounded-md border border-slate-600 bg-slate-800 px-3 py-1 text-xs text-slate-200 hover:bg-slate-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                )}

                {prefErr && (
                  <div className="mt-3 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    {prefErr}
                  </div>
                )}
                {prefMsg && (
                  <div className="mt-3 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
                    {prefMsg}
                  </div>
                )}

                {canManage && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={savePreferences}
                      disabled={savingPrefs}
                      className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
                    >
                      {savingPrefs ? "Saving\u2026" : "Save preferences"}
                    </button>
                  </div>
                )}
              </section>
            </div>
          )
        )}

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
    </div>
  );
}

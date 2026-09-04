/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Settings™

Purpose

"How do I configure my Executive Operating System?"

Enterprise Settings Workspace

=========================================================
*/

import { useState } from "react";

import ExecutivePageHeader from "../ui/ExecutivePageHeader";
import ExecutiveSection from "../ui/ExecutiveSection";
import ExecutiveBadge from "../ui/ExecutiveBadge";

function Toggle({

    label,

    checked,

    onChange,

}) {

    return (

        <label className="flex justify-between items-center py-4 border-b border-slate-100">

            <span className="text-slate-700 font-medium">

                {label}

            </span>

            <button

                type="button"

                onClick={onChange}

                className={`w-14 h-8 rounded-full transition ${
                    checked
                        ? "bg-cyan-600"
                        : "bg-slate-300"
                }`}

            >

                <div

                    className={`w-6 h-6 bg-white rounded-full transition transform ${
                        checked
                            ? "translate-x-7"
                            : "translate-x-1"
                    }`}

                />

            </button>

        </label>

    );

}

export default function ExecutiveSettings() {

    const [

        notifications,

        setNotifications,

    ] = useState(true);

    const [

        aiRecommendations,

        setAiRecommendations,

    ] = useState(true);

    const [

        darkMode,

        setDarkMode,

    ] = useState(false);

    return (

        <div className="space-y-8">

            {/* =====================================
                Executive Header
            ====================================== */}

            <ExecutivePageHeader

                eyebrow="Executive Settings™"

                title="Executive Preferences"

                description="Configure your Executive Operating System, AI preferences, notifications, appearance and future enterprise integrations."

            />

            <div className="grid xl:grid-cols-2 gap-8">

                {/* =====================================
                    Executive Profile
                ====================================== */}

                <ExecutiveSection

                    title="Executive Profile"

                    description="Your executive workspace identity."

                >

                    <div className="space-y-5">

                        <div>

                            <label className="block text-sm font-semibold text-slate-700">

                                Executive Name

                            </label>

                            <input

                                type="text"

                                defaultValue="Executive"

                                className="w-full mt-2 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"

                            />

                        </div>

                        <div>

                            <label className="block text-sm font-semibold text-slate-700">

                                Organisation

                            </label>

                            <input

                                type="text"

                                defaultValue="LemonLogic Enterprise"

                                className="w-full mt-2 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"

                            />

                        </div>

                    </div>

                </ExecutiveSection>

                {/* =====================================
                    Executive Copilot
                ====================================== */}

                <ExecutiveSection

                    title="Executive Copilot"

                    description="Configure AI-powered executive assistance."

                >

                    <Toggle

                        label="Enable AI Recommendations"

                        checked={aiRecommendations}

                        onChange={() =>

                            setAiRecommendations(!aiRecommendations)

                        }

                    />

                    <Toggle

                        label="Enable Executive Notifications"

                        checked={notifications}

                        onChange={() =>

                            setNotifications(!notifications)

                        }

                    />

                </ExecutiveSection>

            </div>

            <div className="grid xl:grid-cols-2 gap-8">                {/* =====================================
                    Appearance
                ====================================== */}

                <ExecutiveSection

                    title="Appearance"

                    description="Workspace appearance and display."

                >

                    <Toggle

                        label="Dark Mode"

                        checked={darkMode}

                        onChange={() =>

                            setDarkMode(!darkMode)

                        }

                    />

                    <div className="pt-6">

                        <label className="block text-sm font-semibold text-slate-700">

                            Theme

                        </label>

                        <select

                            className="w-full mt-2 rounded-xl border border-slate-300 px-4 py-3"

                            defaultValue="System"

                        >

                            <option>System</option>
                            <option>Light</option>
                            <option>Dark</option>

                        </select>

                    </div>

                </ExecutiveSection>

                {/* =====================================
                    Security
                ====================================== */}

                <ExecutiveSection

                    title="Security & Authentication"

                    description="Enterprise security configuration."

                >

                    <div className="space-y-5">

                        <div className="flex justify-between items-center">

                            <span className="font-medium text-slate-700">

                                Multi-Factor Authentication

                            </span>

                            <ExecutiveBadge variant="success">

                                Ready

                            </ExecutiveBadge>

                        </div>

                        <div className="flex justify-between items-center">

                            <span className="font-medium text-slate-700">

                                Role-Based Access Control

                            </span>

                            <ExecutiveBadge variant="success">

                                Ready

                            </ExecutiveBadge>

                        </div>

                        <div className="flex justify-between items-center">

                            <span className="font-medium text-slate-700">

                                Audit Logging

                            </span>

                            <ExecutiveBadge variant="primary">

                                Enabled

                            </ExecutiveBadge>

                        </div>

                    </div>

                </ExecutiveSection>

            </div>

            {/* =====================================
                Enterprise Integrations
            ====================================== */}

            <ExecutiveSection

                title="Enterprise Integrations"

                description="Future enterprise connectivity."

            >

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">

                        <h3 className="font-bold">

                            Microsoft 365

                        </h3>

                        <ExecutiveBadge

                            variant="warning"

                            className="mt-4"

                        >

                            Planned

                        </ExecutiveBadge>

                    </div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">

                        <h3 className="font-bold">

                            Google Workspace

                        </h3>

                        <ExecutiveBadge

                            variant="warning"

                            className="mt-4"

                        >

                            Planned

                        </ExecutiveBadge>

                    </div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">

                        <h3 className="font-bold">

                            Microsoft Teams

                        </h3>

                        <ExecutiveBadge

                            variant="warning"

                            className="mt-4"

                        >

                            Planned

                        </ExecutiveBadge>

                    </div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">

                        <h3 className="font-bold">

                            Slack

                        </h3>

                        <ExecutiveBadge

                            variant="warning"

                            className="mt-4"

                        >

                            Planned

                        </ExecutiveBadge>

                    </div>

                </div>

            </ExecutiveSection>

        </div>

    );

}
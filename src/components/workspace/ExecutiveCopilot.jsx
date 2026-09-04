/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Copilot™

Purpose

"What should the Executive know right now?"

=========================================================
*/

import useExecutiveData from "../../hooks/useExecutiveData";
import {
    generateExecutiveIntelligence,
} from "../../services/executiveIntelligenceEngine";

function ActionButton({
    title,
    colour = "bg-slate-900",
}) {

    return (

        <button
            className={`${colour} text-white rounded-xl px-5 py-3 font-semibold transition hover:scale-[1.02]`}
        >

            {title}

        </button>

    );

}

function AttentionItem({

    level,

    title,

    description,

}) {

    const styles = {

        high: {
            badge: "bg-red-100 text-red-700",
            icon: "🔴",
        },

        medium: {
            badge: "bg-amber-100 text-amber-700",
            icon: "🟡",
        },

        low: {
            badge: "bg-emerald-100 text-emerald-700",
            icon: "🟢",
        },

    };

    const current =
        styles[level] || styles.low;

    return (

        <div className="rounded-2xl border border-slate-200 p-5 bg-white">

            <div className="flex justify-between items-start">

                <div>

                    <h3 className="font-bold text-slate-900">

                        {current.icon} {title}

                    </h3>

                    <p className="text-slate-600 mt-2 leading-7">

                        {description}

                    </p>

                </div>

                <span
                    className={`${current.badge} px-3 py-1 rounded-full text-xs font-bold uppercase`}
                >

                    {level}

                </span>

            </div>

        </div>

    );

}

export default function ExecutiveCopilot() {

    const {

        assessment,

        executiveProgramme,

    } = useExecutiveData();

    if (!executiveProgramme) return null;

    const intelligence =
        generateExecutiveIntelligence(
            assessment,
            executiveProgramme
        );

    const {

        executiveCopilot,

    } = intelligence;

    return (

        <section className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">

            {/* =======================================
                Header
            ======================================== */}

            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8">

                <div className="flex justify-between items-start">

                    <div>

                        <p className="uppercase tracking-[0.35em] text-xs text-slate-400">

                            Executive Copilot™

                        </p>

                        <h2 className="text-4xl font-bold mt-4">

                            AI Executive Brief

                        </h2>

                        <p className="text-slate-300 mt-5 leading-8 max-w-3xl">

                            Executive Intelligence has completed today's
                            strategic assessment and identified the
                            highest-priority items requiring executive
                            attention.

                        </p>

                    </div>

                    <span className="bg-emerald-500 rounded-full px-5 py-2 font-semibold">

                        ● LIVE

                    </span>

                </div>

            </div>

            {/* =======================================
                Executive Summary
            ======================================== */}

            <div className="bg-slate-50 p-8">

                <div className="grid lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            AI Confidence

                        </p>

                        <h2 className="text-4xl font-bold text-cyan-600 mt-3">

                            {executiveCopilot.confidence}%

                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Programme Health

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            {executiveCopilot.programmeHealth}

                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Executive Pulse

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-3">

                            {executiveCopilot.executivePulse}%

                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Expected ROI

                        </p>

                        <h2 className="text-4xl font-bold text-emerald-600 mt-3">

                            {executiveCopilot.roi}%

                        </h2>

                    </div>

                </div>

            </div>

            <div className="p-8 space-y-6">
                                {/* =======================================
                    Executive Attention Queue
                ======================================== */}

                <AttentionItem
                    level="high"
                    title="Executive KPI Adoption"
                    description="AI has detected slowing KPI adoption within Operations. Executive sponsorship is recommended within the next 48 hours."
                />

                <AttentionItem
                    level="medium"
                    title="Programme Governance"
                    description="The Executive Steering Committee meeting is due. Scheduling this session will help maintain delivery momentum."
                />

                <AttentionItem
                    level="low"
                    title="Transformation Momentum"
                    description="Overall programme health remains stable and Executive Pulse continues to improve across business units."
                />

            </div>

            {/* =======================================
                AI Recommendation
            ======================================== */}

            <div className="border-t bg-white p-8">

                <p className="uppercase tracking-[0.35em] text-xs text-slate-500">

                    AI Recommendation

                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-4">

                    Prioritise Executive Dashboard Rollout

                </h3>

                <p className="text-slate-600 leading-8 mt-5">

                    Executive Intelligence has analysed the current
                    transformation programme and recommends expanding
                    Executive Dashboard adoption together with Workflow
                    Automation. Current evidence indicates this initiative
                    provides the highest expected business impact over the
                    next 60 days while maintaining strong executive
                    confidence.

                </p>

            </div>

            {/* =======================================
                Executive Actions
            ======================================== */}

            <div className="border-t bg-slate-50 p-8">

                <div className="flex flex-wrap gap-4">

                    <ActionButton
                        title="Ask Copilot"
                    />

                    <ActionButton
                        title="Generate Board Pack"
                        colour="bg-cyan-600"
                    />

                    <ActionButton
                        title="Explain Recommendation"
                        colour="bg-emerald-600"
                    />

                    <ActionButton
                        title="View Evidence"
                        colour="bg-purple-600"
                    />

                </div>

            </div>

        </section>

    );

}
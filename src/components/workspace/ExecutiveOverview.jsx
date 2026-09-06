/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Overview™

Purpose

"How is the organisation performing today?"

This is the Executive Home workspace.

=========================================================
*/

import { useRef } from "react";
import useExecutiveData from "../../hooks/useExecutiveData";

import ExecutiveMetricCard from "../ui/ExecutiveMetricCard";
import ExecutiveSection from "../ui/ExecutiveSection";
import ExecutiveBadge from "../ui/ExecutiveBadge";
import ExecutiveButton from "../ui/ExecutiveButton";

import ExecutiveCommandCenter from "./ExecutiveCommandCenter";
import ExecutiveCopilot from "./ExecutiveCopilot";

function Alert({

    level,

    title,

    message,

}) {

    const styles = {

        high: {

            colour: "border-red-300 bg-red-50",

            badge: "danger",

            icon: "🔴",

        },

        medium: {

            colour: "border-amber-300 bg-amber-50",

            badge: "warning",

            icon: "🟡",

        },

        low: {

            colour: "border-emerald-300 bg-emerald-50",

            badge: "success",

            icon: "🟢",

        },

    };

    const current = styles[level] || styles.low;

    return (

        <div className={`rounded-2xl border p-5 ${current.colour}`}>

            <div className="flex justify-between items-center">

                <h3 className="font-bold">

                    {current.icon} {title}

                </h3>

                <ExecutiveBadge variant={current.badge}>

                    {level}

                </ExecutiveBadge>

            </div>

            <p className="mt-4 leading-7 text-slate-700">

                {message}

            </p>

        </div>

    );

}

export default function ExecutiveOverview({ onNavigate }) {

    const copilotRef = useRef(null);
    const { executiveProgramme } = useExecutiveData();

    if (!executiveProgramme) return null;

    const {

        executivePulse,

        completion,

        recommendation,

        tasks = [],

    } = executiveProgramme;

    const completedTasks =

        tasks.filter(task => task.completed).length;

    return (

        <div className="space-y-8">

            {/* =======================================
                Executive Command Centre
            ======================================== */}

            <ExecutiveCommandCenter />

            {/* =======================================
                Executive Copilot
            ======================================== */}

            <div ref={copilotRef}><div ref={copilotRef}><ExecutiveCopilot /></div></div>

            {/* =======================================
                Executive KPI Summary
            ======================================== */}

            <div className="grid lg:grid-cols-4 gap-6">

                <ExecutiveMetricCard

                    title="Executive Pulse"

                    value={`${executivePulse?.pulse ?? 0}%`}

                    subtitle="Transformation Health"

                    accent="text-cyan-600"

                />

                <ExecutiveMetricCard

                    title="Programme Completion"

                    value={`${completion}%`}

                    subtitle="Overall Completion"

                    accent="text-green-600"

                />

                <ExecutiveMetricCard

                    title="Completed Tasks"

                    value={completedTasks}

                    subtitle={`${tasks.length} Total Tasks`}

                    accent="text-purple-600"

                />

                <ExecutiveMetricCard

                    title="Expected ROI"

                    value={recommendation?.roi ?? "185%"}

                    subtitle="Business Impact"

                    accent="text-emerald-600"

                />

            </div>

            {/* =======================================
                Executive Alerts
            ======================================== */}

            <ExecutiveSection

                eyebrow="Executive Alerts"

                title="Immediate Attention"

            >

                <div className="space-y-5">

                    <Alert

                        level="high"

                        title="Executive Steering Committee"

                        message="The next Executive Steering Committee meeting should be scheduled within the next 48 hours to maintain transformation momentum and remove delivery blockers."

                    />

                    <Alert

                        level="medium"

                        title="Operational Adoption"

                        message="Operational KPI adoption is progressing well, however AI recommends additional engagement within Operations to accelerate organisation-wide maturity."

                    />

                    <Alert

                        level="low"

                        title="Transformation Health"

                        message="Overall programme health remains stable. Executive Pulse continues to improve while delivery confidence remains high."

                    />

                </div>

            </ExecutiveSection>

            {/* =======================================
                Executive Quick Actions
            ======================================== */}

            <ExecutiveSection

                className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-0"

                eyebrow="Executive Actions"

                title="What would you like to do?"

            >

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">                    <ExecutiveButton

                        variant="secondary"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"
                        onClick={() => copilotRef.current?.scrollIntoView({ behavior: "smooth" })}

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Ask Executive Copilot

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                AI strategic assistance

                            </p>

                        </div>

                    </ExecutiveButton>

                    <ExecutiveButton

                        variant="success"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"
                        onClick={() => onNavigate?.("board")}

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Generate Board Pack

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Executive presentation

                            </p>

                        </div>

                    </ExecutiveButton>

                    <ExecutiveButton

                        variant="purple"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"
                        onClick={() => onNavigate?.("analytics")}

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Executive Analytics

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Review KPI trends

                            </p>

                        </div>

                    </ExecutiveButton>

                    <ExecutiveButton

                        variant="warning"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"
                        onClick={() => onNavigate?.("delivery")}

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Delivery Review

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Open programme delivery

                            </p>

                        </div>

                    </ExecutiveButton>

                </div>

            </ExecutiveSection>

        </div>

    );

}
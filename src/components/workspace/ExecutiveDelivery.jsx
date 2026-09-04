/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Delivery™

Purpose

"Are we executing the transformation successfully?"

This workspace focuses on execution,
delivery confidence, blockers,
approvals and operational governance.

=========================================================
*/

import useExecutiveData from "../../hooks/useExecutiveData";

import ExecutivePageHeader from "../ui/ExecutivePageHeader";
import ExecutiveMetricCard from "../ui/ExecutiveMetricCard";
import ExecutiveSection from "../ui/ExecutiveSection";
import ExecutiveBadge from "../ui/ExecutiveBadge";

import ExecutiveTasks from "./ExecutiveTasks";
import ExecutiveNotes from "./ExecutiveNotes";

export default function ExecutiveDelivery() {

    const {

        executiveProgramme,

    } = useExecutiveData();

    if (!executiveProgramme) return null;

    const {

        completion,

        executivePulse,

        tasks = [],

    } = executiveProgramme;

    const completedTasks =
        tasks.filter(task => task.completed).length;

    return (

        <div className="space-y-8">

            {/* =====================================
                Executive Header
            ====================================== */}

            <ExecutivePageHeader

                eyebrow="Executive Delivery™"

                title="Delivery & Execution Centre"

                description="Monitor execution performance, delivery governance, operational blockers and implementation readiness across the transformation."

            />

            {/* =====================================
                Executive KPI Summary
            ====================================== */}

            <div className="grid lg:grid-cols-4 gap-6">

                <ExecutiveMetricCard

                    title="Completion"

                    value={`${completion}%`}

                    subtitle="Programme Completion"

                    accent="text-cyan-600"

                />

                <ExecutiveMetricCard

                    title="Executive Pulse"

                    value={`${executivePulse?.pulse ?? 0}%`}

                    subtitle="Delivery Health"

                    accent="text-green-600"

                />

                <ExecutiveMetricCard

                    title="Completed Tasks"

                    value={completedTasks}

                    subtitle={`${tasks.length} Total Tasks`}

                    accent="text-purple-600"

                />

                <ExecutiveMetricCard

                    title="Delivery Confidence"

                    value="High"

                    subtitle="AI Forecast"

                    accent="text-emerald-600"

                />

            </div>

            {/* =====================================
                Delivery Governance
            ====================================== */}

            <ExecutiveSection

                eyebrow="Delivery Governance"

                title="Programme Execution"

                description="Track operational governance, delivery ownership and implementation progress."

            >

                <div className="space-y-5">

                    <div className="flex items-start justify-between rounded-2xl border border-slate-200 p-5">

                        <div>

                            <h3 className="font-bold text-slate-900">

                                Executive Steering Committee

                            </h3>

                            <p className="text-slate-500 mt-2">

                                Owner: Programme Director

                            </p>

                        </div>

                        <ExecutiveBadge variant="success">

                            Scheduled

                        </ExecutiveBadge>

                    </div>

                    <div className="flex items-start justify-between rounded-2xl border border-slate-200 p-5">

                        <div>

                            <h3 className="font-bold text-slate-900">

                                Operational KPI Rollout

                            </h3>

                            <p className="text-slate-500 mt-2">

                                Owner: Operations Lead

                            </p>

                        </div>

                        <ExecutiveBadge variant="primary">

                            In Progress

                        </ExecutiveBadge>

                    </div>

                    <div className="flex items-start justify-between rounded-2xl border border-slate-200 p-5">

                        <div>

                            <h3 className="font-bold text-slate-900">

                                Executive Dashboard Deployment

                            </h3>

                            <p className="text-slate-500 mt-2">

                                Owner: Technology Team

                            </p>

                        </div>

                        <ExecutiveBadge variant="purple">

                            On Track

                        </ExecutiveBadge>

                    </div>                    <div className="flex items-start justify-between rounded-2xl border border-slate-200 p-5">

                        <div>

                            <h3 className="font-bold text-slate-900">

                                Workflow Automation Expansion

                            </h3>

                            <p className="text-slate-500 mt-2">

                                Owner: Transformation Office

                            </p>

                        </div>

                        <ExecutiveBadge variant="warning">

                            Monitoring

                        </ExecutiveBadge>

                    </div>

                </div>

            </ExecutiveSection>

            {/* =====================================
                Delivery Workspace
            ====================================== */}

            <div className="grid xl:grid-cols-3 gap-8">

                <div className="xl:col-span-2">

                    <ExecutiveTasks />

                </div>

                <div>

                    <ExecutiveNotes />

                </div>

            </div>

            {/* =====================================
                Executive Delivery Assessment
            ====================================== */}

            <ExecutiveSection

                eyebrow="Delivery Intelligence"

                title="Executive Delivery Assessment"

            >

                <p className="text-slate-700 leading-8">

                    Executive Intelligence indicates that programme
                    execution remains healthy. Current delivery
                    performance is aligned with transformation
                    objectives, while operational governance,
                    executive sponsorship and implementation
                    discipline continue to support successful
                    programme execution.

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    <ExecutiveBadge variant="success">

                        Delivery Healthy

                    </ExecutiveBadge>

                    <ExecutiveBadge variant="primary">

                        Governance Active

                    </ExecutiveBadge>

                    <ExecutiveBadge variant="purple">

                        AI Verified

                    </ExecutiveBadge>

                </div>

            </ExecutiveSection>

        </div>

    );

}
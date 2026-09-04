/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Programme™

Purpose

"How is the transformation programme progressing?"

This workspace orchestrates the programme
delivery components already built for LEIP.

No business logic lives here.

=========================================================
*/

import useExecutiveData from "../../hooks/useExecutiveData";

import ExecutivePageHeader from "../ui/ExecutivePageHeader";
import ExecutiveMetricCard from "../ui/ExecutiveMetricCard";
import ExecutiveButton from "../ui/ExecutiveButton";

import TransformationProgress from "./TransformationProgress";
import ExecutiveMilestones from "./ExecutiveMilestones";
import ExecutiveTimeline from "./ExecutiveTimeline";
import ExecutiveTasks from "./ExecutiveTasks";

export default function ExecutiveProgramme() {

    const {

        executiveProgramme,

    } = useExecutiveData();

    if (!executiveProgramme) return null;

    const {

        completion,

        executivePulse,

        milestones = [],

        tasks = [],

    } = executiveProgramme;

    const completedMilestones =
        milestones.filter(item => item.completed).length;

    const completedTasks =
        tasks.filter(item => item.completed).length;

    return (

        <div className="space-y-8">

            {/* =====================================
                Programme Header
            ====================================== */}

            <ExecutivePageHeader
                eyebrow="Executive Programme™"
                title="Transformation Delivery"
                description="Monitor programme execution, delivery milestones, implementation progress, task completion and transformation momentum from one executive workspace."
            />

            {/* =====================================
                Programme Summary
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
                    subtitle="Transformation Health"
                    accent="text-emerald-600"
                />

                <ExecutiveMetricCard
                    title="Milestones"
                    value={`${completedMilestones}/${milestones.length}`}
                    subtitle="Completed"
                    accent="text-purple-600"
                />

                <ExecutiveMetricCard
                    title="Tasks"
                    value={`${completedTasks}/${tasks.length}`}
                    subtitle="Completed"
                    accent="text-orange-500"
                />

            </div>

            {/* =====================================
                Quick Actions
            ====================================== */}

            <div className="flex flex-wrap gap-4">

                <ExecutiveButton variant="secondary">

                    Generate Programme Report

                </ExecutiveButton>

                <ExecutiveButton variant="success">

                    View Milestones

                </ExecutiveButton>

                <ExecutiveButton variant="purple">

                    Executive Timeline

                </ExecutiveButton>

            </div>

            {/* =====================================
                Transformation Progress
            ====================================== */}

            <TransformationProgress />

            {/* =====================================
                Programme Workspace
            ====================================== */}

            <div className="grid xl:grid-cols-3 gap-8">

                <div className="xl:col-span-2 space-y-8">

                    <ExecutiveMilestones />

                    <ExecutiveTimeline />                </div>

                {/* =====================================
                    Programme Delivery Panel
                ====================================== */}

                <div className="space-y-8">

                    <section className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">

                        <p className="uppercase tracking-[0.35em] text-xs text-slate-500">

                            Programme Status

                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-4">

                            Delivery Overview

                        </h3>

                        <div className="space-y-5 mt-8">

                            <div className="flex justify-between items-center">

                                <span className="text-slate-600">

                                    Programme Health

                                </span>

                                <span className="font-bold text-emerald-600">

                                    Stable

                                </span>

                            </div>

                            <div className="flex justify-between items-center">

                                <span className="text-slate-600">

                                    Executive Pulse

                                </span>

                                <span className="font-bold text-cyan-600">

                                    {executivePulse?.pulse ?? 0}%

                                </span>

                            </div>

                            <div className="flex justify-between items-center">

                                <span className="text-slate-600">

                                    Completion

                                </span>

                                <span className="font-bold text-purple-600">

                                    {completion}%

                                </span>

                            </div>

                            <div className="flex justify-between items-center">

                                <span className="text-slate-600">

                                    Delivery Confidence

                                </span>

                                <span className="font-bold text-emerald-600">

                                    High

                                </span>

                            </div>

                        </div>

                    </section>

                    <ExecutiveTasks />

                </div>

            </div>

        </div>

    );

}
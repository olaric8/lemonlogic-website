/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Analytics™

Purpose

"How are performance and trends evolving?"

This workspace provides executive-level
analytics and forecasting using existing
LEIP analytics components.

=========================================================
*/

import useExecutiveData from "../../hooks/useExecutiveData";

import ExecutivePageHeader from "../ui/ExecutivePageHeader";
import ExecutiveMetricCard from "../ui/ExecutiveMetricCard";
import ExecutiveSection from "../ui/ExecutiveSection";
import ExecutiveBadge from "../ui/ExecutiveBadge";

import ExecutiveAnalyticsDashboard from "./ExecutiveAnalyticsDashboard";

export default function ExecutiveAnalytics() {

    const {

        executiveProgramme,

    } = useExecutiveData();

    if (!executiveProgramme) return null;

    const {

        executivePulse,

        completion,

        recommendation,

    } = executiveProgramme;

    return (

        <div className="space-y-8">

            {/* =====================================
                Executive Header
            ====================================== */}

            <ExecutivePageHeader

                eyebrow="Executive Analytics™"

                title="Performance & Forecasting"

                description="Analyse executive KPIs, transformation performance, delivery trends and predictive intelligence across the organisation."

            />

            {/* =====================================
                Executive KPI Summary
            ====================================== */}

            <div className="grid lg:grid-cols-4 gap-6">

                <ExecutiveMetricCard

                    title="Executive Pulse"

                    value={`${executivePulse?.pulse ?? 0}%`}

                    subtitle="Transformation Health"

                    accent="text-cyan-600"

                />

                <ExecutiveMetricCard

                    title="Completion"

                    value={`${completion}%`}

                    subtitle="Programme Progress"

                    accent="text-green-600"

                />

                <ExecutiveMetricCard

                    title="Expected ROI"

                    value={recommendation?.roi ?? "185%"}

                    subtitle="Business Impact"

                    accent="text-purple-600"

                />

                <ExecutiveMetricCard

                    title="Confidence"

                    value={`${recommendation?.confidence ?? 94}%`}

                    subtitle="AI Recommendation"

                    accent="text-emerald-600"

                />

            </div>

            {/* =====================================
                Executive Analytics Dashboard
            ====================================== */}

            <ExecutiveAnalyticsDashboard />

            {/* =====================================
                Executive Forecast
            ====================================== */}

            <ExecutiveSection

                eyebrow="Executive Forecast"

                title="Predictive Intelligence"

            >

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="rounded-2xl border border-slate-200 bg-white p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Delivery Confidence

                        </p>

                        <h3 className="text-3xl font-bold mt-4 text-emerald-600">

                            High

                        </h3>

                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Risk Outlook

                        </p>

                        <h3 className="text-3xl font-bold mt-4 text-orange-500">

                            Low

                        </h3>

                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Forecast Accuracy

                        </p>

                        <h3 className="text-3xl font-bold mt-4 text-cyan-600">

                            94%

                        </h3>

                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6">

                        <p className="text-xs uppercase tracking-wider text-slate-500">

                            Projected ROI

                        </p>

                        <h3 className="text-3xl font-bold mt-4 text-purple-600">

                            {recommendation?.roi ?? "185%"}

                        </h3>

                    </div>

                </div>

            </ExecutiveSection>            {/* =====================================
                Executive Outlook
            ====================================== */}

            <ExecutiveSection

                eyebrow="Executive Outlook"

                title="AI Predictive Summary"

            >

                <div className="space-y-6">

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">

                        <h3 className="font-bold text-slate-900">

                            Executive Forecast

                        </h3>

                        <p className="text-slate-700 leading-8 mt-4">

                            Based on current transformation momentum,
                            programme execution remains on track.
                            Executive Pulse continues to improve while
                            implementation risks remain within acceptable
                            tolerance levels.

                        </p>

                    </div>

                    <div className="rounded-2xl bg-cyan-50 border border-cyan-200 p-6">

                        <div className="flex items-center justify-between">

                            <h3 className="font-bold text-cyan-900">

                                AI Recommendation

                            </h3>

                            <ExecutiveBadge variant="primary">

                                AI Insight

                            </ExecutiveBadge>

                        </div>

                        <p className="text-slate-700 leading-8 mt-4">

                            Continue prioritising Executive Dashboard
                            adoption, Workflow Automation and KPI
                            Intelligence to maximise business value over
                            the next sixty days.

                        </p>

                    </div>

                </div>

            </ExecutiveSection>

            {/* =====================================
                Executive Summary
            ====================================== */}

            <ExecutiveSection

                className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-0"

                eyebrow="Executive Summary"

                title="Performance Remains Positive"

            >

                <p className="text-slate-300 leading-8 max-w-4xl">

                    Executive Intelligence predicts continued
                    transformation success provided current
                    governance, executive sponsorship and
                    operational engagement remain consistent.
                    No critical performance indicators currently
                    require immediate executive intervention.

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    <ExecutiveBadge variant="success">

                        Healthy Programme

                    </ExecutiveBadge>

                    <ExecutiveBadge variant="primary">

                        AI Verified

                    </ExecutiveBadge>

                    <ExecutiveBadge variant="purple">

                        Positive Outlook

                    </ExecutiveBadge>

                </div>

            </ExecutiveSection>

        </div>

    );

}
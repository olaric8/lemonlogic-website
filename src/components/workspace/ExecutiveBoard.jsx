/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Board™

Purpose

"How do I prepare for the Board?"

Board-ready executive reporting workspace.

=========================================================
*/

import useExecutiveData from "../../hooks/useExecutiveData";

import ExecutivePageHeader from "../ui/ExecutivePageHeader";
import ExecutiveMetricCard from "../ui/ExecutiveMetricCard";
import ExecutiveSection from "../ui/ExecutiveSection";
import ExecutiveButton from "../ui/ExecutiveButton";
import ExecutiveBadge from "../ui/ExecutiveBadge";

export default function ExecutiveBoard() {

    const {

        executiveProgramme,

    } = useExecutiveData();

    if (!executiveProgramme) return null;

    const {

        completion,

        executivePulse,

        recommendation,

    } = executiveProgramme;

    return (

        <div className="space-y-8">

            {/* =====================================
                Executive Header
            ====================================== */}

            <ExecutivePageHeader

                eyebrow="Executive Board™"

                title="Board Reporting Centre"

                description="Prepare executive-ready reports, board packs, strategic summaries and transformation updates for leadership meetings."

            />

            {/* =====================================
                Executive Summary
            ====================================== */}

            <div className="grid lg:grid-cols-4 gap-6">

                <ExecutiveMetricCard

                    title="Board Readiness"

                    value="92%"

                    subtitle="Presentation Ready"

                    accent="text-green-600"

                />

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

                    accent="text-purple-600"

                />

                <ExecutiveMetricCard

                    title="Expected ROI"

                    value={recommendation?.roi ?? "185%"}

                    subtitle="Business Impact"

                    accent="text-emerald-600"

                />

            </div>

            {/* =====================================
                Executive Deliverables
            ====================================== */}

            <ExecutiveSection

                eyebrow="Executive Deliverables"

                title="Generate Board Pack"

                description="Produce executive-ready reports and board materials for strategic leadership meetings."

            >

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <ExecutiveButton

                        variant="danger"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Board Pack (PDF)

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Generate a professionally formatted executive board report.

                            </p>

                        </div>

                    </ExecutiveButton>

                    <ExecutiveButton

                        variant="warning"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Executive Presentation

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Generate a PowerPoint presentation for Executive Steering Committee meetings.

                            </p>

                        </div>

                    </ExecutiveButton>

                    <ExecutiveButton

                        variant="secondary"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Executive Summary

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Create a concise strategic summary highlighting progress, risks and opportunities.

                            </p>

                        </div>

                    </ExecutiveButton>

                    <ExecutiveButton

                        variant="success"

                        fullWidth

                        className="justify-start h-full min-h-[150px]"

                    >

                        <div className="text-left">

                            <h3 className="text-lg font-bold">

                                Board Intelligence

                            </h3>

                            <p className="text-sm mt-2 opacity-90">

                                Generate AI-driven board recommendations with supporting executive evidence.

                            </p>

                        </div>

                    </ExecutiveButton>

                </div>

            </ExecutiveSection>            {/* =====================================
                Board Readiness
            ====================================== */}

            <ExecutiveSection

                eyebrow="Board Readiness"

                title="Executive Readiness Assessment"

                description="Validate the readiness of executive materials before Board and Executive Steering Committee meetings."

            >

                <div className="space-y-5">

                    <div className="flex justify-between items-center">

                        <span className="text-slate-700">

                            Executive Summary

                        </span>

                        <ExecutiveBadge variant="success">

                            Ready

                        </ExecutiveBadge>

                    </div>

                    <div className="flex justify-between items-center">

                        <span className="text-slate-700">

                            KPI Dashboard

                        </span>

                        <ExecutiveBadge variant="success">

                            Ready

                        </ExecutiveBadge>

                    </div>

                    <div className="flex justify-between items-center">

                        <span className="text-slate-700">

                            Strategic Risks

                        </span>

                        <ExecutiveBadge variant="warning">

                            Reviewed

                        </ExecutiveBadge>

                    </div>

                    <div className="flex justify-between items-center">

                        <span className="text-slate-700">

                            Transformation Roadmap

                        </span>

                        <ExecutiveBadge variant="success">

                            Ready

                        </ExecutiveBadge>

                    </div>

                    <div className="flex justify-between items-center">

                        <span className="text-slate-700">

                            Executive Recommendation

                        </span>

                        <ExecutiveBadge variant="success">

                            Approved

                        </ExecutiveBadge>

                    </div>

                </div>

            </ExecutiveSection>

            {/* =====================================
                AI Board Recommendation
            ====================================== */}

            <ExecutiveSection

                eyebrow="AI Board Recommendation"

                title="Ready for Executive Review"

            >

                <p className="text-slate-700 leading-8">

                    Executive Intelligence concludes that the
                    transformation programme remains healthy,
                    executive engagement is positive, and delivery
                    performance continues to improve. Current
                    evidence supports proceeding with the next
                    programme phase while maintaining governance,
                    KPI monitoring and operational sponsorship.

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    <ExecutiveBadge variant="success">

                        Executive Ready

                    </ExecutiveBadge>

                    <ExecutiveBadge variant="primary">

                        Board Approved

                    </ExecutiveBadge>

                    <ExecutiveBadge variant="purple">

                        AI Verified

                    </ExecutiveBadge>

                </div>

            </ExecutiveSection>

        </div>

    );

}
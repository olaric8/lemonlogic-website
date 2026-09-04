/*
========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Intelligence Centre™

Purpose

"What does the AI know that I don't?"

This component intentionally DOES NOT duplicate:

• Executive Brief
• Daily Greeting
• Executive Recommendation
• Command Centre

Those belong elsewhere.

========================================================
*/

import useExecutiveData from "../../hooks/useExecutiveData";
import {
    generateExecutiveIntelligence,
} from "../../services/executiveIntelligenceEngine";

function Section({
    title,
    children,
}) {
    return (
        <section className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8">

            <h3 className="text-xl font-bold text-slate-900 mb-6">

                {title}

            </h3>

            {children}

        </section>
    );
}

function Metric({
    title,
    value,
    accent = "text-cyan-600",
}) {

    return (

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">

            <p className="uppercase tracking-wider text-xs text-slate-500">

                {title}

            </p>

            <h3 className={`text-4xl font-bold mt-4 ${accent}`}>

                {value}

            </h3>

        </div>

    );

}

function Signal({
    trend,
    text,
}) {

    const colour =
        trend === "up"
            ? "text-green-600"
            : trend === "down"
            ? "text-orange-500"
            : "text-slate-500";

    const icon =
        trend === "up"
            ? "▲"
            : trend === "down"
            ? "▼"
            : "■";

    return (

        <div className="flex gap-4 items-start">

            <span className={`${colour} font-bold`}>

                {icon}

            </span>

            <p className="text-slate-700 leading-7">

                {text}

            </p>

        </div>

    );

}

function Bullet({
    text,
}) {

    return (

        <div className="flex gap-3 items-start">

            <div className="w-2 h-2 rounded-full bg-cyan-500 mt-3" />

            <p className="text-slate-700">

                {text}

            </p>

        </div>

    );

}

export default function ExecutiveIntelligenceHub() {

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

        insights,

        alerts,

        opportunities,

        boardReadiness,

    } = intelligence;

    return (

        <section className="rounded-3xl overflow-hidden shadow-2xl">

            {/* =====================================
                HEADER
            ====================================== */}

            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-10 py-8 text-white">

                <div className="flex justify-between items-start">

                    <div>

                        <p className="uppercase tracking-[0.45em] text-xs text-slate-400">

                            Executive Intelligence Centre™

                        </p>

                        <h2 className="text-5xl font-bold mt-4">

                            AI Strategic Assessment

                        </h2>

                        <p className="text-slate-300 mt-5 max-w-4xl leading-8">

                            Executive Intelligence continuously analyses
                            programme performance, delivery momentum,
                            strategic risk and transformation opportunities
                            to support executive decision-making.

                        </p>

                    </div>

                    <div className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold">

                        ● LIVE

                    </div>

                </div>

            </div>

            {/* =====================================
                EXECUTIVE STATUS
            ====================================== */}

            <div className="bg-slate-100 p-10">

                <div className="grid lg:grid-cols-5 gap-6">

                    <Metric

                        title="AI Confidence"

                        value={`${executiveCopilot.confidence}%`}

                        accent="text-cyan-600"

                    />

                    <Metric

                        title="Programme Status"

                        value="Stable"

                        accent="text-green-600"

                    />

                    <Metric

                        title="Momentum"

                        value="▲"

                        accent="text-green-600"

                    />

                    <Metric

                        title="Emerging Risks"

                        value="2"

                        accent="text-orange-500"

                    />

                    <Metric

                        title="Opportunities"

                        value="4"

                        accent="text-purple-600"

                    />

                </div>

            </div>

            {/* =====================================
                MAIN GRID
            ====================================== */}

            <div className="grid xl:grid-cols-2 gap-8 bg-slate-100 p-10">
                            {/* =====================================
                    STRATEGIC SIGNALS
                ====================================== */}

                <Section title="Strategic Signals">

                    <div className="space-y-5">

                        <Signal
                            trend="up"
                            text="Executive Pulse continues to improve across the transformation programme."
                        />

                        <Signal
                            trend="up"
                            text="Executive KPI adoption is accelerating across business units."
                        />

                        <Signal
                            trend="flat"
                            text="Reporting automation has completed successfully."
                        />

                        <Signal
                            trend="down"
                            text="Operations adoption requires additional executive sponsorship."
                        />

                    </div>

                </Section>

                {/* =====================================
                    AI STRATEGIC NARRATIVE
                ====================================== */}

                <Section title="AI Strategic Assessment">

                    <p className="text-slate-700 leading-8">

                        Executive Intelligence has analysed programme
                        execution, transformation velocity, executive
                        engagement, operational performance and delivery
                        momentum.

                    </p>

                    <p className="text-slate-700 leading-8 mt-6">

                        Current evidence indicates that expanding
                        Operational Intelligence together with KPI
                        Automation presents the highest-value executive
                        initiative over the next 60 days.

                    </p>

                </Section>

                {/* =====================================
                    OPPORTUNITIES
                ====================================== */}

                <Section title="Emerging Opportunities">

                    <div className="space-y-4">

                        <Bullet text="Executive Reporting Automation" />

                        <Bullet text="Workflow Intelligence Expansion" />

                        <Bullet text="AI Decision Support" />

                        <Bullet text="Enterprise KPI Automation" />

                    </div>

                </Section>

                {/* =====================================
                    RISKS
                ====================================== */}

                <Section title="Strategic Risks">

                    <div className="space-y-4">

                        <Bullet text="Executive Engagement" />

                        <Bullet text="Operations Adoption" />

                        <Bullet text="Reporting Consistency" />

                        <Bullet text="Data Quality Monitoring" />

                    </div>

                </Section>

                {/* =====================================
                    AI CONFIDENCE
                ====================================== */}

                <Section title="AI Confidence Engine">

                    <div className="grid md:grid-cols-2 gap-6">

                        <Metric
                            title="Confidence"
                            value={`${executiveCopilot.confidence}%`}
                            accent="text-cyan-600"
                        />

                        <Metric
                            title="Evidence Sources"
                            value="7"
                            accent="text-green-600"
                        />

                        <Metric
                            title="Models"
                            value="LEIP"
                            accent="text-purple-600"
                        />

                        <Metric
                            title="Last Analysis"
                            value="Now"
                            accent="text-orange-500"
                        />

                    </div>

                </Section>

            </div>

        </section>

    );

}
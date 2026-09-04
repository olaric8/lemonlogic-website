import { useMemo } from "react";
import { exportBoardReportPDF } from "../utils/exportBoardReportPDF";
import useExecutiveData from "../hooks/useExecutiveData";

function MetricCard({
  title,
  value,
  subtitle,
  accent = "text-yellow-500",
}) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className={`text-3xl font-bold mt-2 ${accent}`}>
        {value}
      </p>

      {subtitle && (
        <p className="text-sm text-slate-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function BoardReport() {

  const {
    assessment,
    executiveProgramme,
    notes,
  } = useExecutiveData();

  const assessmentData = assessment;

  const {
    executivePulse,
    kpis,
    decision,
    forecast,
    insights,
    completion,
    phase,
    readiness,
  } = executiveProgramme;

  const history = useMemo(() => {

    try {

      const saved =
        localStorage.getItem(
          "leipAssessmentHistory"
        );

      return saved
        ? JSON.parse(saved)
        : [];

    } catch (error) {

      console.error(error);

      return [];

    }

  }, []);

  const latest =
    history[history.length - 1];

  const first =
    history[0];

  const improvement =
    history.length > 1 &&
    latest &&
    first
      ? latest.readinessPercentage -
        first.readinessPercentage
      : 0;

  if (!assessmentData) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <div className="bg-white rounded-2xl shadow p-10">

          <h1 className="text-3xl font-bold">
            Executive Board Report
          </h1>

          <p className="text-slate-500 mt-4">
            Complete an Executive Assessment
            before generating a Board Report.
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          {/* =======================================================
              HEADER
          ======================================================= */}

          <div className="flex flex-col xl:flex-row justify-between gap-10 mb-12">

            <div>

              <p className="uppercase tracking-[0.25em] text-xs text-slate-500">

                LemonLogic Executive Intelligence Platform

              </p>

              <h1 className="text-5xl font-bold mt-4">

                Executive Board Report

              </h1>

              <p className="text-slate-500 mt-4">

                Board-Level Transformation Intelligence

              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div>

                  <p className="text-sm text-slate-500">
                    Organisation
                  </p>

                  <p className="font-semibold">
                    {assessmentData.companyName}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Assessment Date
                  </p>

                  <p className="font-semibold">
                    {assessmentData.assessmentDate}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Report ID
                  </p>

                  <p className="font-semibold">
                    {assessmentData.reportId}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Classification
                  </p>

                  <p className="font-semibold text-red-600">
                    {assessmentData.classification}
                  </p>

                </div>

              </div>

            </div>

            <div>

              <button

                onClick={() =>
                  exportBoardReportPDF({
                    assessmentData,
                    executiveProgramme,
                    notes,
                    improvement,
                  })
                }

                className="bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-4 rounded-xl font-semibold"

              >

                Export Executive PDF

              </button>

            </div>

          </div>

          {/* =======================================================
              EXECUTIVE OVERVIEW
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-8">

              Executive Overview

            </h2>

            <div className="grid lg:grid-cols-4 gap-6">

              <MetricCard
                title="Programme Phase"
                value={phase}
                subtitle="Current Lifecycle"
                accent="text-slate-900"
              />

              <MetricCard
                title="Completion"
                value={`${completion}%`}
                subtitle="Programme Progress"
              />

              <MetricCard
                title="Executive Health"
                value={`${kpis.executiveHealth}%`}
                subtitle={kpis.maturity}
                accent="text-green-600"
              />

              <MetricCard
                title="Executive Pulse"
                value={`${executivePulse.pulse}%`}
                subtitle={executivePulse.momentum}
                accent="text-blue-600"
              />

            </div>

          </section>

          {/* =======================================================
              BOARD DECISION SUMMARY
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-8">

              Board Decision Summary

            </h2>

            <div className="bg-slate-50 rounded-3xl p-8">

              <div className="grid lg:grid-cols-4 gap-6 mb-8">

                <MetricCard
                  title="Executive Priority"
                  value={decision.executivePriority}
                  subtitle="Current Priority"
                  accent="text-orange-600"
                />

                <MetricCard
                  title="Urgency"
                  value={decision.urgency}
                  subtitle="Executive Decision"
                  accent="text-red-600"
                />

                <MetricCard
                  title="Readiness"
                  value={`${readiness}%`}
                  subtitle="Assessment"
                />

                <MetricCard
                  title="Velocity"
                  value={kpis.velocity}
                  subtitle="Programme Delivery"
                  accent="text-indigo-600"
                />

              </div>

              <h3 className="text-2xl font-bold">

                {decision.currentDecision}

              </h3>

              <p className="text-slate-700 leading-8 mt-5">

                {decision.reasoning}

              </p>

              <div className="mt-8 bg-white rounded-2xl border p-6">

                <h4 className="font-bold">

                  Recommended Executive Action

                </h4>

                <p className="mt-3 text-slate-700">

                  {decision.nextDecision}

                </p>

              </div>

            </div>

          </section>
                    {/* =======================================================
              TRANSFORMATION PERFORMANCE
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-8">
              Transformation Performance
            </h2>

            <div className="grid lg:grid-cols-3 gap-6">

              <MetricCard
                title="Transformation Maturity"
                value={kpis.maturity}
                subtitle="Current Capability"
                accent="text-indigo-600"
              />

              <MetricCard
                title="Automation Coverage"
                value={`${kpis.automationCoverage}%`}
                subtitle="Enterprise Coverage"
                accent="text-blue-600"
              />

              <MetricCard
                title="Productivity Index"
                value={`${kpis.productivityIndex}%`}
                subtitle="Operational Efficiency"
                accent="text-green-600"
              />

              <MetricCard
                title="ROI Forecast"
                value={kpis.roiForecast}
                subtitle="Projected Return"
                accent="text-emerald-600"
              />

              <MetricCard
                title="Annual Savings"
                value={kpis.annualSavings}
                subtitle="Estimated Savings"
                accent="text-green-700"
              />

              <MetricCard
                title="Risk Trend"
                value={kpis.riskTrend}
                subtitle={executivePulse.risk}
                accent="text-orange-600"
              />

            </div>

          </section>

          {/* =======================================================
              EXECUTIVE FORECAST
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-8">
              Executive Forecast
            </h2>

            <div className="grid lg:grid-cols-4 gap-6">

              <MetricCard
                title="Success Probability"
                value={`${forecast.successProbability}%`}
                subtitle="Delivery Confidence"
                accent="text-green-600"
              />

              <MetricCard
                title="Forecast Trend"
                value={forecast.trend}
                subtitle="Programme Direction"
                accent="text-blue-600"
              />

              <MetricCard
                title="Estimated Completion"
                value={forecast.estimatedCompletion}
                subtitle="Projected Delivery"
                accent="text-purple-600"
              />

              <MetricCard
                title="Executive Outlook"
                value={forecast.outlook}
                subtitle="Overall Position"
                accent="text-indigo-600"
              />

            </div>

          </section>

          {/* =======================================================
              EXECUTIVE INTELLIGENCE
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-8">
              Executive Intelligence
            </h2>

            <div className="bg-slate-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Executive Summary
              </h3>

              <p className="text-slate-700 leading-8 mt-5">
                {insights.executiveSummary}
              </p>

            </div>

          </section>

          {/* =======================================================
              OPPORTUNITIES
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Executive Opportunities
            </h2>

            <div className="bg-green-50 rounded-3xl p-8">

              <ul className="space-y-4">

                {insights.opportunities.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="text-slate-700"
                    >
                      • {item}
                    </li>

                  )
                )}

              </ul>

            </div>

          </section>

          {/* =======================================================
              EXECUTIVE RISKS
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Executive Risks
            </h2>

            <div className="bg-red-50 rounded-3xl p-8">

              <ul className="space-y-4">

                {insights.risks.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="text-slate-700"
                    >
                      • {item}
                    </li>

                  )
                )}

              </ul>

            </div>

          </section>

          {/* =======================================================
              QUICK WINS
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Executive Quick Wins
            </h2>

            <div className="bg-blue-50 rounded-3xl p-8">

              <ul className="space-y-4">

                {insights.quickWins.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="text-slate-700"
                    >
                      • {item}
                    </li>

                  )
                )}

              </ul>

            </div>

          </section>
                    {/* =======================================================
              EXECUTIVE NOTES
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Executive Notes
            </h2>

            <div className="bg-white border rounded-3xl p-8">

              <p className="text-slate-700 leading-8 whitespace-pre-wrap">

                {notes || "No executive notes available."}

              </p>

            </div>

          </section>

          {/* =======================================================
              PRIORITY FOCUS AREAS
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Priority Focus Areas
            </h2>

            <div className="flex flex-wrap gap-3">

              {assessmentData.priorities?.map(
                (priority, index) => (

                  <span
                    key={index}
                    className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium"
                  >

                    {priority}

                  </span>

                )
              )}

            </div>

          </section>

          {/* =======================================================
              RECOMMENDED SOLUTION
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Recommended Solution
            </h2>

            <div className="bg-slate-50 rounded-3xl p-8 border">

              <p className="text-xl font-semibold">

                {assessmentData.solution}

              </p>

            </div>

          </section>

          {/* =======================================================
              STRATEGIC RECOMMENDATIONS
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Strategic Recommendations
            </h2>

            <div className="space-y-4">

              {assessmentData.recommendations?.map(
                (recommendation, index) => (

                  <div
                    key={index}
                    className="border-l-4 border-yellow-500 pl-5 py-2"
                  >

                    {recommendation}

                  </div>

                )
              )}

            </div>

          </section>

          {/* =======================================================
              TRANSFORMATION OUTLOOK
          ======================================================= */}

          <section className="mb-12">

            <h2 className="text-3xl font-bold mb-6">
              Transformation Outlook
            </h2>

            <div className="bg-slate-50 rounded-3xl p-8">

              <p className="text-slate-700 leading-8">

                {assessmentData.executiveNarrative}

              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <MetricCard
                  title="Improvement"
                  value={`${improvement > 0 ? "+" : ""}${improvement}%`}
                  subtitle="Assessment History"
                  accent={
                    improvement >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                />

                <MetricCard
                  title="Confidence"
                  value={executivePulse.confidence}
                  subtitle="Executive Pulse™"
                  accent="text-blue-600"
                />

                <MetricCard
                  title="Business Risk"
                  value={executivePulse.risk}
                  subtitle="Current Position"
                  accent={
                    executivePulse.risk === "Low"
                      ? "text-green-600"
                      : executivePulse.risk === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                />

              </div>

            </div>

          </section>

          {/* =======================================================
              FOOTER
          ======================================================= */}

          <footer className="border-t pt-10 mt-14">

            <div className="grid md:grid-cols-2 gap-8">

              <div>

                <p className="text-sm text-slate-500">
                  Prepared By
                </p>

                <p className="font-semibold mt-2">
                  LemonLogic Executive Intelligence Platform
                </p>

                <p className="text-slate-500 mt-2">
                  Enterprise Transformation Intelligence
                </p>

              </div>

              <div className="text-left md:text-right">

                <p className="text-sm text-slate-500">
                  Generated
                </p>

                <p className="font-semibold mt-2">
                  {new Date().toLocaleString()}
                </p>

                <p className="text-slate-500 mt-2">
                  Executive Confidential
                </p>

              </div>

            </div>

          </footer>

        </div>

      </div>

    </div>

  );

}
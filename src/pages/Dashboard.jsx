import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useExecutiveData from "../hooks/useExecutiveData";
import ExecutiveScorecard from "../components/dashboard/ExecutiveScorecard";
import ExecutiveDecisionCard from "../components/dashboard/ExecutiveDecisionCard";
import ExecutiveActionPlan from "../components/dashboard/ExecutiveActionPlan";
import TransformationAnalytics from "../components/dashboard/TransformationAnalytics";
import TransformationTrendChart from "../components/dashboard/TransformationTrendChart";
import ExecutiveBenchmarking from "../components/dashboard/ExecutiveBenchmarking";
import BenchmarkLadder from "../components/dashboard/BenchmarkLadder";
import ExecutiveIntelligenceCenter from "../components/dashboard/ExecutiveIntelligenceCenter";
import AssessmentHistory from "../components/dashboard/AssessmentHistory";
import MetricCard from "../components/dashboard/MetricCard";
import ExecutivePulseCard from "../components/dashboard/ExecutivePulseCard";

export default function Dashboard() {
  const { assessment, executivePulse } = useExecutiveData();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }
  const assessmentData = assessment;

  return (
    <>
            {/* Header */}
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            LemonLogic Executive Intelligence Platform
          </h1>
          <p className="text-slate-600 mt-2">Executive Dashboard</p>
        </div>

        <div className="flex items-center gap-3">
          {user && (
            <span className="hidden sm:inline text-sm text-slate-600">
              {user.firstName} {user.lastName}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Inserted Component */}
      <ExecutivePulseCard />

      {/* Executive Scorecard */}
      <ExecutiveScorecard />

      {/* Executive Decision Engine */}
      <ExecutiveDecisionCard assessmentData={assessmentData} />

      {/* Performance Intelligence */}
      <TransformationAnalytics />
      <TransformationTrendChart />
      <ExecutiveBenchmarking />
      <BenchmarkLadder />

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Executive Pulse™"
          value={`${executivePulse.pulse}%`}
          subtitle={executivePulse.momentum}
        />

        <MetricCard
          title="Maturity Level"
          value={assessmentData?.level ?? "N/A"}
          subtitle="Current business stage"
        />

        <MetricCard
          title="Automation Opportunity"
          value={`${assessmentData?.readinessPercentage ?? 0}%`}
          subtitle="Estimated opportunity"
        />

        <MetricCard
          title="Business Risk"
          value={executivePulse.risk}
          subtitle={`Confidence: ${executivePulse.confidence}`}
        />
      </div>

      {/* Executive Intelligence */}
      <ExecutiveIntelligenceCenter />

      {/* Executive Summary */}
      <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm text-slate-500 mb-2">Maturity Level</p>
            <p className="text-xl font-semibold text-yellow-600">
              {assessmentData?.level || "Not Available"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500 mb-2">Recommended Solution</p>
            <p className="text-xl font-semibold">
              {assessmentData?.solution || "Not Available"}
            </p>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed">
          {assessmentData?.executiveNarrative ||
            "Complete an assessment to generate an executive summary."}
        </p>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-6">Strategic Recommendations</h2>
        <ul className="space-y-3 text-slate-700">
          {assessmentData?.recommendations?.map((recommendation, index) => (
            <li key={index}>• {recommendation}</li>
          ))}
        </ul>
      </div>

      {/* Priority Focus Areas */}
      <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-6">Priority Focus Areas</h2>
        <div className="flex flex-wrap gap-3">
          {assessmentData?.priorities?.map((priority, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {priority}
            </span>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-6">90-Day Transformation Roadmap</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Month 1</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Assess current workflows</li>
              <li>• Identify bottlenecks</li>
              <li>• Define KPI targets</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Month 2</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Deploy automation initiatives</li>
              <li>• Improve reporting systems</li>
              <li>• Introduce dashboards</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Month 3</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Monitor KPI performance</li>
              <li>• Optimize processes</li>
              <li>• Measure business impact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Assessment History */}
      <AssessmentHistory />
    </>
  );
}
import useExecutiveData from "../../hooks/useExecutiveData";
import { generateExecutiveCopilot } from "../../services/executiveCopilotEngine";
import ExecutiveAccordion from "./ExecutiveAccordion";
function Section({ title, children }) {
  return (
    <section className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="px-6 py-5 border-b bg-gradient-to-r from-slate-50 to-white">
        <h2 className="text-lg font-bold text-slate-900">
          {title}
        </h2>
      </div>

      <div className="p-6">
        {children}
      </div>
    </section>
  );
}

function MetricCard({
  title,
  value,
  colour = "text-slate-900",
}) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">

      <p className="text-xs uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className={`text-3xl font-bold mt-3 ${colour}`}>
        {value}
      </p>

    </div>
  );
}

export default function ExecutiveIntelligenceCenter() {

  const { executiveProgramme } =
    useExecutiveData();

  if (!executiveProgramme) return null;

  const copilot =
    generateExecutiveCopilot(
      executiveProgramme
    );

  if (!copilot) return null;

  const {
    executivePulse,
    recommendation,
    phase,
  } = executiveProgramme;

  const {
    executiveRecommendation,
    strategicWatchlist,
    aiInsights,
    nextExecutiveDecisions,
  } = copilot;
const hour = new Date().getHours();

const greeting =
  hour < 12
    ? "Good Morning"
    : hour < 17
    ? "Good Afternoon"
    : hour < 22
    ? "Good Evening"
    : "Working Late?";
  return (

<div className="grid gap-8">

      {/* ==========================================
          Executive Copilot
      =========================================== */}

      <ExecutiveAccordion title="🧠 Executive Copilot™">

        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 text-white">

          <p className="uppercase tracking-[0.3em] text-xs text-slate-400">

            Daily Executive Brief

          </p>

          <h3 className="text-3xl font-bold mt-4">
  {greeting}, Executive
</h3>

          <p className="leading-8 mt-5 text-slate-300">

            Executive Pulse is currently

            <span className="font-bold text-cyan-400">

              {" "}
              {executivePulse?.pulse ?? 0}%

            </span>

            {" "}with transformation currently in the

            <span className="font-bold text-yellow-400">

              {" "}
              {phase}

            </span>

            {" "}phase.

            Overall programme momentum remains

            <span className="font-bold text-green-400">

              {" "}
              {executivePulse?.momentum}

            </span>

            {" "}while business risk is assessed as

            <span className="font-bold text-orange-400">

              {" "}
              {executivePulse?.risk}

            </span>

            .

          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">

          <MetricCard
            title="Executive Pulse"
            value={`${executivePulse?.pulse ?? 0}%`}
            colour="text-cyan-600"
          />

          <MetricCard
            title="Executive Health"
            value={`${executivePulse?.health ?? 0}%`}
            colour="text-green-600"
          />

          <MetricCard
            title="Expected ROI"
            value={
              recommendation?.roi ??
              "185%"
            }
            colour="text-emerald-600"
          />

          <MetricCard
            title="Timeline"
            value={
              recommendation?.timeline ??
              "60 Days"
            }
            colour="text-blue-600"
          />

        </div>

      </ExecutiveAccordion>

      {/* ==========================================
          Executive Recommendation
      =========================================== */}

      <ExecutiveAccordion title="🎯 Executive Recommendation">

        <div className="rounded-3xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-6">

          <p className="uppercase tracking-[0.3em] text-xs text-yellow-700">

            AI Recommendation

          </p>

          <p className="mt-5 leading-8 text-slate-700 text-lg">

            {executiveRecommendation}

          </p>

        </div>

      </ExecutiveAccordion>
            {/* ==========================================
          Executive Alerts
      =========================================== */}

      <ExecutiveAccordion title="🚨 Executive Alerts">

        <div className="space-y-4">

          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">

            <p className="font-semibold text-red-700">
              Programme Risk
            </p>

            <p className="mt-2 text-slate-700">
              Current programme risk is
              <span className="font-semibold">
                {" "}{executivePulse?.risk}
              </span>.
            </p>

          </div>

          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

            <p className="font-semibold text-yellow-700">
              Executive Attention
            </p>

            <p className="mt-2 text-slate-700">
              Continue monitoring strategic
              milestones and executive approvals.
            </p>

          </div>

       </div>

<div className="mt-8">
  <div className="mt-8">

  <h3 className="font-bold text-lg mb-5">
    Strategic Watchlist
  </h3>

  <div className="space-y-3">

    {strategicWatchlist.map((item, index) => (

      <div
        key={index}
        className="flex gap-3 items-start rounded-xl bg-slate-50 border border-slate-200 p-4"
      >

        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">
          !
        </div>

        <p className="text-slate-700">
          {item}
        </p>

      </div>

    ))}

  </div>

</div>
</div>

</ExecutiveAccordion>

      {/* ==========================================
          Strategic Watchlist
      =========================================== */}

      

      {/* ==========================================
          AI Insights
      =========================================== */}

      <ExecutiveAccordion title="📊 AI Insights">

        <div className="space-y-4">

          {aiInsights.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 p-5"
            >

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center font-bold text-cyan-700">

                  AI

                </div>

                <p className="leading-7 text-slate-700">

                  {item}

                </p>

              </div>

            </div>

          ))}

        </div>

      </ExecutiveAccordion>

      {/* ==========================================
          Transformation Forecast
      =========================================== */}

      
            {/* ==========================================
          Board Readiness
      =========================================== */}

      <ExecutiveAccordion title="🏛 Board Readiness">

        <div className="space-y-5">

          <div className="rounded-2xl bg-green-50 border border-green-200 p-5">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-slate-500">
                  Board Status
                </p>

                <h3 className="text-2xl font-bold text-green-700 mt-2">
                  Ready
                </h3>

              </div>

              <div className="text-5xl">
                ✅
              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <MetricCard
              title="Confidence"
              value={`${recommendation?.confidence ?? 94}%`}
              colour="text-blue-600"
            />

            <MetricCard
              title="Risk"
              value={executivePulse?.risk}
              colour={
                executivePulse?.risk === "Low"
                  ? "text-green-600"
                  : executivePulse?.risk === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
              }
            />

          </div>

        </div>

      </ExecutiveAccordion>

      {/* ==========================================
          Executive Opportunities
      =========================================== */}

      <ExecutiveAccordion title="💡 Executive Opportunities">

        <div className="space-y-4">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

            <h4 className="font-semibold text-emerald-700">
              Highest Impact Opportunity
            </h4>

            <p className="mt-3 text-slate-700 leading-7">
              Continue investing in automation initiatives and executive
              reporting. These areas are projected to deliver the highest
              transformation value over the next programme phase.
            </p>

          </div>

        </div>

      </ExecutiveAccordion>

      {/* ==========================================
          Next Executive Decisions
      =========================================== */}

      <ExecutiveAccordion title="🎯 Next Executive Decisions">

        <div className="space-y-4">

          {nextExecutiveDecisions.map((decision, index) => (

            <div
              key={index}
              className="flex items-center gap-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 hover:shadow-md transition-all"
            >

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                {index + 1}

              </div>

              <div>

                <h4 className="font-semibold text-slate-900">

                  {decision}

                </h4>

                <p className="text-sm text-slate-500 mt-1">

                  Recommended by Executive Copilot™

                </p>

              </div>

            </div>

          ))}

        </div>

      </ExecutiveAccordion>

    </div>

  );

}
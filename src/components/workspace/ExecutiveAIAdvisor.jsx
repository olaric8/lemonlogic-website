import useExecutiveData from "../../hooks/useExecutiveData";
import { generateExecutiveCopilot } from "../../services/executiveCopilotEngine";

function MetricCard({
  title,
  value,
  colour = "text-slate-900",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">

      <p className="text-xs uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <h3 className={`text-3xl font-bold mt-3 ${colour}`}>
        {value}
      </h3>

    </div>
  );
}

export default function ExecutiveAIAdvisor() {

  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const copilot =
    generateExecutiveCopilot(executiveProgramme);

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

  return (

    <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      {/* =======================================================
          Header
      ======================================================== */}

      <div className="px-8 py-7 bg-gradient-to-r from-cyan-50 via-white to-blue-50 border-b">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-slate-500">

              AI Executive Advisor

            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-3">

              Executive Copilot™

            </h2>

            <p className="text-slate-500 mt-2">

              Executive intelligence generated from your transformation programme.

            </p>

          </div>

          <div className="bg-blue-100 text-blue-700 rounded-full px-5 py-2 font-semibold">

            Confidence {recommendation?.confidence ?? "94"}%

          </div>

        </div>

      </div>

      {/* =======================================================
          Executive Brief
      ======================================================== */}

      <div className="p-8">

        <h3 className="text-xl font-bold text-slate-900">

          Executive Brief

        </h3>

        <p className="mt-5 leading-8 text-slate-700">

          Executive Pulse is currently

          <span className="font-semibold text-cyan-600">

            {" "}
            {executivePulse?.pulse ?? 0}%

          </span>

          {" "}with the organisation operating in the

          <span className="font-semibold">

            {" "}
            {phase}

          </span>

          {" "}phase.

          Executive momentum remains

          <span className="font-semibold text-green-600">

            {" "}
            {executivePulse?.momentum}

          </span>

          {" "}while overall programme risk is

          <span className="font-semibold text-orange-600">

            {" "}
            {executivePulse?.risk}.

          </span>

        </p>

      </div>

      {/* =======================================================
          Executive Metrics
      ======================================================== */}

      <div className="grid md:grid-cols-3 gap-6 px-8">

        <MetricCard
          title="Business Impact"
          value={
            recommendation?.businessImpact ??
            "High"
          }
        />

        <MetricCard
          title="Expected ROI"
          value={
            recommendation?.roi ??
            "185%"
          }
          colour="text-green-600"
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

      {/* =======================================================
          Executive Recommendation
      ======================================================== */}

      <div className="p-8">

        <div className="rounded-3xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-6">

          <p className="uppercase tracking-[0.35em] text-xs text-yellow-700">

            Executive Recommendation

          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">

            {executiveRecommendation}

          </p>

        </div>

      </div>
            {/* =======================================================
          Strategic Watchlist
      ======================================================== */}

      <div className="px-8 pb-2">

        <h3 className="text-xl font-bold text-slate-900">
          Strategic Watchlist
        </h3>

        <p className="text-slate-500 mt-2">
          Key items requiring executive visibility.
        </p>

        <div className="space-y-4 mt-6">

          {strategicWatchlist.length > 0 ? (

            strategicWatchlist.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4"
              >

                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold flex-shrink-0">
                  !
                </div>

                <p className="text-slate-700 leading-7">
                  {item}
                </p>

              </div>

            ))

          ) : (

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-green-700">
              No strategic risks currently require executive attention.
            </div>

          )}

        </div>

      </div>

      {/* =======================================================
          AI Insights
      ======================================================== */}

      <div className="p-8">

        <h3 className="text-xl font-bold text-slate-900">
          AI Insights
        </h3>

        <p className="text-slate-500 mt-2">
          Executive intelligence generated from programme data.
        </p>

        <div className="grid gap-4 mt-6">

          {aiInsights.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 p-5"
            >

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold flex-shrink-0">
                  AI
                </div>

                <p className="text-slate-700 leading-7">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =======================================================
          Next Executive Decisions
      ======================================================== */}

      <div className="px-8 pb-8">

        <h3 className="text-xl font-bold text-slate-900">
          Next Executive Decisions
        </h3>

        <p className="text-slate-500 mt-2">
          Recommended executive actions.
        </p>

        <div className="space-y-4 mt-6">

          {nextExecutiveDecisions.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 hover:shadow-md transition"
            >

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>

              <div className="flex-1">

                <p className="font-semibold text-slate-900">
                  {item}
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Executive decision recommended by the LEIP Executive Copilot.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}
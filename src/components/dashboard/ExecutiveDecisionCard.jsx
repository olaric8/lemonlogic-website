import { useNavigate } from "react-router-dom";
import { generateExecutiveDecision } from "../../services/executiveDecisionEngine";

export default function ExecutiveDecisionCard({
  assessmentData,
}) {
  const navigate = useNavigate();

  const decision = generateExecutiveDecision(
    assessmentData
  );

  const priorityColor =
    decision.priority === "Critical"
      ? "bg-red-600"
      : decision.priority === "High"
      ? "bg-orange-500"
      : "bg-green-600";

  return (
    <div className="bg-slate-900 rounded-3xl shadow-2xl text-white p-8 mb-10">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Executive Command Center
          </h2>

          <p className="text-slate-400 mt-2">
            AI-powered executive decision support
          </p>

        </div>

        <span
          className={`${priorityColor} px-5 py-2 rounded-full font-bold`}
        >
          {decision.priority}
        </span>

      </div>

      {/* Main Content */}

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left */}

        <div>

          <h3 className="text-yellow-400 text-xl font-semibold mb-3">
            Recommended Programme
          </h3>

          <p className="text-2xl font-bold leading-relaxed">
            {decision.programme}
          </p>

          <div className="mt-8">

            <h3 className="text-yellow-400 font-semibold mb-2">
              Executive First Action
            </h3>

            <p className="text-slate-300">
              {decision.firstAction}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          <Metric
            title="Business Impact"
            value={decision.businessImpact}
          />

          <Metric
            title="Estimated ROI"
            value={decision.roi}
          />

          <Metric
            title="Timeline"
            value={decision.timeline}
          />

          <Metric
            title="Confidence"
            value={decision.confidence}
          />

          <Metric
            title="Implementation"
            value={decision.complexity}
          />

          <Metric
            title="Business Risk"
            value={decision.risk}
          />

        </div>

      </div>

      {/* Actions */}

      <div className="mt-10 flex gap-4 flex-wrap">

        <button
          onClick={() => navigate("/workspace")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-xl transition"
        >
          Generate Action Plan
        </button>

        <button
          className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-xl transition"
        >
          View Executive Report
        </button>

      </div>

    </div>
  );
}

function Metric({
  title,
  value,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <p className="text-xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}
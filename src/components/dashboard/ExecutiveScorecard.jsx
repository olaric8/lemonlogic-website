import { useMemo } from "react";
import { Link } from "react-router-dom";
export default function ExecutiveScorecard() {

  const assessmentData = useMemo(() => {
    const saved =
      localStorage.getItem("leipResults");

    return saved
      ? JSON.parse(saved)
      : null;
  }, []);

  const history = useMemo(() => {
    return (
      JSON.parse(
        localStorage.getItem(
          "leipAssessmentHistory"
        )
      ) || []
    );
  }, []);

  const latest =
    history[history.length - 1];

  const first =
    history[0];

  const improvement =
    history.length > 1
      ? latest.readinessPercentage -
        first.readinessPercentage
      : 0;

  const riskLevel =
    assessmentData?.readinessPercentage >= 70
      ? "Low"
      : assessmentData?.readinessPercentage >= 40
      ? "Medium"
      : "High";

  const nextAction =
    assessmentData?.priorities?.[0] ||
    "Continue transformation initiatives";

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg mb-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-3xl font-bold">
            Executive Scorecard
          </h2>

          <p className="text-slate-300 mt-2">
            Boardroom Briefing
          </p>
        </div>

        <div className="flex gap-3">
          <Link
  to="/advisor"
  className="
    bg-yellow-500
    hover:bg-yellow-600
    text-white
    px-6
    py-3
    rounded-xl
    font-semibold
    transition
  "
>
  Open AI Advisor
</Link>
          <Link
            to="/board-report"
            className="
              bg-yellow-500
              hover:bg-yellow-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Open Board Report
          </Link>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <p className="text-slate-400 text-sm">
            Readiness Score
          </p>

          <p className="text-4xl font-bold">
            {assessmentData?.readinessPercentage ?? 0}%
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Maturity Level
          </p>

          <p className="text-2xl font-semibold">
            {assessmentData?.level || "N/A"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Improvement Trend
          </p>

          <p className="text-2xl font-semibold">
            +{improvement}%
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Risk Level
          </p>

          <p className="text-2xl font-semibold">
            {riskLevel}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Recommended Solution
          </p>

          <p className="text-lg font-semibold">
            {assessmentData?.solution}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Next Strategic Action
          </p>

          <p className="text-lg font-semibold">
            {nextAction}
          </p>
        </div>

      </div>

    </div>
  );
}
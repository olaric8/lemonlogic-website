import { useMemo } from "react";

export default function TransformationAnalytics() {

  const history = useMemo(() => {
    return (
      JSON.parse(
        localStorage.getItem(
          "leipAssessmentHistory"
        )
      ) || []
    );
  }, []);

  const current =
    history[history.length - 1];

  const previous =
    history.length > 1
      ? history[history.length - 2]
      : null;

  const currentScore =
    current?.readinessPercentage || 0;

  const previousScore =
    previous?.readinessPercentage || 0;

  const improvement =
    currentScore - previousScore;

  const projectedNextScore =
    currentScore + improvement;

  const trajectory =
    improvement > 0
      ? "Positive ↗"
      : improvement < 0
      ? "Declining ↘"
      : "Stable →";

  return (
    <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Transformation Analytics
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        <div>
          <p className="text-sm text-slate-500">
            Current Score
          </p>

          <p className="text-2xl font-bold">
            {currentScore}%
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Previous Score
          </p>

          <p className="text-2xl font-bold">
            {previousScore}%
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Improvement
          </p>

          <p className="text-2xl font-bold text-green-600">
            {improvement > 0 ? "+" : ""}
            {improvement}%
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Trajectory
          </p>

          <p className="text-xl font-semibold">
            {trajectory}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Projected Next Score
          </p>

          <p className="text-2xl font-bold">
            {projectedNextScore}%
          </p>
        </div>

      </div>

    </div>
  );
}
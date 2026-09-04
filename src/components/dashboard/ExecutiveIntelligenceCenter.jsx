import { useMemo } from "react";

export default function ExecutiveIntelligenceCenter() {

  const assessmentData = useMemo(() => {
    const saved = localStorage.getItem("leipResults");

    if (!saved) {
      return null;
    }

    return JSON.parse(saved);
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

  const transformationStatus =
    assessmentData?.readinessPercentage >= 70
      ? "Optimized"
      : assessmentData?.readinessPercentage >= 40
      ? "Growing"
      : "Emerging";

  return (
    <div className="bg-white rounded-2xl border p-8 shadow-sm">

      <h2 className="text-2xl font-bold mb-8">
        Executive Intelligence Center
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h3 className="font-semibold mb-3">
            Transformation Status
          </h3>

          <p className="text-yellow-600 font-bold">
            {transformationStatus}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Improvement Trend
          </h3>

          <p className="text-green-600 font-bold">
            +{improvement}%
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Business Strengths
          </h3>

          <ul className="space-y-2 text-slate-700">
            <li>• Executive awareness</li>
            <li>• Transformation readiness</li>
            <li>• Growth potential</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Business Risks
          </h3>

          <ul className="space-y-2 text-slate-700">
            {assessmentData?.priorities?.map(
              (risk, index) => (
                <li key={index}>
                  • {risk}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Priority Focus Areas
          </h3>

          <div className="flex flex-wrap gap-2">
            {assessmentData?.priorities?.map(
              (priority, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                >
                  {priority}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Recommended Solution
          </h3>

          <p className="text-slate-700">
            {assessmentData?.solution}
          </p>
        </div>

      </div>

    </div>
  );
}
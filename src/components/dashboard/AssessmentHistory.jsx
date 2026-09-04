import { useMemo } from "react";

export default function AssessmentHistory() {

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

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Assessment History
        </h2>

        <div className="text-sm text-slate-500">
          {history.length} Assessment(s)
        </div>
      </div>

      {history.length === 0 ? (
        <p className="text-slate-500">
          No assessment history available.
        </p>
      ) : (
        <>
          <div className="space-y-4 mb-6">

            {history.map(
              (assessment, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b pb-3"
                >
                  <span>
                    Assessment #{index + 1}
                  </span>

                  <span className="font-semibold">
                    {assessment.readinessPercentage}%
                  </span>
                </div>
              )
            )}

          </div>

          {history.length > 1 && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-semibold text-green-700">
                Improvement: +{improvement}%
              </p>
            </div>
          )}
        </>
      )}

    </div>
  );
}
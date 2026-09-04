import { useMemo } from "react";

export default function ExecutiveBenchmarking() {

  const assessmentData = useMemo(() => {
    const saved =
      localStorage.getItem("leipResults");

    return saved
      ? JSON.parse(saved)
      : null;
  }, []);

  const score =
    assessmentData?.readinessPercentage || 0;

  let benchmark = "";
  let nextTarget = "";
  let gap = 0;

  if (score < 40) {
    benchmark =
      "Emerging Organization";

    nextTarget =
      "Growing Organization";

    gap = 40 - score;

  } else if (score < 70) {

    benchmark =
      "Growing Organization";

    nextTarget =
      "Optimized Organization";

    gap = 70 - score;

  } else {

    benchmark =
      "Optimized Organization";

    nextTarget =
      "Industry Leadership";

    gap = 0;
  }

  return (
    <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Executive Benchmarking
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div>
          <p className="text-sm text-slate-500">
            Your Score
          </p>

          <p className="text-3xl font-bold">
            {score}%
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Benchmark Category
          </p>

          <p className="font-semibold">
            {benchmark}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Next Benchmark
          </p>

          <p className="font-semibold">
            {nextTarget}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Gap To Target
          </p>

          <p className="text-3xl font-bold">
            {gap}%
          </p>
        </div>

      </div>

    </div>
  );
}
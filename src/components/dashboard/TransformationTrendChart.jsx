import { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TransformationTrendChart() {
  const history = useMemo(() => {
    return (
      JSON.parse(
        localStorage.getItem(
          "leipAssessmentHistory"
        )
      ) || []
    );
  }, []);

  if (history.length < 2) {
    return (
      <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Transformation Trend
        </h2>

        <p className="text-slate-500">
          Complete at least two assessments to view trend analysis.
        </p>
      </div>
    );
  }

  const chartData = history.map(
    (item, index) => ({
      assessment: `A${index + 1}`,
      score: item.readinessPercentage,
    })
  );

  const current =
    history[history.length - 1];

  const previous =
    history.length > 1
      ? history[history.length - 2]
      : null;

  const improvement =
    current.readinessPercentage -
    (previous?.readinessPercentage || 0);

  const projectedNextScore =
    current.readinessPercentage +
    improvement;

  const trajectory =
    improvement > 0
      ? "Positive ↗"
      : improvement < 0
      ? "Declining ↘"
      : "Stable →";

  return (
    <div className="bg-white rounded-2xl border p-8 shadow-sm mb-8">
      <h2 className="text-2xl font-bold mb-2">
        Transformation Trend
      </h2>

      <p className="text-slate-500 mb-6">
        Readiness score progression across completed assessments
      </p>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="assessment"
            />

            <YAxis
  domain={[
    "dataMin - 10",
    "dataMax + 10"
  ]}
/>

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#f59e0b"
strokeWidth={5}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-slate-50 rounded-xl p-4 border">
          <p className="text-sm text-slate-500">
            Current Trend
          </p>

          <p className="text-xl font-bold">
            {trajectory}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border">
          <p className="text-sm text-slate-500">
            Transformation Velocity
          </p>

          <p className="text-xl font-bold">
            {improvement > 0 ? "+" : ""}
            {improvement}%
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border">
          <p className="text-sm text-slate-500">
            Projected Next Score
          </p>

          <p className="text-xl font-bold">
            {projectedNextScore}%
          </p>
        </div>
      </div>
    </div>
  );
}
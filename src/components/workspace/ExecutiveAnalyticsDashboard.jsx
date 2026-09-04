import useExecutiveData from "../../hooks/useExecutiveData";

function ProgressBar({ title, value, colour }) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <span className="font-medium text-slate-700">
          {title}
        </span>

        <span className="font-semibold">
          {value}%
        </span>

      </div>

      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className={`h-full ${colour} rounded-full transition-all duration-700`}
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}

export default function ExecutiveAnalyticsDashboard() {

  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const {
    executivePulse,
    readinessPercentage,
    completion,
    recommendation,
  } = executiveProgramme;

  return (

    <section className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <div className="px-8 py-6 border-b">

        <h2 className="text-3xl font-bold">
          Executive Analytics
        </h2>

        <p className="text-slate-500 mt-2">
          Enterprise transformation performance at a glance.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10 p-8">

        <div className="space-y-8">

          <ProgressBar
            title="Executive Pulse"
            value={executivePulse?.pulse ?? 0}
            colour="bg-cyan-500"
          />

          <ProgressBar
            title="Readiness Score"
            value={readinessPercentage ?? 0}
            colour="bg-green-500"
          />

          <ProgressBar
            title="Programme Completion"
            value={completion ?? 0}
            colour="bg-yellow-500"
          />

          <ProgressBar
            title="Confidence"
            value={recommendation?.confidence ?? 0}
            colour="bg-purple-500"
          />

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-slate-50 p-6">

            <p className="text-sm text-slate-500">
              Business Impact
            </p>

            <h3 className="text-4xl font-bold mt-4">
              {recommendation?.impact}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-6">

            <p className="text-sm text-slate-500">
              ROI Forecast
            </p>

            <h3 className="text-4xl font-bold text-green-600 mt-4">
              {recommendation?.roi}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-6">

            <p className="text-sm text-slate-500">
              Timeline
            </p>

            <h3 className="text-4xl font-bold text-blue-600 mt-4">
              {recommendation?.timeline}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-6">

            <p className="text-sm text-slate-500">
              Programme Risk
            </p>

            <h3 className="text-4xl font-bold text-orange-500 mt-4">
              {executivePulse?.risk}
            </h3>

          </div>

        </div>

      </div>

    </section>

  );

}
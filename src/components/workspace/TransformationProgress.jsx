import useExecutiveData from "../../hooks/useExecutiveData";

function MetricCard({
  title,
  value,
  subtitle,
  accent = "text-yellow-500",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className={`text-3xl font-bold mt-2 ${accent}`}>
        {value}
      </h3>

      {subtitle && (
        <p className="text-sm text-slate-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function TransformationProgress() {

  const { executiveProgramme } =
    useExecutiveData();

  if (!executiveProgramme)
    return null;

  const {

    completion,

    phase,

    readiness,

    executivePulse,

    statistics,

    kpis,

    forecast,

    decision,

  } = executiveProgramme;

  const pulse =
    executivePulse?.pulse ?? 0;

  const progressColour =
    completion >= 75
      ? "bg-green-500"
      : completion >= 50
      ? "bg-yellow-500"
      : "bg-orange-500";

  return (

    <section className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex justify-between items-start mb-8">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Executive Performance Centre
          </h2>

          <p className="text-slate-500 mt-2">
            Enterprise Intelligence Dashboard
          </p>

        </div>

        <div className="text-right">

          <p className="text-5xl font-bold text-yellow-500">
            {completion}%
          </p>

          <p className="text-sm text-slate-500">
            Programme Completion
          </p>

        </div>

      </div>

      <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden mb-10">

        <div
          className={`${progressColour} h-full transition-all duration-700`}
          style={{
            width: `${completion}%`,
          }}
        />

      </div>

      <div className="grid lg:grid-cols-4 xl:grid-cols-8 gap-5">

        <MetricCard
          title="Phase"
          value={phase}
          subtitle="Current Stage"
          accent="text-slate-900"
        />

        <MetricCard
          title="Readiness"
          value={`${readiness}%`}
          subtitle="Assessment"
        />

        <MetricCard
          title="Pulse"
          value={`${pulse}%`}
          subtitle={executivePulse?.momentum}
        />

        <MetricCard
          title="Execution"
          value={`${statistics.completedTasks}/${statistics.totalTasks}`}
          subtitle="Tasks"
        />

        <MetricCard
          title="Health"
          value={`${kpis.executiveHealth}%`}
          subtitle={kpis.maturity}
          accent="text-green-500"
        />

        <MetricCard
          title="Velocity"
          value={kpis.velocity}
          subtitle="Delivery"
          accent="text-blue-500"
        />

        <MetricCard
          title="Forecast"
          value={`${forecast.successProbability}%`}
          subtitle={forecast.trend}
          accent="text-purple-500"
        />

        <MetricCard
          title="Priority"
          value={decision.executivePriority}
          subtitle={decision.urgency}
          accent="text-orange-500"
        />

      </div>

    </section>

  );
}
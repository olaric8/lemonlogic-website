import useExecutiveData from "../../hooks/useExecutiveData";

function ExecutiveMetric({
  title,
  value,
  subtitle,
  accent = "text-yellow-400",
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 h-full">

      <p className="uppercase tracking-wider text-xs text-slate-400">
        {title}
      </p>

      <h3 className={`text-4xl font-bold mt-3 ${accent}`}>
        {value}
      </h3>

      <p className="text-slate-400 mt-3 text-sm">
        {subtitle}
      </p>

    </div>
  );
}

export default function ExecutiveWorkspaceHeader() {
  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const {
    organisation,
    phase,
    readiness,
    completion,
    executivePulse,
    recommendation,
    forecast,
  } = executiveProgramme;

  const pulse = executivePulse?.pulse ?? 0;
  const momentum = executivePulse?.momentum ?? "Building";

  const health =
    executivePulse?.health ??
    executivePulse?.executiveHealth ??
    68;

  const success =
    executivePulse?.forecast ??
    executivePulse?.success ??
    66;

  const risk =
    executivePulse?.risk ??
    "Medium";

  const priority =
    recommendation?.priority ??
    "Assessment";

  return (
    <section className="bg-slate-900 text-white rounded-3xl shadow-2xl p-10">

      {/* Top Section */}

      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

        <div className="flex-1">

          <p className="uppercase tracking-[0.35em] text-slate-400 text-xs">
            LEIP Executive Intelligence Platform
          </p>

          <h1 className="text-5xl font-extrabold mt-4">
            {organisation}
          </h1>

          <p className="text-slate-400 mt-4 text-xl">
            Enterprise Transformation Programme
          </p>

          {/* Executive Status */}

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="bg-yellow-500 text-slate-900 px-5 py-2 rounded-full font-semibold">
              Phase • {phase}
            </span>

            <span className="bg-green-600 px-5 py-2 rounded-full font-semibold">
              {momentum}
            </span>

            <span className="bg-blue-600 px-5 py-2 rounded-full font-semibold">
              {risk} Risk
            </span>

          </div>

        </div>

      </div>

      {/* Executive KPI Row */}

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-10">

        <ExecutiveMetric
          title="Readiness"
          value={`${readiness}%`}
          subtitle="Assessment"
        />

        <ExecutiveMetric
          title="Completion"
          value={`${completion}%`}
          subtitle="Programme"
        />

        <ExecutiveMetric
  title="Executive Health"
  value={`${health}%`}
  subtitle="Health"
  accent="text-green-400"
/>

        <ExecutiveMetric
          title="Executive Pulse"
          value={`${pulse}%`}
          subtitle="Pulse"
          accent="text-cyan-400"
        />

        <ExecutiveMetric
  title="Forecast"
  value={`${success}%`}
  subtitle="Success"
  accent="text-purple-400"
/>

        <ExecutiveMetric
          title="Decision"
          value={recommendation?.priority ?? "Assessment"}
          subtitle="Priority"
          accent="text-orange-400"
        />

      </div>

    </section>
  );
}
import useExecutiveData from "../../hooks/useExecutiveData";

function InfoCard({
  title,
  value,
  subtitle,
  accent = "text-slate-900",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">

      <p className="text-xs uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <h3 className={`text-3xl font-bold mt-3 ${accent}`}>
        {value}
      </h3>

      <p className="text-sm text-slate-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}

export default function ExecutiveCommandCenter() {

  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const {
    executivePulse,
    recommendation,
    milestones = [],
    tasks = [],
    completion,
  } = executiveProgramme;

  const completedTasks =
    tasks.filter((t) => t.completed).length;

  const pendingTasks =
    tasks.length - completedTasks;

  const nextMilestone =
    milestones.find((m) => !m.completed);

  return (

    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl shadow-2xl p-10">

      <div className="flex flex-col xl:flex-row justify-between gap-8">

        <div className="flex-1">

          <p className="uppercase tracking-[0.35em] text-slate-400 text-xs">
            Executive Command Center
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Today's Executive Brief
          </h2>

          <p className="text-slate-300 mt-6 leading-8 max-w-3xl">

            Executive Pulse remains at{" "}

            <span className="font-bold text-cyan-400">
              {executivePulse?.pulse ?? 0}%
            </span>

            {" "}with programme completion currently at{" "}

            <span className="font-bold text-yellow-400">
              {completion}%
            </span>

            .

            {" "}AI recommends prioritising{" "}

            <span className="font-bold text-white">
              {recommendation?.programme}
            </span>

            {" "}to maximise business impact over the next{" "}

            <span className="font-bold text-green-400">
              {recommendation?.timeline}
            </span>

            .

          </p>

        </div>

        <div className="xl:w-96">

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

            <p className="text-sm uppercase tracking-wide text-slate-300">
              Immediate Executive Action
            </p>

            <p className="text-xl font-semibold mt-5 leading-8">
              {recommendation?.firstAction}
            </p>

          </div>

        </div>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-10">

        <InfoCard
          title="Programme Health"
          value={`${executivePulse?.health ?? 0}%`}
          subtitle="Executive Health"
          accent="text-green-600"
        />

        <InfoCard
          title="Executive Pulse"
          value={`${executivePulse?.pulse ?? 0}%`}
          subtitle={executivePulse?.momentum}
          accent="text-cyan-600"
        />

        <InfoCard
          title="Open Actions"
          value={pendingTasks}
          subtitle={`${completedTasks} Completed`}
          accent="text-yellow-600"
        />

        <InfoCard
          title="Next Milestone"
          value={nextMilestone?.week ?? "--"}
          subtitle={nextMilestone?.title ?? "Complete programme"}
          accent="text-purple-600"
        />

        <InfoCard
          title="Expected ROI"
          value={recommendation?.roi}
          subtitle="Transformation Programme"
          accent="text-emerald-600"
        />

      </div>

      <div className="mt-10">

        <div className="flex justify-between text-sm text-slate-300 mb-3">

          <span>Transformation Momentum</span>

          <span>{completion}%</span>

        </div>

        <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-500 rounded-full transition-all duration-700"
            style={{
              width: `${completion}%`,
            }}
          />

        </div>

      </div>

    </section>

  );
}
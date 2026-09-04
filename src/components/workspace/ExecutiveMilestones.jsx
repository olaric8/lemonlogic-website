import useExecutiveData from "../../hooks/useExecutiveData";

function PhaseBadge({ phase }) {
  const colours = {
    Assessment: "bg-blue-100 text-blue-700",
    Strategy: "bg-purple-100 text-purple-700",
    Implementation: "bg-amber-100 text-amber-700",
    Optimization: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold ${
        colours[phase] ?? "bg-slate-100 text-slate-700"
      }`}
    >
      {phase}
    </span>
  );
}

function StatusIcon({ completed }) {
  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white shadow-md ${
        completed
          ? "bg-green-500"
          : "bg-slate-300 text-slate-600"
      }`}
    >
      {completed ? "✓" : "•"}
    </div>
  );
}

export default function ExecutiveMilestones() {
  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const {
    milestones = [],
    phase: currentPhase,
  } = executiveProgramme;

  const roadmap = [
    {
      phase: "Assessment",
      items: milestones.filter(
        (m) => (m.phase ?? "Assessment") === "Assessment"
      ),
    },
    {
      phase: "Strategy",
      items: milestones.filter(
        (m) => (m.phase ?? "Strategy") === "Strategy"
      ),
    },
    {
      phase: "Implementation",
      items: milestones.filter(
        (m) =>
          (m.phase ?? "Implementation") === "Implementation"
      ),
    },
    {
      phase: "Optimization",
      items: milestones.filter(
        (m) =>
          (m.phase ?? "Optimization") === "Optimization"
      ),
    },
  ];

  return (
    <section className="bg-white rounded-3xl shadow-xl p-10">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">

        <div>

          <h2 className="text-4xl font-bold text-slate-900">
            Executive Delivery Roadmap
          </h2>

          <p className="text-slate-500 mt-3 text-lg">
            Programme milestones organised by transformation phase.
          </p>

        </div>

        <PhaseBadge phase={currentPhase} />

      </div>

      <div className="space-y-14">

        {roadmap.map((group) => {

          const completed =
            group.items.filter((m) => m.completed).length;

          const total = group.items.length;

          const percentage =
            total === 0
              ? 0
              : Math.round((completed / total) * 100);

          return (

            <div key={group.phase}>

              {/* Phase Header */}

              <div className="flex justify-between items-center mb-6">

                <div className="flex items-center gap-4">

                  <div className="w-4 h-4 rounded-full bg-yellow-500" />

                  <h3 className="text-2xl font-bold">
                    {group.phase}
                  </h3>

                </div>

                <div className="flex items-center gap-4">

                  <span className="text-sm text-slate-500 font-medium">
                    {completed} / {total} Completed
                  </span>

                  <div className="w-40 h-3 bg-slate-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-green-500 rounded-full"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                  <span className="font-semibold text-slate-700">
                    {percentage}%
                  </span>

                </div>

              </div>

              {group.items.length === 0 ? (

                <div className="border-2 border-dashed rounded-3xl p-8 text-center text-slate-400">
                  No milestones assigned.
                </div>

              ) : (

                <div className="space-y-6">

                  {group.items.map((milestone, index) => (

                    <div
                      key={milestone.id}
                      className="relative flex gap-6"
                    >

                      {/* Timeline */}

                      <div className="relative flex flex-col items-center">

                        <StatusIcon
                          completed={milestone.completed}
                        />

                        {index !==
                          group.items.length - 1 && (
                          <div className="w-1 flex-1 bg-slate-200 mt-2 rounded-full" />
                        )}

                      </div>

                      {/* Card */}

                      <div className="flex-1 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 hover:shadow-lg transition-all">

                        <div className="flex justify-between items-start gap-6">

                          <div>

                            <h4 className="text-2xl font-semibold text-slate-900">
                              {milestone.title}
                            </h4>

                            <p className="text-slate-600 mt-3 leading-7">
                              {milestone.description}
                            </p>

                          </div>

                          <div className="text-right">

                            <div className="bg-slate-100 rounded-full px-4 py-2 text-sm font-semibold text-slate-700">
                              {milestone.week}
                            </div>

                            <div className="mt-4">

                              {milestone.completed ? (

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                  Completed
                                </span>

                              ) : (

                                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                                  Pending
                                </span>

                              )}

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}
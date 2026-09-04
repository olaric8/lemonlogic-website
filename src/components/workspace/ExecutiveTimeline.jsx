import useExecutiveData from "../../hooks/useExecutiveData";

function StatusDot({ status }) {
  const colours = {
    completed: "bg-green-500",
    active: "bg-yellow-500",
    pending: "bg-slate-300",
  };

  return (
    <div
      className={`w-5 h-5 rounded-full ${
        colours[status] ?? colours.pending
      }`}
    />
  );
}

function StatusBadge({ status }) {
  const styles = {
    completed:
      "bg-green-100 text-green-700",

    active:
      "bg-yellow-100 text-yellow-700",

    pending:
      "bg-slate-100 text-slate-500",
  };

  const labels = {
    completed: "Completed",
    active: "In Progress",
    pending: "Pending",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status]
      }`}
    >
      {labels[status]}
    </span>
  );
}

export default function ExecutiveTimeline() {
  const { executiveProgramme } =
    useExecutiveData();

  if (!executiveProgramme) return null;

  const { phases = [] } =
    executiveProgramme;

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Programme Lifecycle
        </h2>

        <p className="text-slate-500 mt-2">
          Executive transformation journey
        </p>

      </div>

      <div className="relative">

        {phases.map((phase, index) => (

          <div
            key={phase.id}
            className="relative pl-12 pb-10 last:pb-0"
          >

            {index !== phases.length - 1 && (
              <div className="absolute left-[9px] top-5 bottom-0 w-0.5 bg-slate-200" />
            )}

            <div className="absolute left-0 top-0">

              <StatusDot
                status={phase.status}
              />

            </div>

            <div className="flex items-center justify-between">

              <h3 className="text-lg font-bold text-slate-900">
                {phase.name}
              </h3>

              <StatusBadge
                status={phase.status}
              />

            </div>

            <p className="text-slate-500 mt-3 leading-7">

              {phase.status === "completed" &&
                "Transformation phase completed successfully."}

              {phase.status === "active" &&
                "Current executive delivery phase."}

              {phase.status === "pending" &&
                "Awaiting progression."}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
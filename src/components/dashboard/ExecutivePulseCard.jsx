import useExecutiveData from "../../hooks/useExecutiveData";

export default function ExecutivePulseCard() {
  const {
    executivePulse,
    tasks,
  } = useExecutiveData();

  const completed =
    tasks.filter((t) => t.completed).length;

  const total = tasks.length;

  const nextAction =
    completed === total
      ? "Begin optimization and continuous improvement."
      : "Complete remaining executive initiatives.";

  const pulseColor =
    executivePulse.pulse >= 80
      ? "text-green-400"
      : executivePulse.pulse >= 60
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-8 mb-8">

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <p className="uppercase tracking-widest text-slate-400 text-sm">
            Executive Intelligence
          </p>

          <h1 className={`text-6xl font-bold mt-3 ${pulseColor}`}>
            {executivePulse.pulse}%
          </h1>

          <p className="text-xl mt-3">
            Executive Pulse™
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <Metric
            title="Momentum"
            value={executivePulse.momentum}
          />

          <Metric
            title="Business Risk"
            value={executivePulse.risk}
          />

          <Metric
            title="Confidence"
            value={executivePulse.confidence}
          />

          <Metric
            title="Tasks Completed"
            value={`${completed}/${total}`}
          />

        </div>

      </div>

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="text-yellow-400 font-bold text-lg">
          Executive Recommendation
        </h3>

        <p className="text-slate-300 mt-2">
          {nextAction}
        </p>

      </div>

    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}
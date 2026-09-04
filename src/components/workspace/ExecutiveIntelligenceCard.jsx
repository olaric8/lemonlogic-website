import useExecutiveData from "../../hooks/useExecutiveData";

function Metric({ title, value, colour = "text-slate-900" }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4 border">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className={`text-2xl font-bold mt-2 ${colour}`}>
        {value}
      </p>
    </div>
  );
}

export default function ExecutiveIntelligenceCard() {
  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const {
    executivePulse,
    recommendation,
  } = executiveProgramme;

  const riskColour =
    executivePulse?.risk === "Low"
      ? "text-green-600"
      : executivePulse?.risk === "Medium"
      ? "text-yellow-600"
      : "text-red-600";

  return (
  <section className="bg-white rounded-3xl shadow-lg p-8">
    <h2 className="text-2xl font-bold">
      Executive Intelligence
    </h2>
  </section>
);
}
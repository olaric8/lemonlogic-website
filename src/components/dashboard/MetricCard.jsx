export default function MetricCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-slate-500 mb-2">
        {title}
      </p>

      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      {subtitle && (
        <p className="text-sm text-slate-600 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
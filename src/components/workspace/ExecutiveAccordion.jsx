import { useState } from "react";

export default function ExecutiveAccordion({
  title,
  icon,
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-3xl bg-white shadow-xl overflow-hidden border border-slate-200">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-3">

          <span className="text-2xl">
            {icon}
          </span>

          <h3 className="text-2xl font-bold">
            {title}
          </h3>

        </div>

        <span
          className={`text-2xl transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>

      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-[2500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-200">
          {children}
        </div>
      </div>

    </div>
  );
}
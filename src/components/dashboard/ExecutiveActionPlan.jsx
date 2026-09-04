import {
  generateExecutiveDecision,
} from "../../services/executiveDecisionEngine";

import {
  generateExecutiveActionPlan,
} from "../../services/executiveActionPlanEngine";

export default function ExecutiveActionPlan({
  assessmentData,
}) {
  const decision =
    generateExecutiveDecision(
      assessmentData
    );

  const plan =
    generateExecutiveActionPlan(
      decision
    );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Executive Action Plan
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {plan.phases.map((phase) => (
          <div
            key={phase.title}
            className="border rounded-2xl p-6"
          >

            <h3 className="font-bold text-xl">
              {phase.title}
            </h3>

            <p className="text-slate-500 mb-4">
              {phase.weeks}
            </p>

            <ul className="space-y-2">

              {phase.tasks.map((task) => (
                <li key={task}>
                  ✓ {task}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">

        <Info
          title="Duration"
          value={plan.duration}
        />

        <Info
          title="Executive Sponsor"
          value={plan.executiveSponsor}
        />

        <Info
          title="Estimated ROI"
          value={decision.roi}
        />

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}) {
  return (
    <div className="bg-slate-100 rounded-xl p-5">

      <p className="text-slate-500">
        {title}
      </p>

      <p className="font-bold text-xl">
        {value}
      </p>

    </div>
  );
}
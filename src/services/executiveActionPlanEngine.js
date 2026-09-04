export function generateExecutiveActionPlan(
  decision
) {
  return {
    duration: decision.timeline,

    executiveSponsor:
      "Chief Operating Officer",

    phases: [
      {
        title:
          "Phase 1 — Foundation",

        weeks: "Weeks 1–4",

        tasks: [
          "Executive KPI Workshop",
          "Business Process Discovery",
          "Current State Assessment",
          "Executive Dashboard Design",
        ],
      },

      {
        title:
          "Phase 2 — Deployment",

        weeks: "Weeks 5–8",

        tasks: [
          "Dashboard Deployment",
          "Reporting Automation",
          "Workflow Automation",
          "Staff Enablement",
        ],
      },

      {
        title:
          "Phase 3 — Optimization",

        weeks: "Weeks 9–12",

        tasks: [
          "Executive Intelligence",
          "AI Advisor",
          "Performance Monitoring",
          "Continuous Improvement",
        ],
      },
    ],
  };
}
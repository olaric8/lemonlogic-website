/**
 * ==========================================================
 * LEIP Executive Copilot Engine
 * ==========================================================
 * Generates AI executive guidance from programme state.
 */

export function generateExecutiveCopilot(programme) {
  if (!programme) return null;

  const {
    phase,
    readiness,
    completion,
    executivePulse,
    recommendation,
    milestones = [],
  } = programme;

  const pulse = executivePulse?.pulse ?? 0;
  const health = executivePulse?.health ?? 0;
  const risk = executivePulse?.risk ?? "Medium";

  //----------------------------------------------------
  // Executive Recommendation
  //----------------------------------------------------

  let executiveRecommendation;

  if (phase === "Assessment") {
    executiveRecommendation =
      "Complete the Executive Assessment and establish transformation priorities before progressing to strategic planning.";
  } else if (phase === "Strategy") {
    executiveRecommendation =
      "Continue accelerating the Strategy phase and secure executive approval for the transformation roadmap.";
  } else if (phase === "Implementation") {
    executiveRecommendation =
      "Focus on disciplined programme execution while monitoring delivery performance and executive KPIs.";
  } else {
    executiveRecommendation =
      "Optimise delivery, governance and continuous improvement across the enterprise.";
  }

  //----------------------------------------------------
  // Strategic Watchlist
  //----------------------------------------------------

  const strategicWatchlist = [];

  if (risk !== "Low")
    strategicWatchlist.push(
      `Programme risk remains ${risk}.`
    );

  if (completion < 100)
    strategicWatchlist.push(
      `${100 - completion}% of programme still outstanding.`
    );

  if (health < 75)
    strategicWatchlist.push(
      "Executive Health requires continued monitoring."
    );

  const pendingMilestones =
    milestones.filter((m) => !m.completed).length;

  if (pendingMilestones)
    strategicWatchlist.push(
      `${pendingMilestones} milestone(s) awaiting completion.`
    );

  //----------------------------------------------------
  // AI Insights
  //----------------------------------------------------

  const aiInsights = [
    `Executive Pulse currently ${pulse}%.`,
    `Readiness Score is ${readiness}%.`,
    `Programme Completion is ${completion}%.`,
    `Executive Health is ${health}%.`,
  ];

  //----------------------------------------------------
  // Executive Decisions
  //----------------------------------------------------

  const nextExecutiveDecisions = [];

  if (phase === "Strategy") {
    nextExecutiveDecisions.push(
      "Approve Transformation Roadmap"
    );
  }

  if (phase !== "Optimization") {
    nextExecutiveDecisions.push(
      "Review Executive KPIs"
    );

    nextExecutiveDecisions.push(
      "Confirm Programme Governance"
    );
  }

  nextExecutiveDecisions.push(
    "Schedule Executive Review"
  );

  return {
    executiveRecommendation,
    strategicWatchlist,
    aiInsights,
    nextExecutiveDecisions,
    recommendation,
  };
}
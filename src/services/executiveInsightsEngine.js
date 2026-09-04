/**
 * ============================================================
 * LemonLogic Executive Intelligence Platform (LEIP)
 * Executive Insights Engine
 * ------------------------------------------------------------
 * Generates executive intelligence from programme data.
 *
 * Consumers:
 *  - Executive Workspace
 *  - Executive Dashboard
 *  - Executive Advisor
 *  - Board Report
 * ============================================================
 */

export function generateExecutiveInsights({
  assessment = {},
  executivePulse = {},
  statistics = {},
  kpis = {},
  recommendation = {},
}) {

  const readiness =
    assessment?.readinessPercentage ?? 0;

  const completion =
    statistics?.completion ?? 0;

  const health =
    kpis?.executiveHealth ?? 0;

  const pulse =
    executivePulse?.pulse ?? 0;

  const insights = [];

  const opportunities = [];

  const risks = [];

  const quickWins = [];

  /**
   * ============================================================
   * Executive Insights
   * ============================================================
   */

  if (readiness < 50) {
    insights.push(
      "Executive alignment should be strengthened before large-scale implementation."
    );

    quickWins.push(
      "Conduct an Executive KPI & Strategy Workshop."
    );
  }

  if (completion < 50) {
    insights.push(
      "Programme execution remains in its early stages."
    );

    quickWins.push(
      "Prioritise high-impact automation initiatives."
    );
  }

  if (pulse < 60) {
    risks.push(
      "Executive momentum is below the desired operating level."
    );
  }

  if (health >= 75) {
    opportunities.push(
      "The organisation is positioned to expand enterprise automation."
    );
  }

  opportunities.push(
    "Executive dashboards can improve leadership visibility."
  );

  opportunities.push(
    "Workflow automation can significantly reduce manual reporting."
  );

  risks.push(
    recommendation?.recommendation ??
      "Transformation governance should continue to be monitored."
  );

  /**
   * ============================================================
   * Executive Summary
   * ============================================================
   */

  const executiveSummary =
    `Current executive readiness is ${readiness}% with programme completion at ${completion}%. Executive Health is ${health}% and Executive Pulse is ${pulse}%. Leadership should continue focusing on disciplined execution while expanding automation initiatives.`;

  return {

    executiveSummary,

    insights,

    opportunities,

    risks,

    quickWins,

    generatedAt:
      new Date().toISOString(),
  };
}
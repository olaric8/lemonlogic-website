/**
 * ============================================================
 * LemonLogic Executive Intelligence Platform (LEIP)
 * Executive KPI Engine
 * ------------------------------------------------------------
 * Centralised Executive KPI calculations.
 *
 * This engine is the ONLY place responsible for
 * calculating executive performance metrics.
 * ============================================================
 */

export function generateExecutiveKPIs({
  assessment = {},
  executivePulse = {},
  statistics = {},
}) {
  const readiness =
    assessment?.readinessPercentage ?? 0;

  const completion =
    statistics?.completion ?? 0;

  const pulse =
    executivePulse?.pulse ?? 0;

  /**
   * ------------------------------------------------------------
   * Executive Health
   * ------------------------------------------------------------
   */

  const executiveHealth = Math.round(
    readiness * 0.40 +
      completion * 0.35 +
      pulse * 0.25
  );

  /**
   * ------------------------------------------------------------
   * Transformation Maturity
   * ------------------------------------------------------------
   */

  let maturity = "Emerging";

  if (readiness >= 80)
    maturity = "Optimized";
  else if (readiness >= 60)
    maturity = "Advanced";
  else if (readiness >= 40)
    maturity = "Structured";

  /**
   * ------------------------------------------------------------
   * Delivery Velocity
   * ------------------------------------------------------------
   */

  let velocity = "Slow";

  if (completion >= 75)
    velocity = "Excellent";
  else if (completion >= 50)
    velocity = "Good";
  else if (completion >= 25)
    velocity = "Building";

  /**
   * ------------------------------------------------------------
   * Executive Confidence
   * ------------------------------------------------------------
   */

  let confidence = "Low";

  if (executiveHealth >= 80)
    confidence = "Very High";
  else if (executiveHealth >= 65)
    confidence = "High";
  else if (executiveHealth >= 50)
    confidence = "Moderate";

  /**
   * ------------------------------------------------------------
   * Risk Trend
   * ------------------------------------------------------------
   */

  let riskTrend = "Increasing";

  if (executiveHealth >= 80)
    riskTrend = "Low";
  else if (executiveHealth >= 60)
    riskTrend = "Stable";
  else if (executiveHealth >= 40)
    riskTrend = "Watch";

  /**
   * ------------------------------------------------------------
   * Automation Coverage
   * ------------------------------------------------------------
   */

  const automationCoverage =
    Math.round(
      (readiness + completion) / 2
    );

  /**
   * ------------------------------------------------------------
   * Productivity Index
   * ------------------------------------------------------------
   */

  const productivityIndex =
    Math.round(
      (completion + pulse) / 2
    );

  /**
   * ------------------------------------------------------------
   * ROI Forecast
   * ------------------------------------------------------------
   */

  const roiForecast =
    `${Math.max(
      120,
      Math.round(executiveHealth * 4)
    )}%`;

  /**
   * ------------------------------------------------------------
   * Estimated Annual Savings
   * ------------------------------------------------------------
   */

  const annualSavings =
    `$${(
      executiveHealth * 2500
    ).toLocaleString()}`;

  /**
   * ------------------------------------------------------------
   * Enterprise KPIs
   * ------------------------------------------------------------
   */

  return {
    executiveHealth,

    maturity,

    velocity,

    confidence,

    riskTrend,

    automationCoverage,

    productivityIndex,

    roiForecast,

    annualSavings,

    transformationScore:
      executiveHealth,
  };
}
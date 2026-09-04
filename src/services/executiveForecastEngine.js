/**
 * ============================================================
 * LemonLogic Executive Intelligence Platform (LEIP)
 * Executive Forecast Engine
 * ------------------------------------------------------------
 * Forecasts programme delivery and executive outlook.
 * ============================================================
 */

export function generateExecutiveForecast({
  assessment = {},
  executivePulse = {},
  statistics = {},
  kpis = {},
}) {
  const readiness =
    assessment?.readinessPercentage ?? 0;

  const completion =
    statistics?.completion ?? 0;

  const pulse =
    executivePulse?.pulse ?? 0;

  const health =
    kpis?.executiveHealth ?? 0;

  /**
   * Forecast Score
   */

  const forecastScore = Math.round(
    readiness * 0.30 +
    completion * 0.40 +
    pulse * 0.30
  );

  /**
   * Success Probability
   */

  const successProbability =
    Math.min(
      99,
      Math.max(20, forecastScore)
    );

  /**
   * Forecast Trend
   */

  let trend = "Declining";

  if (forecastScore >= 80)
    trend = "Excellent";
  else if (forecastScore >= 60)
    trend = "Improving";
  else if (forecastScore >= 40)
    trend = "Stable";

  /**
   * Estimated Completion
   */

  let estimatedCompletion = "120 Days";

  if (health >= 80)
    estimatedCompletion = "30 Days";
  else if (health >= 60)
    estimatedCompletion = "60 Days";
  else if (health >= 40)
    estimatedCompletion = "90 Days";

  /**
   * Executive Outlook
   */

  let outlook = "Requires Attention";

  if (successProbability >= 80)
    outlook = "Excellent";
  else if (successProbability >= 60)
    outlook = "Positive";
  else if (successProbability >= 40)
    outlook = "Cautiously Optimistic";

  return {
    forecastScore,

    successProbability,

    trend,

    outlook,

    estimatedCompletion,

    generatedAt:
      new Date().toISOString(),
  };
}
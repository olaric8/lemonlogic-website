export function generateExecutiveDecision(assessment) {
  const score = assessment?.readinessPercentage || 0;

  let priority = "";
  let businessImpact = "";
  let complexity = "";
  let roi = "";
  let timeline = "";
  let confidence = "";
  let risk = "";
  let firstAction = "";
  let programme = "";

  if (score < 40) {
    priority = "Critical";
    businessImpact = "Very High";
    complexity = "Medium";
    roi = "220%";
    timeline = "90 Days";
    confidence = "97%";
    risk = "High";

    programme =
      "Executive Dashboards & Business Process Automation";

    firstAction =
      "Conduct an Executive KPI & Process Discovery Workshop.";
  }

  else if (score < 70) {
    priority = "High";
    businessImpact = "High";
    complexity = "Medium";
    roi = "185%";
    timeline = "60 Days";
    confidence = "94%";
    risk = "Medium";

    programme =
      "Operational Intelligence & Workflow Automation";

    firstAction =
      "Deploy Executive Dashboards and automate reporting.";
  }

  else {
    priority = "Strategic";

    businessImpact = "Moderate";

    complexity = "Low";

    roi = "145%";

    timeline = "30 Days";

    confidence = "91%";

    risk = "Low";

    programme =
      "Artificial Intelligence Optimisation";

    firstAction =
      "Expand predictive analytics and executive AI capabilities.";
  }

  return {
    priority,
    businessImpact,
    complexity,
    roi,
    timeline,
    confidence,
    risk,
    programme,
    firstAction,
  };
}
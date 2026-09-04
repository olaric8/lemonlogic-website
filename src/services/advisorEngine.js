export function getAdvisorResponse(question, assessmentData) {
  if (!assessmentData) {
    return "Please complete the Automation Readiness Assessment first.";
  }

  const q = question.toLowerCase();

  if (
    q.includes("start") ||
    q.includes("begin")
  ) {
    const readiness =
      assessmentData.readinessPercentage || 0;

    if (readiness < 40) {
      return "Your organization is still in the early stages of automation maturity. Begin by standardizing workflows, reducing spreadsheet dependency, improving reporting visibility, and documenting critical business processes.";
    }

    if (readiness < 70) {
      return "Your organization has established a foundation for growth. Focus on workflow automation, executive dashboards, KPI tracking, and improving operational visibility.";
    }

    return "Your organization already demonstrates strong operational maturity. Focus on advanced optimization, AI-assisted decision support, continuous improvement initiatives, and strategic automation opportunities.";
  }

  if (
    q.includes("weakness") ||
    q.includes("problem")
  ) {
    const priorities =
      assessmentData.priorities?.join(", ");

    return `Based on your assessment, the primary improvement opportunities are: ${priorities}. ${assessmentData.executiveNarrative}`;
  }

  if (
    q.includes("solution")
  ) {
    return `Recommended Solution: ${assessmentData.solution}`;
  }

  if (
    q.includes("score") ||
    q.includes("maturity") ||
    q.includes("level")
  ) {
    return `Your readiness score is ${assessmentData.score}/30 with a maturity classification of ${assessmentData.level}. Current readiness is ${assessmentData.readinessPercentage}%`;
  }

  if (
    q.includes("recommend") ||
    q.includes("recommendation")
  ) {
    return `Based on your assessment, I recommend: ${assessmentData.recommendations?.join(
      ", "
    )}`;
  }

  if (
    q.includes("90") ||
    q.includes("roadmap")
  ) {

    const readiness =
      assessmentData.readinessPercentage || 0;

    if (readiness < 40) {
      return "90-Day Transformation Roadmap: Month 1 - Standardize business processes and reduce spreadsheet dependency. Month 2 - Improve reporting visibility and operational governance. Month 3 - Introduce workflow automation and KPI monitoring.";
    }

    if (readiness < 70) {
      return "90-Day Transformation Roadmap: Month 1 - Optimize workflows and define executive KPIs. Month 2 - Deploy automation initiatives and improve dashboard visibility. Month 3 - Measure performance improvements and refine processes.";
    }

    return "90-Day Transformation Roadmap: Month 1 - Review operational maturity and identify optimization opportunities. Month 2 - Introduce advanced automation and AI-assisted decision support. Month 3 - Establish continuous improvement programs and executive performance reviews.";
  }
  if (
    q.includes("30 day") ||
    q.includes("next 30 days")
  ) {

    const readiness =
      assessmentData.readinessPercentage || 0;

    if (readiness < 40) {
      return "Next 30 Days: Focus on documenting key business processes, reducing spreadsheet dependency, improving reporting visibility, and defining operational KPIs.";
    }

    if (readiness < 70) {
      return "Next 30 Days: Focus on workflow automation, dashboard implementation, KPI governance, and operational visibility improvements.";
    }

    return "Next 30 Days: Focus on optimization, executive intelligence initiatives, AI-assisted decision support, and continuous improvement opportunities.";
  }
  if (
    q.includes("automate first") ||
    q.includes("automation first")
  ) {

    return `Based on your assessment, the recommended starting point is: ${assessmentData.priorities?.join(
      ", "
    )}. Focus on these areas before pursuing advanced automation initiatives.`;
  }
  if (
    q.includes("leadership") ||
    q.includes("executive focus")
  ) {

    return "Leadership should focus on operational visibility, KPI governance, process standardization, and removing bottlenecks that limit organizational performance.";
  }
  if (
    q.includes("risk") ||
    q.includes("business risk")
  ) {

    return `Based on your assessment, the primary business risks relate to: ${assessmentData.priorities?.join(
      ", "
    )}. These areas should be addressed before pursuing more advanced transformation initiatives.`;
  }

  if (
    q.includes("priority")
  ) {
    return `Your current priority areas are: ${assessmentData.priorities?.join(
      ", "
    )}`;
  }

  if (
    q.includes("action plan") ||
    q.includes("implementation plan") ||
    q.includes("transformation plan") ||
    q.includes("this month")
  ) {

    const readiness =
      assessmentData.readinessPercentage || 0;

    if (readiness < 40) {
      return `
Executive Action Plan

Week 1:
• Document critical business processes
• Identify spreadsheet dependencies

Week 2:
• Define operational KPIs
• Improve reporting visibility

Week 3:
• Standardize workflows
• Establish process ownership

Week 4:
• Prepare automation opportunities
• Review transformation priorities
`;
    }

    if (readiness < 70) {
      return `
Executive Action Plan

Week 1:
• Review workflow bottlenecks
• Define dashboard requirements

Week 2:
• Implement KPI tracking
• Improve operational reporting

Week 3:
• Deploy workflow automation
• Improve cross-team visibility

Week 4:
• Measure performance gains
• Prioritize next automation initiatives
`;
    }

    return `
Executive Action Plan

Week 1:
• Review operational maturity
• Identify optimization opportunities

Week 2:
• Expand executive intelligence capabilities
• Improve strategic reporting

Week 3:
• Introduce AI-assisted decision support
• Optimize business processes

Week 4:
• Establish continuous improvement framework
• Review executive performance metrics
`;
  }

  return "Based on your assessment, I recommend focusing on your priority areas and implementing the recommended solution before pursuing advanced automation initiatives.";
}
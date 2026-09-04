/**
 * ============================================================
 * LEIP Executive Pulse Engine
 * ============================================================
 */

export function generateExecutivePulse({
  assessment = {},
  tasks = [],
  milestones = [],
  notes = "",
}) {
  const readiness =
    assessment?.readinessPercentage || 0;

  const completedTasks =
    tasks.filter((task) => task.completed).length;

  const taskScore =
    tasks.length === 0
      ? 0
      : (completedTasks / tasks.length) * 25;

  const completedMilestones =
    milestones.filter(
      (milestone) => milestone.completed
    ).length;

  const milestoneScore =
    milestones.length === 0
      ? 0
      : (completedMilestones / milestones.length) * 15;

  const noteScore =
    notes.trim().length > 0 ? 10 : 0;

  const readinessScore =
    readiness * 0.5;

  const pulse = Math.min(
    100,
    Math.round(
      readinessScore +
      taskScore +
      milestoneScore +
      noteScore
    )
  );

  let momentum = "Building";

  if (pulse >= 85) {
    momentum = "Excellent";
  } else if (pulse >= 70) {
    momentum = "Strong";
  } else if (pulse >= 50) {
    momentum = "Steady";
  }

  let risk = "High";

  if (pulse >= 80) {
    risk = "Low";
  } else if (pulse >= 60) {
    risk = "Medium";
  }

  return {
    pulse,
    momentum,
    risk,
    confidence:
      pulse >= 75 ? "High" : "Moderate",
  };
}
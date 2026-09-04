/**
 * ============================================================
 * LEIP Executive Programme Engine (v2.0)
 * ============================================================
 *
 * Canonical business object for the entire Executive Platform.
 *
 * Consumers:
 *  - Executive Workspace
 *  - Executive Dashboard
 *  - Executive Advisor
 *  - Executive Board Report
 *  - Executive PDF Report
 *
 * This engine is the ONLY place where programme state is
 * calculated.
 *
 * v2.0 fixes:
 *  1. Programme completion is now MILESTONE-based. Milestones
 *     linked to tasks (via taskId in ExecutiveContext) already
 *     reflect task status, so the old formula
 *     (tasks + milestones) / (all items) double-counted work
 *     and produced readings like "3/3 tasks but 44%".
 *  2. Programme phase is now driven by MILESTONE PROGRESS
 *     (first phase with an incomplete milestone), not by the
 *     assessment readiness score. Previously the lifecycle
 *     could never advance no matter how much work was
 *     completed. Readiness-based phase remains as fallback
 *     when milestones carry no phase data.
 *
 * Built By LemonLogic — lemonlogicai.com
 * ============================================================
 */

import { generateExecutivePulse } from "./executivePulseEngine";
import { generateExecutiveRecommendation } from "./executiveRecommendationEngine";
import { generateExecutiveKPIs } from "./executiveKPIEngine";
import { generateExecutiveDecision } from "./executiveDecisionEngine";
import { generateExecutiveForecast } from "./executiveForecastEngine";
import { generateExecutiveInsights } from "./executiveInsightsEngine";
const PHASE_ORDER = [
  "Assessment",
  "Strategy",
  "Implementation",
  "Optimization",
];

/**
 * ------------------------------------------------------------
 * Fallback: readiness-based phase
 * ------------------------------------------------------------
 * Only used when milestones carry no phase information
 * (e.g. legacy data), preserving old behaviour as a fallback.
 */

function determinePhaseFromReadiness(readiness = 0) {
  if (readiness < 25) return "Assessment";
  if (readiness < 50) return "Strategy";
  if (readiness < 75) return "Implementation";
  return "Optimization";
}

/**
 * ------------------------------------------------------------
 * Progress-based phase (the fix)
 * ------------------------------------------------------------
 * Current phase = the first phase that still has an incomplete
 * milestone. If every milestone is complete, the programme is
 * in Optimization.
 */

function determinePhaseFromMilestones(milestones) {
  const current = PHASE_ORDER.find((phase) =>
    milestones.some(
      (milestone) =>
        milestone.phase === phase && !milestone.completed
    )
  );

  return current ?? "Optimization";
}

/**
 * ------------------------------------------------------------
 * Programme Phase Model
 * ------------------------------------------------------------
 * Phase statuses are derived from the milestones themselves:
 *   completed = every milestone in the phase is complete
 *   active    = the current phase
 *   pending   = everything else
 */

function generateProgrammePhases(currentPhase, milestones) {
  const activeIndex = PHASE_ORDER.indexOf(currentPhase);

  return PHASE_ORDER.map((name, index) => {
    const items = milestones.filter(
      (milestone) => milestone.phase === name
    );

    const allDone =
      items.length > 0 &&
      items.every((milestone) => milestone.completed);

    // A phase is completed if all its milestones are done,
    // or (fallback) if it sits before the active phase.
    const completed =
      allDone || (items.length === 0 && index < activeIndex);

    const active = name === currentPhase && !completed;

    return {
      id: index + 1,
      name,

      status: completed
        ? "completed"
        : active
        ? "active"
        : "pending",

      completed,
      active,
    };
  });
}

/**
 * ============================================================
 * Executive Programme
 * ============================================================
 */

export function generateExecutiveProgramme({
  assessment = {},
  tasks = [],
  milestones = [],
  notes = "",
}) {
  /**
   * Executive Pulse
   */

  const executivePulse = generateExecutivePulse({
    assessment,
    tasks,
    milestones,
    notes,
  });

  /**
   * Recommendation
   */

  const recommendation =
    generateExecutiveRecommendation({
      executivePulse,
    });

  /**
   * Task Statistics
   */

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const taskCompletion =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  /**
   * Milestone Statistics
   */

  const totalMilestones = milestones.length;

  const completedMilestones = milestones.filter(
    (milestone) => milestone.completed
  ).length;

  const milestoneCompletion =
    totalMilestones === 0
      ? 0
      : Math.round(
          (completedMilestones / totalMilestones) * 100
        );

  /**
   * Programme Completion (FIXED)
   * ------------------------------------------------------------
   * The milestone list is the plan of record. Task-linked
   * milestones already mirror task status, so measuring
   * milestones alone counts each piece of work exactly once.
   * Fallback: if there are no milestones at all, fall back to
   * task completion so the number stays meaningful.
   */

  const completion =
    totalMilestones > 0
      ? milestoneCompletion
      : taskCompletion;

  /**
   * Assessment Readiness
   */

  const readiness =
    assessment?.readinessPercentage ?? 0;

  /**
   * Programme Phase (FIXED)
   * ------------------------------------------------------------
   * Driven by milestone progress. Falls back to the old
   * readiness-based model only when milestones carry no
   * phase data.
   */

  const milestonesHavePhases = milestones.some(
    (milestone) => milestone.phase
  );

  const phase = milestonesHavePhases
    ? determinePhaseFromMilestones(milestones)
    : determinePhaseFromReadiness(readiness);

  /**
   * Programme Lifecycle
   */

  const phases =
    generateProgrammePhases(phase, milestones);
/**
 * ------------------------------------------------------------
 * Executive KPIs
 * ------------------------------------------------------------
 */

const kpis = generateExecutiveKPIs({
  assessment,
  executivePulse,
  statistics: {
    totalTasks,
    completedTasks,
    taskCompletion,

    totalMilestones,
    completedMilestones,
    milestoneCompletion,

    completion,
    readiness,
  },
});

/**
 * ------------------------------------------------------------
 * Executive Decision
 * ------------------------------------------------------------
 */

const decision =
  generateExecutiveDecision({
    assessment,
    executivePulse,
    statistics: {
      totalTasks,
      completedTasks,
      taskCompletion,

      totalMilestones,
      completedMilestones,
      milestoneCompletion,

      completion,
      readiness,
    },
    kpis,
  });

/**
 * ------------------------------------------------------------
 * Executive Forecast
 * ------------------------------------------------------------
 */

const forecast =
  generateExecutiveForecast({
    assessment,
    executivePulse,
    statistics: {
      totalTasks,
      completedTasks,
      taskCompletion,

      totalMilestones,
      completedMilestones,
      milestoneCompletion,

      completion,
      readiness,
    },
    kpis,
  });

/**
 * ------------------------------------------------------------
 * Executive Insights
 * ------------------------------------------------------------
 */

const insights =
  generateExecutiveInsights({
    assessment,
    executivePulse,
    statistics: {
      totalTasks,
      completedTasks,
      taskCompletion,

      totalMilestones,
      completedMilestones,
      milestoneCompletion,

      completion,
      readiness,
    },
    kpis,
    recommendation,
  });
  /**
   * Organisation
   */

  const organisation =
    assessment?.companyName ||
    "Executive Programme";

  /**
   * Final Enterprise Object
   */

  return {
    /**
     * Identity
     */

    organisation,

    /**
     * Backward compatibility
     */

    organization: organisation,

    /**
     * Executive Programme
     */

    readiness,

    completion,

    phase,

    phases,

    /**
     * Executive Intelligence
     */

    executivePulse,

    recommendation,
kpis,

decision,

forecast,

insights,
    /**
     * Assessment
     */

    assessment,

    /**
     * Workspace
     */

    tasks,

    milestones,

    notes,

    /**
     * Enterprise Statistics
     */

    statistics: {
      totalTasks,
      completedTasks,
      taskCompletion,

      totalMilestones,
      completedMilestones,
      milestoneCompletion,

      completion,
      readiness,
    },

    /**
     * Metadata
     */

    generatedAt: new Date().toISOString(),
  };
}
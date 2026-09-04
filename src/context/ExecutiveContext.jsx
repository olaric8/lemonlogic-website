import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";

import executiveStorage from "../utils/executiveStorage";

const ExecutiveContext = createContext(null);

/**
 * ============================================================
 * LEIP Executive Context — Derived-State Version (v2.0)
 * ------------------------------------------------------------
 * Single source of truth:
 *   - Tasks own their `completed` flag.
 *   - Milestones linked to a task (via `taskId`) DERIVE their
 *     completion and status from that task — they can never
 *     drift out of sync again.
 *   - Unlinked milestones (approvals, kick-offs, reviews) keep
 *     their own flag via toggleMilestone().
 *   - `programme` publishes ONE canonical set of numbers
 *     (completion %, current phase, phase statuses) so every
 *     card on screen tells the same story.
 *
 * Built By LemonLogic — lemonlogicai.com
 * ============================================================
 */

const PHASE_ORDER = [
  "Assessment",
  "Strategy",
  "Implementation",
  "Optimization",
];

export function ExecutiveProvider({ children }) {
  /**
   * ============================================================
   * State
   * ============================================================
   */

  const [assessment, setAssessment] = useState(() =>
    executiveStorage.getAssessment()
  );

  const [history, setHistory] = useState(() =>
    executiveStorage.getHistory()
  );

  const [settings, setSettings] = useState(() =>
    executiveStorage.getSettings()
  );

  const [notes, setNotes] = useState(() =>
    executiveStorage.getNotes()
  );

  const SEED_TASKS = [
    {
      id: 1,
      title: "Complete Executive Assessment",
      description: "Complete the automation readiness assessment.",
      owner: "Executive Team",
      priority: "High",
      dueWeek: "Week 1",
      completed: true,
    },
    {
      id: 2,
      title: "Executive KPI Workshop",
      description: "Define executive transformation KPIs.",
      owner: "Leadership",
      priority: "High",
      dueWeek: "Week 2",
      completed: false,
    },
    {
      id: 3,
      title: "Reporting Automation",
      description: "Deploy executive reporting automation.",
      owner: "Technology",
      priority: "Medium",
      dueWeek: "Week 3",
      completed: false,
    },
  ];

  /**
   * Tasks now persist across refresh. `executiveStorage.getTasks()`
   * returns null only on first-ever run (never saved before), in
   * which case we fall back to the seed list above.
   */
  const [tasks, setTasks] = useState(
    () => executiveStorage.getTasks() ?? SEED_TASKS
  );

  /**
   * Raw milestone state.
   *
   * Milestones with a `taskId` are LINKED to that task — their
   * `completed` / `status` values here are only placeholders and
   * are overwritten by the derivation below. Only unlinked
   * milestones (no taskId) keep their own flags in this state.
   */
  const SEED_MILESTONES = [
    {
      id: 1,
      taskId: 1,
      phase: "Assessment",
      week: "Week 1",
      title: "Executive Assessment Complete",
      description:
        "Executive Automation Readiness Assessment completed.",
      owner: "Executive Office",
      priority: "High",
      completed: true,
      status: "completed",
    },

    {
      id: 2,
      taskId: 2,
      phase: "Strategy",
      week: "Week 2",
      title: "Executive KPI Workshop",
      description:
        "Executive transformation KPIs defined and approved.",
      owner: "Executive Leadership",
      priority: "High",
      completed: false,
      status: "pending",
    },

    {
      id: 3,
      phase: "Strategy",
      week: "Week 3",
      title: "Transformation Roadmap Approved",
      description:
        "Enterprise transformation roadmap approved by leadership.",
      owner: "Programme Office",
      priority: "High",
      completed: false,
      status: "pending",
    },

    {
      id: 4,
      phase: "Implementation",
      week: "Week 4",
      title: "Implementation Kick-off",
      description:
        "Transformation programme officially launched.",
      owner: "Technology",
      priority: "Medium",
      completed: false,
      status: "pending",
    },

    {
      id: 5,
      taskId: 3,
      phase: "Implementation",
      week: "Week 8",
      title: "Reporting Automation",
      description:
        "Executive reporting automation deployed.",
      owner: "Technology",
      priority: "Medium",
      completed: false,
      status: "pending",
    },

    {
      id: 6,
      phase: "Optimization",
      week: "Week 12",
      title: "Executive Transformation Review",
      description:
        "Programme performance reviewed for optimization.",
      owner: "Executive Office",
      priority: "Medium",
      completed: false,
      status: "pending",
    },
  ];

  /**
   * Raw milestones now persist across refresh too. Only the
   * unlinked milestones' saved `completed`/`status` matter on
   * reload — linked milestones are re-derived from tasks
   * immediately below regardless of what was saved.
   */
  const [rawMilestones, setRawMilestones] = useState(
    () => executiveStorage.getMilestones() ?? SEED_MILESTONES
  );

  /**
   * ============================================================
   * DERIVED STATE — the fix
   * ============================================================
   */

  /**
   * Milestones with completion derived from their linked task.
   * Marking the "Executive KPI Workshop" TASK complete instantly
   * turns the Week 2 roadmap MILESTONE green. No sync code, no
   * drift possible.
   */
  const milestones = useMemo(
    () =>
      rawMilestones.map((milestone) => {
        if (milestone.taskId == null) {
          return milestone;
        }

        const linkedTask = tasks.find(
          (task) => task.id === milestone.taskId
        );

        const completed = Boolean(linkedTask?.completed);

        return {
          ...milestone,
          completed,
          status: completed ? "completed" : "pending",
        };
      }),
    [rawMilestones, tasks]
  );

  /**
   * One canonical set of programme numbers. Every card should
   * read from here so "3/3 Tasks" and "Programme Completion"
   * can never tell contradictory stories again.
   */
  const programme = useMemo(() => {
    const completedTasks = tasks.filter(
      (task) => task.completed
    ).length;

    const completedMilestones = milestones.filter(
      (milestone) => milestone.completed
    ).length;

    const totalTasks = tasks.length;
    const totalMilestones = milestones.length;

    const taskCompletion =
      totalTasks === 0
        ? 0
        : Math.round((completedTasks / totalTasks) * 100);

    const milestoneCompletion =
      totalMilestones === 0
        ? 0
        : Math.round(
            (completedMilestones / totalMilestones) * 100
          );

    /**
     * Overall programme completion = milestone completion.
     * The milestone list is the plan of record, and linked
     * milestones already reflect task status — so tasks are
     * not double-counted the way the old (tasks + milestones)
     * / (total tasks + total milestones) formula was.
     */
    const overallCompletion = milestoneCompletion;

    /**
     * Current phase = first phase that still has an incomplete
     * milestone. If everything is done, we're in Optimization.
     */
    const currentPhase =
      PHASE_ORDER.find((phase) =>
        milestones.some(
          (milestone) =>
            milestone.phase === phase && !milestone.completed
        )
      ) ?? "Optimization";

    /**
     * Phase statuses for the Programme Lifecycle rail:
     * Completed / Active / Pending.
     */
    const phases = PHASE_ORDER.map((phase) => {
      const items = milestones.filter(
        (milestone) => milestone.phase === phase
      );

      const done =
        items.length > 0 &&
        items.every((milestone) => milestone.completed);

      const status = done
        ? "Completed"
        : phase === currentPhase
        ? "Active"
        : "Pending";

      return { phase, status };
    });

    return {
      completedTasks,
      totalTasks,
      taskCompletion,

      completedMilestones,
      totalMilestones,
      milestoneCompletion,

      overallCompletion,

      currentPhase,
      phases,
    };
  }, [tasks, milestones]);

  /**
   * ============================================================
   * Assessment
   * ============================================================
   */

  const saveAssessment = useCallback((data) => {
    executiveStorage.saveAssessment(data);
    setAssessment(data);
  }, []);

  /**
   * ============================================================
   * History
   * ============================================================
   */

  const addHistory = useCallback((record) => {
    executiveStorage.addHistory(record);
    setHistory(executiveStorage.getHistory());
  }, []);

  const saveHistory = useCallback((records) => {
    executiveStorage.saveHistory(records);
    setHistory(records);
  }, []);

  /**
   * ============================================================
   * Executive Notes
   * ============================================================
   */

  const saveNotes = useCallback((value) => {
    executiveStorage.saveNotes(value);
    setNotes(value);
  }, []);

  const clearNotes = useCallback(() => {
    executiveStorage.clearNotes();
    setNotes("");
  }, []);

  /**
   * ============================================================
   * Tasks & Milestones
   * ============================================================
   */

  /**
   * Toggling a task is the ONLY write needed for linked
   * milestones — they update automatically via derivation.
   */
  const toggleTask = useCallback((id) => {
    setTasks((current) => {
      const updated = current.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

      executiveStorage.saveTasks(updated);

      return updated;
    });
  }, []);

  /**
   * For UNLINKED milestones only (Roadmap Approved, Kick-off,
   * Transformation Review). Linked milestones ignore this and
   * log a warning so the drift bug can't silently return.
   */
  const toggleMilestone = useCallback((id) => {
    setRawMilestones((current) => {
      const updated = current.map((milestone) => {
        if (milestone.id !== id) {
          return milestone;
        }

        if (milestone.taskId != null) {
          console.warn(
            `[LEIP] Milestone "${milestone.title}" is derived from task #${milestone.taskId}. Toggle the task instead.`
          );
          return milestone;
        }

        const completed = !milestone.completed;

        return {
          ...milestone,
          completed,
          status: completed ? "completed" : "pending",
        };
      });

      executiveStorage.saveMilestones(updated);

      return updated;
    });
  }, []);

  /**
   * ============================================================
   * Settings
   * ============================================================
   */

  const saveSettings = useCallback((newSettings) => {
    executiveStorage.saveSettings(newSettings);
    setSettings(newSettings);
  }, []);

  /**
   * ============================================================
   * Reset Executive Workspace
   * ============================================================
   */

  const resetExecutiveData = useCallback(() => {
    executiveStorage.reset();

    setAssessment(null);
    setHistory([]);
    setSettings({});
    setNotes("");

    // Restore seed data in memory (matches storage now being
    // cleared, so next refresh would fall back to these too).
    setTasks(SEED_TASKS);
    setRawMilestones(SEED_MILESTONES);
  }, []);

  /**
   * ============================================================
   * Context Value
   * ============================================================
   */

  const value = useMemo(
    () => ({
      assessment,
      history,
      settings,
      notes,
      tasks,

      // Derived — always consistent with tasks
      milestones,
      programme,

      // Kept for backward compatibility: writes to raw state.
      // Note: linked milestones' completed/status are always
      // re-derived from tasks, whatever you set here.
      setMilestones: setRawMilestones,

      saveAssessment,
      addHistory,
      saveHistory,
      saveSettings,
      saveNotes,
      toggleTask,
      toggleMilestone,
      clearNotes,
      resetExecutiveData,
    }),
    [
      assessment,
      history,
      settings,
      notes,
      tasks,
      milestones,
      programme,
      saveAssessment,
      addHistory,
      saveHistory,
      saveSettings,
      saveNotes,
      toggleTask,
      toggleMilestone,
      clearNotes,
      resetExecutiveData,
    ]
  );

  return (
    <ExecutiveContext.Provider value={value}>
      {children}
    </ExecutiveContext.Provider>
  );
}

export function useExecutiveContext() {
  const context = useContext(ExecutiveContext);

  if (!context) {
    throw new Error(
      "useExecutiveContext must be used inside ExecutiveProvider."
    );
  }

  return context;
}

export default ExecutiveContext;

/**
 * ============================================================
 * LemonLogic Executive Intelligence Platform (LEIP)
 * Executive Storage Service
 * ============================================================
 */

const STORAGE_KEYS = {
  ASSESSMENT: "leipResults",
  HISTORY: "leipAssessmentHistory",
  SETTINGS: "leipSettings",
  NOTES: "leipExecutiveNotes",
  TASKS: "leipExecutiveTasks",
  MILESTONES: "leipExecutiveMilestones",
};

class ExecutiveStorage {
  /* ============================================================
   * Assessment
   * ============================================================
   */

  getAssessment() {
    try {
      const saved = localStorage.getItem(
        STORAGE_KEYS.ASSESSMENT
      );

      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  saveAssessment(data) {
    localStorage.setItem(
      STORAGE_KEYS.ASSESSMENT,
      JSON.stringify(data)
    );
  }

  clearAssessment() {
    localStorage.removeItem(
      STORAGE_KEYS.ASSESSMENT
    );
  }

  /* ============================================================
   * Assessment History
   * ===============================================================
   */

  getHistory() {
    try {
      const saved = localStorage.getItem(
        STORAGE_KEYS.HISTORY
      );

      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  saveHistory(history) {
    localStorage.setItem(
      STORAGE_KEYS.HISTORY,
      JSON.stringify(history)
    );
  }

  addHistory(record) {
    const history = this.getHistory();

    history.push(record);

    this.saveHistory(history);
  }

  clearHistory() {
    localStorage.removeItem(
      STORAGE_KEYS.HISTORY
    );
  }

  /* ============================================================
   * Executive Notes
   * ============================================================
   */

  getNotes() {
    try {
      return (
        localStorage.getItem(
          STORAGE_KEYS.NOTES
        ) || ""
      );
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  saveNotes(notes) {
    localStorage.setItem(
      STORAGE_KEYS.NOTES,
      notes
    );
  }

  clearNotes() {
    localStorage.removeItem(
      STORAGE_KEYS.NOTES
    );
  }

  /* ============================================================
   * Settings
   * ============================================================
   */

  getSettings() {
    try {
      const saved = localStorage.getItem(
        STORAGE_KEYS.SETTINGS
      );

      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  saveSettings(settings) {
    localStorage.setItem(
      STORAGE_KEYS.SETTINGS,
      JSON.stringify(settings)
    );
  }

  /* ============================================================
   * Tasks
   * ------------------------------------------------------------
   * Returns null (not []) when nothing is saved yet, so the
   * context can tell "never saved" apart from "saved as empty"
   * and fall back to its seed data only on first run.
   * ============================================================
   */

  getTasks() {
    try {
      const saved = localStorage.getItem(
        STORAGE_KEYS.TASKS
      );

      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  saveTasks(tasks) {
    localStorage.setItem(
      STORAGE_KEYS.TASKS,
      JSON.stringify(tasks)
    );
  }

  clearTasks() {
    localStorage.removeItem(
      STORAGE_KEYS.TASKS
    );
  }

  /* ============================================================
   * Milestones
   * ------------------------------------------------------------
   * Stores the RAW milestone list (unlinked milestones' own
   * completed/status flags). Linked milestones' completion is
   * always re-derived from tasks at read time, so saving the
   * raw list here can never cause drift.
   * ============================================================
   */

  getMilestones() {
    try {
      const saved = localStorage.getItem(
        STORAGE_KEYS.MILESTONES
      );

      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  saveMilestones(milestones) {
    localStorage.setItem(
      STORAGE_KEYS.MILESTONES,
      JSON.stringify(milestones)
    );
  }

  clearMilestones() {
    localStorage.removeItem(
      STORAGE_KEYS.MILESTONES
    );
  }

  /* ============================================================
   * Reset
   * ============================================================
   */

  reset() {
    this.clearAssessment();
    this.clearHistory();
    this.clearNotes();
    this.clearTasks();
    this.clearMilestones();

    localStorage.removeItem(
      STORAGE_KEYS.SETTINGS
    );
  }
}

const executiveStorage =
  new ExecutiveStorage();

export default executiveStorage;

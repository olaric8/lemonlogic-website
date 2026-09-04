import { useMemo } from "react";

import { useExecutiveContext } from "../context/ExecutiveContext";

import { generateExecutivePulse } from "../services/executivePulseEngine";
import { generateExecutiveProgramme } from "../services/executiveProgrammeEngine";

export default function useExecutiveData() {
  const executive = useExecutiveContext();

  const executivePulse = useMemo(() => {
    return generateExecutivePulse({
      assessment: executive.assessment,
      tasks: executive.tasks || [],
      milestones: executive.milestones || [],
      notes: executive.notes || "",
    });
  }, [
    executive.assessment,
    executive.tasks,
    executive.milestones,
    executive.notes,
  ]);

  const executiveProgramme = useMemo(() => {
    return generateExecutiveProgramme({
      assessment: executive.assessment,
      tasks: executive.tasks || [],
      milestones: executive.milestones || [],
      notes: executive.notes || "",
    });
  }, [
    executive.assessment,
    executive.tasks,
    executive.milestones,
    executive.notes,
  ]);

  return {
    ...executive,
    executivePulse,
    executiveProgramme,
  };
}
import {
  BrainCircuit,
  Briefcase,
  GraduationCap,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "ai-training": GraduationCap,
  automation: Workflow,
  "management-consulting": Briefcase,
  "business-process-reengineering": Network,
  "ml-predictive-models": BrainCircuit,
};

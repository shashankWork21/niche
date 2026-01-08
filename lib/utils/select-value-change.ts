import { UserGoal } from "@/app/generated/prisma/enums";
import { goalOptions } from "./niche/goal-options";

export function handleValueChange(
  value: string,
  setter: (value: UserGoal) => void,
  type: "goal"
) {
  switch (type) {
    case "goal":
      const goalOption = goalOptions.find((option) => option.label === value);
      if (goalOption) {
        setter(goalOption.enumValue);
      }
      break;
  }
}

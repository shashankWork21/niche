import { UserGoal } from "@/app/generated/prisma/enums";

function getGoalLabel(value: UserGoal): string {
  switch (value) {
    case UserGoal.BUSINESS:
      return "Start a Business";
    case UserGoal.CAREER:
      return "Figure out my Career";
    default:
      return "";
  }
}

export const goalOptions = Object.values(UserGoal).map((value) => ({
  label: getGoalLabel(value),
  enumValue: value,
}));

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

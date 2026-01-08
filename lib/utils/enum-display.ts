import {
  DeliveryFormat,
  Role,
  BusinessModel,
  Gender,
  SolutionOutcome,
  TicketSize,
  marketSize,
  SupplyDemand,
  Proposition,
  Size,
  SlotStatus,
  Criticality,
  UrgencyLevel,
  AwarenessStage,
  BuyingPower,
  TechSavviness,
  EducationLevel,
  DemandOutlook,
  CompetitionLevel,
  RemoteViability,
  WorkLifeBalance,
  StressLevel,
  CareerArchetype,
  WorkingStyle,
  IdealEnvironment,
  CompanySize,
} from "@/app/generated/prisma/enums";

export function enumToDisplay(
  value:
    | Role
    | Gender
    | SolutionOutcome
    | TicketSize
    | marketSize
    | SupplyDemand
    | Proposition
    | Size
    | SlotStatus
    | BusinessModel
    | Criticality
    | UrgencyLevel
    | AwarenessStage
    | BuyingPower
    | TechSavviness
    | EducationLevel
    | DemandOutlook
    | CompetitionLevel
    | RemoteViability
    | WorkLifeBalance
    | StressLevel
    | CareerArchetype
    | WorkingStyle
    | IdealEnvironment
): string {
  return (
    value.replaceAll("_", " ").charAt(0).toUpperCase() +
    value.replaceAll("_", " ").slice(1).toLowerCase()
  );
}

export function companySizeToDisplay(size: CompanySize): string {
  switch (size) {
    case CompanySize.SOLO:
      return "Solo Entrepreneur";
    case CompanySize.SMALL_2_10:
      return "Small (2-10 employees)";
    case CompanySize.MEDIUM_11_50:
      return "Medium (11-50 employees)";
    case CompanySize.LARGE_51_200:
      return "Large (51-200 employees)";
    case CompanySize.ENTERPRISE_200_PLUS:
      return "Enterprise (200+ employees)";
    default:
      return size;
  }
}

export function displayDeliveryFormat(format: DeliveryFormat): string {
  switch (format) {
    case DeliveryFormat.DONE_FOR_YOU:
      return "Done For You - You do everything for the client, they get the finished result";
    case DeliveryFormat.DONE_WITH_YOU:
      return "Done With You - You work alongside the client, guiding them through implementation";
    case DeliveryFormat.SELF_SERVICE:
      return "Self-Service - Client does it themselves using your tools, courses, or templates";
    case DeliveryFormat.HYBRID:
      return "Hybrid - Combination of done-for-you, done-with-you, and self-service approaches";
    default:
      return format;
  }
}

export function displayAwarenessStage(stage: AwarenessStage): string {
  switch (stage) {
    case AwarenessStage.UNAWARE:
      return "Unaware - Customer doesn't know they have a problem";
    case AwarenessStage.PROBLEM_AWARE:
      return "Problem Aware - Customer knows they have a problem but not the solution";
    case AwarenessStage.SOLUTION_AWARE:
      return "Solution Aware - Customer knows solutions exist but not your product";
    case AwarenessStage.PRODUCT_AWARE:
      return "Product Aware - Customer knows about your product but hasn't purchased";
    default:
      return stage;
  }
}

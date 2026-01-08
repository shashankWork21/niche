"use client";

import { AwarenessStage, NicheSolution } from "@/app/generated/prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  DollarSign,
  Package,
  Lightbulb,
  Award,
  Target,
  Gift,
} from "lucide-react";
import {
  displayAwarenessStage,
  displayDeliveryFormat,
  enumToDisplay,
} from "@/lib/utils/enum-display";
import { useState } from "react";
import { Button } from "../ui/button";

interface NicheSolutionCardProps {
  solution: NicheSolution;
}

const typeBadgeClasses: Record<string, string> = {
  REMOVES_FEAR: "bg-purple-500 text-white hover:bg-purple-600",
  BUILDS_MOMENTUM: "bg-emerald-500 text-white hover:bg-emerald-600",
  SIMPLIFIES_EXECUTION: "bg-blue-500 text-white hover:bg-blue-600",
  REWARDS_CURIOSITY: "bg-pink-500 text-white hover:bg-pink-600",
};
const cardBgClasses: Record<string, string> = {
  REMOVES_FEAR: "bg-linear-to-br from-purple-50 to-purple-100",
  BUILDS_MOMENTUM: "bg-linear-to-br from-emerald-50 to-emerald-100",
  SIMPLIFIES_EXECUTION: "bg-linear-to-br from-blue-50 to-blue-100",
  REWARDS_CURIOSITY: "bg-linear-to-br from-pink-50 to-pink-100",
};

export function NicheSolutionCard({ solution }: NicheSolutionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 ${
        cardBgClasses[solution.outcome] ||
        "bg-linear-to-br from-white to-stone-100 text-black"
      }`}
    >
      <CardHeader>
        <CardTitle className="mt-4 flex flex-row justify-between items-center">
          {solution.solution}
          <div className="flex flex-row items-center gap-3">
            <p className="text-base font-semibold">Outcome:</p>
            <Badge
              className={
                typeBadgeClasses[solution.outcome] || "bg-red-500 text-white"
              }
            >
              {enumToDisplay(solution.outcome)}
            </Badge>
          </div>
        </CardTitle>
        <CardDescription className="text-black text-base mt-4">
          <ul className="list-disc list-inside space-y-2">
            {solution.description.map((item, itemIdx) => (
              <li key={itemIdx}>{item}</li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 cursor-pointer"
            onClick={handleExpandToggle}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </CardDescription>
      </CardHeader>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CardContent className="space-y-8">
          {/* Delivery, Timeframe, Pricing */}
          {(solution.deliveryFormat ||
            solution.timeframe ||
            solution.pricingGuidance) && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {solution.deliveryFormat && (
                <div className="flex items-start gap-2 col-span-2">
                  <Package className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide">
                      Delivery
                    </p>
                    <p className="text-smmt-1">
                      {displayDeliveryFormat(solution.deliveryFormat)}
                    </p>
                  </div>
                </div>
              )}
              {solution.timeframe && (
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide">
                      Timeframe
                    </p>
                    <p className="text-sm mt-1">{solution.timeframe}</p>
                  </div>
                </div>
              )}
              {solution.pricingGuidance && (
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide">
                      Pricing Guidance
                    </p>
                    <p className="text-sm mt-1">{solution.pricingGuidance}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Unique Approach */}
          {solution.uniqueApproach && (
            <div className="flex items-start gap-3">
              <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Your Unique Approach
                </p>
                <p className="text-sm mt-1">{solution.uniqueApproach}</p>
              </div>
            </div>
          )}

          {/* Proof Points */}
          {solution.proofPoints && solution.proofPoints.length > 0 && (
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Proof that it Works
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-1">
                  {solution.proofPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Ideal For Stage */}
          {solution.idealForStage && (
            <div className="flex items-start gap-2">
              <Target className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  What customer stage is this ideal for?
                </p>
                <p className="text-sm mt-1">
                  {displayAwarenessStage(
                    solution.idealForStage as AwarenessStage
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Bundles With */}
          {solution.bundlesWith && solution.bundlesWith.length > 0 && (
            <div className="flex items-start gap-2">
              <Gift className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Bundles With
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-1">
                  {solution.bundlesWith.map((bundle, idx) => (
                    <li key={idx}>{bundle}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
}

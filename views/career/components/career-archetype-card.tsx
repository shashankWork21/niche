"use client";

import { Card } from "@/components/ui/card";
import { Hammer, Users, BarChart3, Palette, Crown, Heart, Lightbulb, Grid3x3 } from "lucide-react";

interface CareerArchetypeCardProps {
  data: any;
}

const archetypeIcons: Record<string, any> = {
  BUILDER: Hammer,
  CONNECTOR: Users,
  ANALYST: BarChart3,
  CREATOR: Palette,
  LEADER: Crown,
  SUPPORTER: Heart,
  VISIONARY: Lightbulb,
  ORGANIZER: Grid3x3,
};

const archetypeColors: Record<string, string> = {
  BUILDER: "bg-orange-500",
  CONNECTOR: "bg-pink-500",
  ANALYST: "bg-blue-500",
  CREATOR: "bg-purple-500",
  LEADER: "bg-red-500",
  SUPPORTER: "bg-emerald-500",
  VISIONARY: "bg-yellow-500",
  ORGANIZER: "bg-cyan-500",
};

export function CareerArchetypeCard({ data }: CareerArchetypeCardProps) {
  if (!data.careerArchetype) return null;

  const Icon = archetypeIcons[data.careerArchetype];
  const colorClass = archetypeColors[data.careerArchetype];

  return (
    <section className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Your Career Archetype
      </h2>

      <Card className="p-8 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-64 h-64 ${colorClass} opacity-5 rounded-full blur-3xl`} />

        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-xl ${colorClass}`}>
              {Icon && <Icon className="w-8 h-8 text-white" />}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">
                {data.careerArchetype.replace("_", " ")}
              </h3>
              <p className="text-zinc-600">Your primary work style</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {data.workingStyle && (
              <div>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                  Working Style
                </h4>
                <p className="text-base text-zinc-900">{data.workingStyle.replace("_", " ")}</p>
              </div>
            )}
            {data.idealEnvironment && (
              <div>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                  Ideal Environment
                </h4>
                <p className="text-base text-zinc-900">{data.idealEnvironment.replace("_", " ")}</p>
              </div>
            )}
          </div>

          {data.growthPotential && (
            <div className="pt-6 border-t border-zinc-200">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                Growth Potential
              </h4>
              <p className="text-base text-zinc-900 leading-relaxed">{data.growthPotential}</p>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
}

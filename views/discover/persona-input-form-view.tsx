"use client";

import PersonaInputForm from "@/components/niche/persona-input-form";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Heart, Lightbulb } from "lucide-react";

export default function DiscoverPageView() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 via-white to-zinc-50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-purple-50 border-purple-200 text-purple-600"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Self-Discovery Journey
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Discover Your Unique Path
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Take your time to reflect on these questions. Your honest, detailed
            responses will help us uncover your ideal niche or career direction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <Card className="p-4 text-center border-purple-100 bg-purple-50/50">
            <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-zinc-900">
              Personalized Insights
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Tailored to your unique strengths
            </p>
          </Card>

          <Card className="p-4 text-center border-blue-100 bg-blue-50/50">
            <Heart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-zinc-900">
              Authentic Direction
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Based on what truly matters to you
            </p>
          </Card>

          <Card className="p-4 text-center border-emerald-100 bg-emerald-50/50">
            <Lightbulb className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-zinc-900">
              Actionable Results
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Clear next steps to get started
            </p>
          </Card>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <Card className="p-8 md:p-12 xl:p-16 shadow-lg bg-linear-to-br from-sky-100 to-blue-100">
          <PersonaInputForm />
        </Card>
      </div>
    </div>
  );
}

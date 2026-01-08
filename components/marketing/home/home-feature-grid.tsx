"use client";

import {
  Brain,
  Grid3x3,
  TrendingUp,
  Compass,
  DollarSign,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Framework-Driven Analysis",
    description:
      "7 proven startup frameworks guide your idea from skills to market positioning, pricing strategy, and launch approach.",
  },
  {
    icon: Grid3x3,
    title: "Structured Validation",
    description:
      "Size/Growth/Competition matrix helps you understand if your idea is worth pursuing and how to approach it.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description:
      "AI-powered research via Perplexity API delivers TAM/SAM/SOM estimates, growth indicators, and competitor landscapes.",
  },
  {
    icon: Compass,
    title: "Niche Positioning",
    description:
      "Transform vague ideas into specific niche statements with clear problem, person, and result definitions.",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy",
    description:
      "Get data-driven pricing recommendations based on value perception, competition, and purchase frequency analysis.",
  },
  {
    icon: Rocket,
    title: "Launch Roadmap",
    description:
      "Receive customized MVP strategy, launch channel recommendations, and 90-day execution plans.",
  },
];

export function HomeFeatureGrid() {
  return (
    <section className="mt-16 px-4 sm:mt-20 sm:px-6 md:mt-24">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-linear-to-br from-white/80 to-blue-50/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-lg shadow-blue-500/10 backdrop-blur-sm sm:px-5">
          How it works
        </div>
        <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-blue-950 sm:mt-8 sm:text-5xl md:text-6xl">
          Frameworks that force clarity
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-900/80 sm:mt-6 sm:text-xl">
          Not generic brainstorming. Structured frameworks that transform
          ambiguous ideas into actionable business strategies.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-linear-to-br from-white to-blue-50/30 p-8 shadow-lg shadow-blue-500/5 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Glow effect on hover */}
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-blue-200/0 blur-3xl transition-all duration-500 group-hover:bg-blue-300/40" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-700 to-blue-900 text-white shadow-lg shadow-blue-500/30 transition-all group-hover:scale-110 group-hover:shadow-blue-500/40">
                  <Icon className="h-7 w-7" strokeWidth={2.5} />
                </div>

                <h3 className="mt-5 font-sans text-xl font-bold text-blue-950">
                  {feature.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-blue-900/70">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

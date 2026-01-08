"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const useCases = [
  {
    icon: User,
    title: "Aspiring Entrepreneurs",
    description:
      "Transform skills into viable business ideas with clear market positioning",
  },
  {
    icon: Briefcase,
    title: "Coaches & Consultants",
    description:
      "Validate service offerings and refine your ideal client profile",
  },
  {
    icon: GraduationCap,
    title: "Career Switchers",
    description:
      "Discover how your experience translates into entrepreneurial opportunities",
  },
  {
    icon: Lightbulb,
    title: "Solopreneurs",
    description:
      "Get strategic clarity on product positioning and go-to-market strategy",
  },
];

export function HomeCta() {
  return (
    <section className="mt-20 px-4 sm:mt-24 sm:px-6 md:mt-32">
      <div className="overflow-hidden rounded-3xl border-2 border-blue-200 bg-linear-to-br from-blue-50 via-indigo-50/50 to-white p-8 shadow-2xl shadow-blue-500/10 sm:p-12 md:p-16 lg:p-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-sans text-4xl font-black tracking-tight text-blue-950 sm:text-5xl md:text-6xl">
              Who is this for?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-900/80 sm:mt-6 sm:text-xl">
              Anyone with skills, experience, or passion who wants to turn it
              into a structured, validated business idea.
            </p>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 via-indigo-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="font-sans text-base font-bold text-blue-950">
                        {useCase.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-blue-900/70">
                        {useCase.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-blue-200 bg-white p-10 shadow-lg shadow-blue-500/5">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-linear-to-br from-white/80 to-blue-50/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-lg shadow-blue-500/10 backdrop-blur-sm">
                Free to start
              </div>
              <div className="mt-4 font-sans text-3xl font-black text-blue-950 sm:text-4xl">
                Try it now
              </div>
              <p className="mt-4 text-base leading-relaxed text-blue-900/70">
                Generate your first validated business idea completely free. No
                credit card. No setup. Just results.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full rounded-full bg-linear-to-r from-blue-700 to-blue-900 text-base font-bold text-white shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/40"
                >
                  <Link href="/discover">
                    Generate your first idea for Free
                  </Link>
                </Button>
                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 w-full rounded-full border-2 border-blue-300 bg-white/80 text-base font-bold text-blue-900 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-white"
                >
                  <Link href="/pricing">View pricing tiers</Link>
                </Button> */}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-blue-200 pt-6 text-sm font-semibold text-blue-800">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-700 to-blue-900" />
                  <span>5 min setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-700 to-blue-900" />
                  <span>No credit card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

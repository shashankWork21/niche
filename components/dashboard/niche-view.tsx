"use client";

import { NicheOrCareerData } from "@/lib/types";
import { SquareArrowUpRight, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";

interface NicheViewProps {
  niches: NicheOrCareerData[];
}

export default function NicheView({ niches }: NicheViewProps) {
  return (
    <div className="mt-10 container mx-auto px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-linear-to-br from-blue-700 to-blue-900 rounded-lg">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Your Niches
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-14">
          Explore your personalized niche recommendations
        </p>
      </div>

      <div className="grid gap-4 md:gap-6">
        {niches.map((niche, index) => (
          <div
            key={niche.id}
            className="group relative p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-linear-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Number badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-linear-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {index + 1}
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    {niche.statement}
                  </p>
                </div>
              </div>

              <Link
                href={`/niche/${niche.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors group/link"
              >
                <SquareArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}

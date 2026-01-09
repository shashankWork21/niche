"use client";

import { NicheOrCareerData } from "@/lib/types";
import { SquareArrowUpRight, Compass, Star } from "lucide-react";
import Link from "next/link";

interface CareerDirectionViewProps {
  careerDirection: NicheOrCareerData;
}

export default function CareerDirectionView({
  careerDirection,
}: CareerDirectionViewProps) {
  return (
    <div className="mt-10 container mx-auto px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-linear-to-br from-blue-700 to-blue-900 rounded-lg">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Your Career Direction
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-14">
          Your personalized career path recommendation
        </p>
      </div>

      <div className="group relative p-8 border-2 border-blue-200 dark:border-blue-900 rounded-2xl bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Decorative gradient glow */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 transition-opacity blur-2xl -z-10" />

        {/* Star badge */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg">
          <Star className="w-6 h-6 text-white fill-white" />
        </div>

        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-linear-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl">
                <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                  {careerDirection.statement}
                </p>
              </div>
            </div>
          </div>

          <Link
            href={`/career-direction/${careerDirection.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-3 rounded-xl bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all group/link shadow-md hover:shadow-lg"
          >
            <SquareArrowUpRight className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-b-2xl" />
      </div>

      {/* Additional info card */}
      <div className="mt-6 p-4 rounded-xl bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border border-blue-100 dark:border-blue-900">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Click the icon to explore detailed insights about your career
          direction
        </p>
      </div>
    </div>
  );
}

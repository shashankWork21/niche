"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sparkles, ArrowRight, Target, TrendingUp } from "lucide-react";

export default function EmptyView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Icon with gradient background */}
        <div className="relative inline-flex">
          <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-800 rounded-full blur-2xl opacity-20 animate-pulse" />
          <div className="relative bg-linear-to-br from-blue-700 to-blue-900 p-6 rounded-full">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Discover Your Perfect Niche
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Unlock personalized insights and find the ideal path for your unique
            skills and passions
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Targeted Analysis
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get personalized recommendations based on your unique profile
            </p>
          </div>
          <div className="p-6 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800">
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Career Growth
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover opportunities aligned with your career aspirations
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/discover" className="inline-block mt-8">
          <Button
            size="lg"
            className="bg-linear-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-900 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Discover Your Niche
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

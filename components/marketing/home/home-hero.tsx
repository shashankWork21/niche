"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-blue-50/50 to-blue-50/40 px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      {/* Warm gradient mesh background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 opacity-40">
        <div className="h-full w-full rounded-full bg-linear-to-br from-blue-300 via-indigo-200 to-transparent blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute -right-32 top-1/3 h-100 w-100 opacity-30">
        <div className="h-full w-full rounded-full bg-linear-to-l from-slate-200 via-blue-100 to-transparent blur-[100px]" />
      </div>

      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="animate-in fade-in slide-in-from-bottom-4 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-linear-to-br from-white/80 to-blue-50/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-lg shadow-blue-500/10 backdrop-blur-sm duration-700 sm:px-5">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" strokeWidth={3} />
          <span className="whitespace-nowrap">
            AI-Powered Framework Analysis
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-in fade-in slide-in-from-bottom-8 mt-8 font-sans text-5xl font-black leading-[1.1] tracking-tight text-blue-950 duration-1000 sm:mt-10 sm:text-6xl md:text-7xl lg:text-8xl">
          Turn your skills into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              validated business ideas
            </span>
            <svg
              className="absolute -bottom-2 left-0 h-4 w-full text-blue-300"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6C100 2 200 10 298 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-in fade-in slide-in-from-bottom-12 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-blue-900/80 duration-1000 delay-200 sm:mt-10 sm:text-xl md:text-2xl">
          AI-powered frameworks transform your experience into{" "}
          <strong className="font-semibold text-blue-950">
            laser-focused business offers
          </strong>{" "}
          with market insights, niche positioning, and validated next steps.
        </p>

        {/* CTA buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-16 mt-10 flex flex-col items-center justify-center gap-4 duration-1000 delay-300 sm:mt-12 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group relative h-14 w-full overflow-hidden rounded-full bg-linear-to-r from-blue-700 to-blue-900 px-10 text-base font-bold text-white shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/40 sm:w-auto"
          >
            <Link
              href="/discover"
              className="flex items-center justify-center gap-2"
            >
              Generate your first idea for Free
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                strokeWidth={3}
              />
            </Link>
          </Button>
          {/* <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 w-full rounded-full border-2 border-blue-300 bg-white/80 px-8 text-base font-bold text-blue-900 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-white sm:w-auto"
          >
            <Link href="/pricing">See pricing tiers</Link>
          </Button> */}
        </div>

        {/* Trust indicators */}
        <div className="animate-in fade-in slide-in-from-bottom-20 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-blue-200/50 pt-8 text-sm font-semibold text-blue-800 duration-1000 delay-500 sm:mt-16 sm:gap-10 sm:pt-10">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-700 to-blue-900" />
            <span>Free tier to start</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-700 to-blue-900" />
            <span>7 validation frameworks</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-700 to-blue-900" />
            <span>30+ users validated</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-700 to-blue-900" />
            <span>One-time pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

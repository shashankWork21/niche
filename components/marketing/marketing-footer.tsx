"use client";

import Link from "next/link";
import { ArrowUpRight, Lightbulb, Target, TrendingUp } from "lucide-react";

export function MarketingFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50/30 to-slate-50/20">
      {/* Decorative texture overlay */}
      <div
        className="pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Top section - Brand statement with frameworks showcase */}
        <div className="grid gap-12 border-b border-blue-200/50 pb-12 lg:grid-cols-12 lg:gap-16 lg:pb-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="group mb-6 inline-flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-700 to-blue-900 shadow-lg shadow-blue-500/25 transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/40">
                <Lightbulb className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight text-blue-950">
                  Better Trajectory
                </div>
                <div className="text-xs font-medium tracking-wide text-blue-700">
                  Idea Generator & Validator
                </div>
              </div>
            </div>

            <p className="mb-6 max-w-md text-lg leading-relaxed text-blue-900/90">
              Transform your skills and experience into validated business ideas
              with AI-powered frameworks.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-3 text-sm text-blue-800">
                <Target
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                  strokeWidth={2.5}
                />
                <span>7 proven frameworks for idea validation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-blue-800">
                <TrendingUp
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                  strokeWidth={2.5}
                />
                <span>Free tier to start, pay only when ready</span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-12">
            {/* Product */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-950">
                Product
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/discover"
                  className="group flex items-center gap-1.5 text-sm font-medium text-blue-800 transition-colors hover:text-blue-950"
                >
                  <span>Discover your Niche</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>

                <Link
                  href="/login"
                  className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
                >
                  Sign in
                </Link>
              </nav>
            </div>

            {/* Frameworks */}
            {/* <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-950">
                Frameworks
              </h3>
              <nav className="flex flex-col gap-3">
                <div className="text-sm font-medium text-blue-700">
                  Size/Growth/Competition
                </div>
                <div className="text-sm font-medium text-blue-700">
                  B2C & B2B Analysis
                </div>
                <div className="text-sm font-medium text-blue-700">
                  MVP Strategy
                </div>
                <div className="text-sm font-medium text-blue-700">
                  Pricing Models
                </div>
              </nav>
            </div> */}

            {/* Legal & Support */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-950">
                Legal & Support
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/terms"
                  className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cancellation"
                  className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
                >
                  Cancellation
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
                >
                  Contact us
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright and meta links */}
        <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p className="text-sm font-medium text-blue-900">
              © {new Date().getFullYear()} Better Trajectory. All rights reserved.
            </p>
            <p className="text-xs text-blue-700">
              Part of the Better Trajectory ecosystem of micro-tools for founders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-950"
            >
              Profile
            </Link>
            <div className="h-4 w-px bg-blue-300" />
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Made in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

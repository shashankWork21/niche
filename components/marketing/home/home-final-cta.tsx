"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function HomeFinalCta() {
  return (
    <section className="mt-20 px-4 pb-20 sm:mt-24 sm:px-6 sm:pb-24 md:mt-32 md:pb-32">
      <div className="relative overflow-hidden rounded-3xl border-2 border-blue-300 bg-linear-to-br from-blue-900 via-blue-700 to-blue-900 p-10 text-center shadow-2xl shadow-blue-500/30 sm:p-14 md:p-20 lg:p-24">
        {/* Dramatic background effects */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[150px]" />
        </div>

        {/* Texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-xl">
            Ready to validate?
          </div>

          <h2 className="mx-auto mt-6 max-w-4xl font-sans text-4xl font-black leading-tight tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Stop guessing.
            <br />
            Start validating.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-50 sm:mt-8 sm:text-xl md:text-2xl">
            Join aspiring entrepreneurs who transformed vague ideas into
            validated business strategies with proven frameworks.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group relative h-16 w-full overflow-hidden rounded-full bg-white px-12 text-lg font-black text-blue-600 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-white/20 sm:w-auto"
            >
              <Link
                href="/register"
                className="flex items-center justify-center gap-3"
              >
                Generate your first idea — Free
                <ArrowRight
                  className="h-6 w-6 transition-transform group-hover:translate-x-1"
                  strokeWidth={3}
                />
              </Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 w-full rounded-full border-2 border-white/50 bg-white/10 px-10 text-lg font-black text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 sm:w-auto"
            >
              <Link href="/pricing">View pricing</Link>
            </Button> */}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-base font-bold text-white sm:mt-12 sm:gap-10">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
              <span>Free tier • No credit card</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
              <span>7 frameworks • 5 min setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

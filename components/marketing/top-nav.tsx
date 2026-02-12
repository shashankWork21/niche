"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function TopNav({
  primaryCtaHref = "/register",
  primaryCtaLabel = "Get started",
}: {
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-blue-700 to-blue-900">
            <div className="text-sm font-bold text-white">Niche</div>
          </div>
          <div className="text-sm font-semibold tracking-tight text-slate-900">
            <span className="hidden text-slate-500 sm:inline">
              by Better Trajectory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/about"
            className="font-semibold text-slate-600 transition-colors hover:text-slate-900"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="font-semibold text-slate-600 transition-colors hover:text-slate-900"
          >
            Pricing
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-blue-200 bg-white font-semibold text-slate-700 hover:border-blue-300 hover:bg-blue-50"
          >
            <Link href="/login">Sign in</Link>
          </Button>
          <Button
            asChild
            className="bg-linear-to-r from-blue-700 to-blue-900 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
          >
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
        </nav>

        {/* Mobile CTA + Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <Button
            asChild
            size="sm"
            className="bg-linear-to-r from-blue-700 to-blue-900 text-xs font-semibold text-white shadow-md shadow-blue-600/25"
          >
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-blue-50 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/about"
              className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

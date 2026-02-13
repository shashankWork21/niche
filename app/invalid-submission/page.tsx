import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InvalidSubmissionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-50 to-zinc-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-zinc-900 mb-3">
          Please Take This Seriously
        </h1>

        <p className="text-zinc-600 mb-6 leading-relaxed">
          We noticed that your responses don&apos;t appear to be genuine. This
          tool is designed to provide you with personalized insights based on
          thoughtful, honest answers.
        </p>

        <p className="text-zinc-600 mb-8 leading-relaxed">
          Please take a moment to reflect and provide sincere responses that
          will help us guide you toward the right direction.
        </p>

        <p className="text-zinc-600 mb-8 leading-relaxed font-medium">
          If you think this is a mistake, please email us at{" "}
          <span className="text-blue-700">support@smartalgorhythm.com</span>{" "}
          using your registered email and we&quot;ll look into it.
        </p>

        <Link href="/discover">
          <Button className="w-full h-12 text-base font-semibold">
            Try Again
          </Button>
        </Link>
      </div>
    </div>
  );
}

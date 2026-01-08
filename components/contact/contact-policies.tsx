import Link from "next/link";

export function ContactPolicies() {
  return (
    <div className="mt-8 text-sm text-slate-600">
      Looking for policies? See{" "}
      <Link
        href="/privacy"
        className="font-semibold text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
      >
        Privacy
      </Link>
      ,{" "}
      <Link
        href="/terms"
        className="font-semibold text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
      >
        Terms
      </Link>
      ,{" "}
      <Link
        href="/shipping"
        className="font-semibold text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
      >
        Shipping
      </Link>
      , and{" "}
      <Link
        href="/cancellation"
        className="font-semibold text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
      >
        Cancellation
      </Link>
      .
    </div>
  );
}

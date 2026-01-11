import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Policy | Find your Niche by Smart Algorhythm",
  description: "Shipping Policy for Find your Niche by Smart Algorhythm",
};

export default function ShippingPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <article className="prose prose-slate max-w-none">
        <h1>Shipping Policy</h1>
        <p className="text-sm text-blue-500">Last updated: January 1, 2026</p>

        <section>
          <h2>1. Digital Delivery Only</h2>
          <p>
            Find your Niche by Smart Algorhythm is a digital service. We do not ship any physical
            goods.
          </p>
        </section>

        <section>
          <h2>2. How You Receive Access</h2>
          <p>After a successful purchase:</p>
          <ul>
            <li>Your subscription is activated on your account</li>
            <li>
              You can access paid features by signing in at{" "}
              <Link href="/login" className="text-blue-700 hover:underline">
                /login
              </Link>
            </li>
            <li>
              A confirmation email may be sent to the email address associated
              with your account
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Delivery Time</h2>
          <p>
            Access is typically enabled immediately after payment confirmation.
            In some cases, it may take up to 24 hours due to payment
            verification or technical delays.
          </p>
        </section>

        <section>
          <h2>4. If You Don’t Get Access</h2>
          <p>
            If you believe your payment was successful but your plan did not
            activate, contact us and include your account email and payment
            details.
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@smartalgorhythm.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              support@smartalgorhythm.com
            </a>
          </p>
        </section>

        <section>
          <h2>5. Related Policies</h2>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-blue-700 hover:underline">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="text-blue-700 hover:underline">
              Privacy Policy
            </Link>
            <Link
              href="/cancellation"
              className="text-blue-700 hover:underline"
            >
              Cancellation &amp; Refund Policy
            </Link>
          </nav>
        </section>
      </article>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Find your Niche by Smart Algorhythm",
  description: "Refund Policy for Find your Niche by Smart Algorhythm",
};

export default function CancellationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <article className="prose prose-slate max-w-none">
        <h1>Refund Policy</h1>
        <p className="text-sm text-blue-500">Last updated: January 3, 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            Find your Niche by Smart Algorhythm offers one-time purchase products. We do not offer
            subscription-based services. All purchases are single transactions
            for specific products or services.
          </p>
        </section>

        <section>
          <h2>2. Our Products</h2>
          <p>We offer the following products:</p>
          <ul>
            <li>
              <strong>Free Idea Validation:</strong> No purchase required
            </li>
            <li>
              <strong>Market Validation Report:</strong> One-time purchase
            </li>
            <li>
              <strong>Business Roadmap:</strong> One-time purchase
            </li>
            <li>
              <strong>1:1 Strategy Call:</strong> One-time purchase
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Refund Policy</h2>

          <h3>3.1 Free Idea Validation</h3>
          <p>
            Our Free Idea Validation service is provided at no cost. No refund
            policy is applicable to this free service.
          </p>

          <h3>3.2 Paid Products (Market Validation, Business Roadmap, 1:1 Call)</h3>
          <p>
            For all paid products, we offer a <strong>3-day refund window</strong>.
            You may request a full refund if you are not satisfied with the
            result within 3 days of receiving your deliverable.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <p className="m-0 text-blue-800 dark:text-blue-200">
              <strong>Example:</strong> If you receive your Market Validation
              Report on January 5th, you have until January 8th (3 days) to
              request a refund if you are not satisfied with the results.
            </p>
          </div>

          <h3>3.3 Refund Eligibility</h3>
          <p>
            Refunds are available under the following conditions:
          </p>
          <ul>
            <li>
              Request is made within 3 days of receiving your deliverable
            </li>
            <li>
              You provide a clear explanation of why you are not satisfied with
              the result
            </li>
            <li>
              No refunds will be issued after the 3-day window has passed
            </li>
          </ul>

          <h3>3.4 How to Request a Refund</h3>
          <p>
            To request a refund, please email{" "}
            <a
              href="mailto:support@smartalgorhythm.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              support@smartalgorhythm.com
            </a>{" "}
            within 3 days of receiving your deliverable with:
          </p>
          <ul>
            <li>Your account email address</li>
            <li>Transaction ID or payment receipt</li>
            <li>Product/service purchased</li>
            <li>Reason for the refund request</li>
          </ul>
          <p>
            Refund requests are reviewed within 2-3 business days. If approved,
            refunds will be credited to the original payment method within 5-7
            business days.
          </p>
        </section>

        <section>
          <h2>4. Exceptions</h2>
          <p>
            We may also consider refund requests in the following exceptional
            circumstances, even outside the 3-day window:
          </p>
          <ul>
            <li>
              <strong>Service unavailability:</strong> Extended service outages
              that prevented delivery of your product
            </li>
            <li>
              <strong>Billing errors:</strong> Duplicate charges or incorrect
              billing amounts
            </li>
            <li>
              <strong>Technical issues:</strong> Problems on our end that
              prevented proper delivery of your purchased product
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Account Deletion</h2>
          <p>
            If you wish to delete your account entirely:
          </p>
          <ul>
            <li>Contact support to request account deletion</li>
            <li>
              Account deletion is permanent and all data will be removed within
              30 days
            </li>
            <li>Deleted accounts cannot be recovered</li>
            <li>
              Deleting your account does not automatically entitle you to a
              refund. Refund requests must be made separately within the 3-day
              window.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time.
            Changes will be effective immediately upon posting to this page. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Refund Policy, please contact
            us:
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

        <hr className="my-8" />

        <nav className="flex gap-4 text-sm">
          <Link href="/terms" className="text-blue-700 hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/privacy" className="text-blue-700 hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </article>
    </main>
  );
}

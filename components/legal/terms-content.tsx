import Link from "next/link";

interface TermsContentProps {
  showNavigation?: boolean;
  showTitle?: boolean;
}

export function TermsContent({
  showNavigation = true,
  showTitle = true,
}: TermsContentProps) {
  return (
    <>
      {showTitle && <h1>Terms and Conditions</h1>}
      <p className="text-sm text-blue-500">Last updated: January 1, 2026</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Find your Niche by Smart Algorhythm (&quot;the Service&quot;), you
          agree to be bound by these Terms and Conditions. If you do not agree
          to these terms, please do not use the Service.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Find your Niche by Smart Algorhythm provides tools and features to search, analyze, and
          extract publicly available information from Y Combinator&apos;s
          startup database. The Service is offered under various subscription
          plans, including a free tier with limited functionality.
        </p>
      </section>

      <section>
        <h2>3. User Accounts</h2>
        <p>
          To access certain features, you must create an account. You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities under your account</li>
          <li>Notify us immediately of any unauthorized access</li>
        </ul>
      </section>

      <section>
        <h2>4. Subscription and Payments</h2>
        <p>
          Paid subscriptions are billed in advance on a recurring basis (monthly
          or annually). By subscribing to a paid plan, you authorize us to
          charge your designated payment method through our payment processor,
          Razorpay.
        </p>
        <p>
          All fees are exclusive of applicable taxes, which will be added where
          required by law.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon the intellectual property rights of others</li>
          <li>
            Attempt to gain unauthorized access to the Service or its systems
          </li>
          <li>
            Resell, redistribute, or sublicense the Service without
            authorization
          </li>
          <li>Use automated tools to abuse or overload the Service</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          The Service, including its original content, features, and
          functionality, is owned by us and is protected by international
          copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section>
        <h2>7. Data and Privacy</h2>
        <p>
          Your use of the Service is also governed by our{" "}
          <Link
            href="/privacy"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </Link>
          , which describes how we collect, use, and protect your personal
          information.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the Service, including but not limited to
          loss of profits, data, or business opportunities.
        </p>
      </section>

      <section>
        <h2>9. Disclaimer of Warranties</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, either express or implied. We do not
          guarantee that the Service will be uninterrupted, secure, or
          error-free.
        </p>
      </section>

      <section>
        <h2>10. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account at any time
          for violation of these Terms or for any other reason at our sole
          discretion. Upon termination, your right to use the Service will cease
          immediately.
        </p>
      </section>

      <section>
        <h2>11. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. We will notify users of
          material changes via email or through the Service. Your continued use
          of the Service after changes constitutes acceptance of the modified
          Terms.
        </p>
      </section>

      <section>
        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India, without regard to conflict of law principles.
        </p>
      </section>

      <section>
        <h2>13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@smartalgorhythm.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            support@smartalgorhythm.com
          </a>
          .
        </p>
      </section>

      {showNavigation && (
        <>
          <hr className="my-8" />
          <nav className="flex gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cancellation"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Cancellation Policy
            </Link>
          </nav>
        </>
      )}
    </>
  );
}

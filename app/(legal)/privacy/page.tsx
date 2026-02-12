import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Find your Niche by Better Trajectory",
  description: "Privacy Policy for Find your Niche by Better Trajectory",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <article className="prose prose-slate max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-blue-500">Last updated: January 1, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            At Find your Niche by Better Trajectory, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our Service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Personal Information</h3>
          <p>When you create an account or use our Service, we may collect:</p>
          <ul>
            <li>Name (first and last name)</li>
            <li>Email address</li>
            <li>Password (stored in encrypted form)</li>
            <li>Billing information (processed securely via Razorpay)</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>
            We automatically collect certain information when you use the
            Service:
          </p>
          <ul>
            <li>Search queries and history</li>
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Access times and dates</li>
          </ul>

          <h3>2.3 Cookies and Tracking</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience, analyze usage patterns, and maintain session security.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative notifications and updates</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Monitor and analyze usage trends</li>
            <li>Detect, prevent, and address technical issues or fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> With third-party vendors who
              perform services on our behalf (e.g., Razorpay for payment
              processing)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or governmental authority
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets
            </li>
            <li>
              <strong>Protection:</strong> To protect our rights, privacy,
              safety, or property
            </li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information, including:
          </p>
          <ul>
            <li>Encryption of passwords using secure hashing algorithms</li>
            <li>HTTPS encryption for all data transmission</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication measures</li>
          </ul>
          <p>
            However, no method of transmission over the Internet is 100% secure.
            We cannot guarantee absolute security of your data.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is
            active or as needed to provide the Service. We may also retain
            certain information to comply with legal obligations, resolve
            disputes, and enforce agreements.
          </p>
          <p>
            Upon account deletion, we will delete or anonymize your personal
            information within 30 days, except where retention is required by
            law.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal data</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability (receive your data in a structured format)</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            provided below.
          </p>
        </section>

        <section>
          <h2>8. Third-Party Services</h2>
          <p>
            Our Service may contain links to third-party websites or integrate
            with third-party services. We are not responsible for the privacy
            practices of these external sites. We encourage you to review their
            privacy policies.
          </p>

          <h3>Payment Processing</h3>
          <p>
            We use Razorpay as our payment processor. Your payment information
            is collected and processed directly by Razorpay in accordance with
            their{" "}
            <a
              href="https://razorpay.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children. If we
            become aware that we have collected data from a child, we will take
            steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries
            other than your country of residence. We ensure appropriate
            safeguards are in place to protect your data in accordance with this
            Privacy Policy.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page
            and updating the &quot;Last updated&quot; date. Your continued use
            of the Service after changes constitutes acceptance of the updated
            policy.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@bettertrajectory.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              support@bettertrajectory.com
            </a>
          </p>
        </section>

        <hr className="my-8" />

        <nav className="flex gap-4 text-sm">
          <Link href="/terms" className="text-blue-700 hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/cancellation" className="text-blue-700 hover:underline">
            Cancellation Policy
          </Link>
        </nav>
      </article>
    </main>
  );
}

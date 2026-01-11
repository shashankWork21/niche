import { Metadata } from "next";
import { TermsContent } from "@/components/legal/terms-content";

export const metadata: Metadata = {
  title: "Terms and Conditions | Find your Niche by Smart Algorhythm",
  description: "Terms and Conditions for using Find your Niche by Smart Algorhythm",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <article className="prose prose-slate max-w-none">
        <TermsContent />
      </article>
    </main>
  );
}

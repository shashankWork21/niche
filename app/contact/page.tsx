import type { Metadata } from "next";
import { TopNav } from "@/components/marketing/top-nav";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { ContactForm } from "../../components/contact/contact-form";
import { ContactHero } from "../../components/contact/contact-hero";
import { ContactInfoPanel } from "../../components/contact/contact-info-panel";
import { ContactPolicies } from "../../components/contact/contact-policies";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <TopNav />
        <main className="relative isolate">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-1/4 h-130 w-130 rounded-full bg-blue-400/15 blur-[120px]" />
            <div className="absolute bottom-10 left-1/4 h-105 w-105 rounded-full bg-sky-400/15 blur-[110px]" />
          </div>

          <ContactHero />

          <section className="relative px-6 pb-16">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-950">
                    Send us a Message
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    For faster help, include your account email and what you
                    were trying to do.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                  <ContactPolicies />
                </div>
              </div>

              <ContactInfoPanel />
            </div>
          </section>
        </main>
      </div>
      <MarketingFooter />
    </>
  );
}

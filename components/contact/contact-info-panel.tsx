import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactInfoCard } from "./contact-info-card";

export function ContactInfoPanel() {
  return (
    <aside className="lg:col-span-5">
      <div className="grid gap-6">
        <ContactInfoCard
          title="Email Us"
          subtitle="For general inquiries"
          icon={<Mail className="h-5 w-5" />}
          iconClassName="bg-blue-50 text-blue-700"
        >
          <a
            href="mailto:support@smartalgorhythm.com"
            className="inline-block font-semibold text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
          >
            support@smartalgorhythm.com
          </a>
        </ContactInfoCard>

        <ContactInfoCard
          title="Call Us"
          subtitle="Mon–Fri, 9AM–6PM IST"
          icon={<Phone className="h-5 w-5" />}
        >
          <a
            href="tel:+917349172510"
            className="inline-block font-semibold text-slate-950 hover:text-slate-800 hover:underline underline-offset-2"
          >
            +91-7349172510
          </a>
        </ContactInfoCard>

        <ContactInfoCard
          title="Visit Us"
          subtitle="By appointment only"
          icon={<MapPin className="h-5 w-5" />}
        >
          <div className="space-y-1 text-sm text-slate-700">
            <div>Icosihenagon Technologies LLP</div>
            <div>943, 16th cross, 1st stage</div>
            <div>Kumaraswamy Layout, Bengaluru</div>
            <div>Karnataka 560078</div>
          </div>
        </ContactInfoCard>

        <ContactInfoCard title="Business Hours" icon={<Clock className="h-5 w-5" />}>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between text-slate-700">
              <span>Monday - Friday</span>
              <span className="text-slate-900">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center justify-between text-slate-700">
              <span>Saturday</span>
              <span className="text-slate-900">10:00 AM - 2:00 PM</span>
            </div>
            <div className="flex items-center justify-between text-slate-700">
              <span>Sunday</span>
              <span className="font-semibold text-rose-600">Closed</span>
            </div>
          </div>
        </ContactInfoCard>
      </div>
    </aside>
  );
}

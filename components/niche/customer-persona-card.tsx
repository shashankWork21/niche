"use client";

import {
  CompanySize,
  CustomerPersona,
  EducationLevel,
  TechSavviness,
} from "@/app/generated/prisma/client";
import { Card } from "@/components/ui/card";
import { companySizeToDisplay, enumToDisplay } from "@/lib/utils/enum-display";
import { Users, Briefcase, TrendingUp, Heart, AlertCircle } from "lucide-react";

interface CustomerPersonaCardProps {
  persona: CustomerPersona;
}

export function CustomerPersonaCard({ persona }: CustomerPersonaCardProps) {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Your Ideal Customer
      </h2>

      <Card className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <InfoSection
              icon={<Users className="w-5 h-5 text-blue-600" />}
              title="Demographics"
              items={[
                `Age: ${persona.minAge}-${persona.maxAge}`,
                `Location: ${persona.location}`,
                `Education: ${enumToDisplay(
                  persona.educationLevel as EducationLevel
                )}`,
                `Income: ₹${(persona.annualIncome / 100000).toFixed(
                  1
                )}L annually`,
              ]}
            />

            <InfoSection
              icon={<Briefcase className="w-5 h-5 text-emerald-600" />}
              title="Professional Profile"
              items={[
                `Roles: ${persona.jobTitles.join(", ")}`,
                `Company Size: ${companySizeToDisplay(
                  persona.companySize as CompanySize
                )}`,
                `Tech Savviness: ${enumToDisplay(
                  persona.techSavviness as TechSavviness
                )}`,
              ]}
            />
          </div>

          <div className="space-y-6">
            <InfoSection
              icon={<TrendingUp className="w-5 h-5 text-purple-600" />}
              title="Goals & Aspirations"
              items={persona.goals}
            />

            <InfoSection
              icon={<AlertCircle className="w-5 h-5 text-orange-600" />}
              title="Key Struggles"
              items={persona.struggles}
            />
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200">
          <InfoSection
            icon={<Heart className="w-5 h-5 text-red-600" />}
            title="Interests"
            items={persona.interests}
            horizontal
          />
        </div>
      </Card>
    </section>
  );
}

function InfoSection({
  icon,
  title,
  items,
  horizontal = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  horizontal?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="font-semibold text-zinc-900">{title}</h3>
      </div>
      <ul className={horizontal ? "flex flex-wrap gap-2" : "space-y-2"}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={
              horizontal
                ? "px-3 py-1 bg-zinc-100 rounded-full text-sm text-zinc-700"
                : "text-sm text-zinc-600 leading-relaxed"
            }
          >
            {!horizontal && "• "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

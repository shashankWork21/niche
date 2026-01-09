"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, TrendingUp, AlertCircle, Heart } from "lucide-react";
import { CustomerPersona } from "@/app/generated/prisma/client";

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
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-zinc-900">Demographics</h3>
            </div>
            <div className="space-y-2 text-sm text-zinc-600">
              <p>
                Age: {persona.minAge}-{persona.maxAge}
              </p>
              <p>Location: {persona.location}</p>
              <p>Education: {persona.educationLevel}</p>
              <p>
                Income: ₹{(persona.annualIncome / 100000).toFixed(1)}L annually
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold text-zinc-900">
                Professional Profile
              </h3>
            </div>
            <div className="space-y-2 text-sm text-zinc-600">
              <p>
                Roles:{" "}
                {persona.jobTitles
                  .map((title) =>
                    title
                      .split("_")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")
                  )
                  .join(", ")}
              </p>
              <p>Company Size: {persona.companySize}</p>
              <p>Tech Savviness: {persona.techSavviness}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-zinc-900">
                Goals & Aspirations
              </h3>
            </div>
            <ul className="space-y-2">
              {persona.goals.map((goal: string, idx: number) => (
                <li key={idx} className="text-sm text-zinc-600">
                  • {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-zinc-900">Key Struggles</h3>
            </div>
            <ul className="space-y-2">
              {persona.struggles.map((struggle: string, idx: number) => (
                <li key={idx} className="text-sm text-zinc-600">
                  • {struggle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-zinc-900">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {persona.interests.map((interest: string, idx: number) => (
              <Badge key={idx} variant="outline">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

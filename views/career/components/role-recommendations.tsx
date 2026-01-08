"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, MapPin, Clock } from "lucide-react";
import { RoleRecommendation } from "@/app/generated/prisma/client";

interface RoleRecommendationsProps {
  roles: RoleRecommendation[];
}

export function RoleRecommendations({ roles }: RoleRecommendationsProps) {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Role Recommendations
      </h2>

      <div className="space-y-6">
        {roles.map((role, idx) => (
          <Card
            key={idx}
            className="p-6 md:p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-zinc-600">{role.industry}</p>
              </div>

              <p className="text-base text-zinc-700 leading-relaxed border-l-4 border-blue-500 pl-4">
                {role.whyFit}
              </p>

              <div className="flex flex-wrap gap-3">
                {role.salaryRange && (
                  <Badge variant="outline" className="gap-1">
                    <DollarSign className="w-3 h-3" />
                    {role.salaryRange}
                  </Badge>
                )}
                {role.remoteViability && (
                  <Badge variant="outline" className="gap-1">
                    <MapPin className="w-3 h-3" />
                    {role.remoteViability.replace("_", " ")}
                  </Badge>
                )}
                {role.estimatedPrepTime && (
                  <Badge variant="outline" className="gap-1">
                    <Clock className="w-3 h-3" />
                    {role.estimatedPrepTime}
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-200">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-700 mb-3">
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.requiredSkills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {role.skillGaps.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-700 mb-3">
                      Skill Gaps to Bridge
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skillGaps.map((skill, idx) => (
                        <Badge
                          key={idx}
                          className="bg-orange-50 text-orange-700 border-orange-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

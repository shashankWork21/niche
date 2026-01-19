"use client";

import { ProtectedRoute } from "@/components/auth/protected-route";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrayDisplay } from "@/components/admin/user-persona/array-display";
import { TextDisplay } from "@/components/admin/user-persona/text-display";
import type { UserPersonaWithDetails } from "@/db/queries/user-persona/get-user-persona-with-details";
import Link from "next/link";
import { UserGoal } from "@/app/generated/prisma/enums";

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AdminUserPersonaView({
  persona,
}: {
  persona: UserPersonaWithDetails;
}) {
  return (
    <ProtectedRoute>
      <div className="mx-auto w-full max-w-6xl space-y-6 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="/admin/users"
              className="text-sm text-blue-600 hover:text-blue-800 mb-2 inline-block"
            >
              ← Back to Users
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              User Persona #{persona.id}
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Created on {formatDate(persona.createdAt)}
            </p>
          </div>
          <Badge
            className={
              persona.goal === UserGoal.BUSINESS
                ? "bg-green-700 text-white text-sm px-3 py-1"
                : "bg-purple-700 text-white text-sm px-3 py-1"
            }
          >
            {persona.goal === UserGoal.BUSINESS ? "Business" : "Career"}
          </Badge>
        </div>

        {/* User Info */}
        {persona.user && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              User Information
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-slate-700">Name:</span>{" "}
                <span className="text-slate-600">
                  {persona.user.firstName} {persona.user.lastName}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Email:</span>{" "}
                <span className="text-slate-600">{persona.user.email}</span>
              </div>
            </div>
          </div>
        )}

        {/* Persona Inputs */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Persona Inputs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArrayDisplay
              label="Lose Track of Time"
              items={persona.loseTrackOfTimeAreas}
            />
            <ArrayDisplay
              label="Loved Doing at Age 10"
              items={persona.lovedDoingAt10}
            />
            <ArrayDisplay
              label="Issues Spoken Up About"
              items={persona.issuesSpokenUpAbout}
            />
            <ArrayDisplay
              label="Naturally Curious About"
              items={persona.naturallyCuriousAbout}
            />
            <ArrayDisplay label="Feels Like Play" items={persona.feelsLikePlay} />
            <ArrayDisplay
              label="Continuously Learning About"
              items={persona.continuouslyLearningAbout}
            />
            <ArrayDisplay
              label="Helped Others With"
              items={persona.helpedOthersWith}
            />
            <ArrayDisplay
              label="Areas Needed Help"
              items={persona.areasNeededHelp}
            />
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextDisplay
              label="Wish More People Understood"
              text={persona.wishMoreUnderstood}
            />
            <TextDisplay label="Here to Do" text={persona.hereToDo} />
            <div className="md:col-span-2">
              <TextDisplay label="Turning Point" text={persona.turningPoint} />
            </div>
            <ArrayDisplay label="Unspoken Rules" items={persona.unspokenRules} />
          </div>
        </div>

        {/* Extracted Values */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Extracted Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArrayDisplay label="Skills" items={persona.skills} />
            <ArrayDisplay label="Interests" items={persona.interests} />
            <ArrayDisplay label="Core Values" items={persona.coreValues} />
            <TextDisplay label="Driving Belief" text={persona.drivingBelief} />
          </div>
        </div>

        {/* Niches */}
        {persona.niches && persona.niches.length > 0 && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Generated Niches ({persona.niches.length})
            </h2>
            <div className="space-y-4">
              {persona.niches.map((niche, idx) => (
                <div key={niche.id} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">
                      Niche #{idx + 1}
                    </h3>
                    <Link
                      href={`/niche/${niche.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 underline"
                    >
                      View Full Details →
                    </Link>
                  </div>
                  <p className="text-sm text-slate-700 mb-2 font-medium">
                    {niche.statement}
                  </p>
                  <p className="text-xs text-slate-500">
                    Created: {formatDate(niche.createdAt)}
                  </p>
                  {niche.nicheSolutions && niche.nicheSolutions.length > 0 && (
                    <p className="text-xs text-slate-600 mt-2">
                      Solutions: {niche.nicheSolutions.length}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Career Direction */}
        {persona.careerDirection && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Career Direction
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900">
                    Career Statement
                  </h3>
                  <Link
                    href={`/career-direction/${persona.careerDirection.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    View Full Details →
                  </Link>
                </div>
                <p className="text-sm text-slate-700 mb-2 font-medium">
                  {persona.careerDirection.statement}
                </p>
                <p className="text-xs text-slate-500">
                  Created: {formatDate(persona.careerDirection.createdAt)}
                </p>
                {persona.careerDirection.roleRecommendations &&
                  persona.careerDirection.roleRecommendations.length > 0 && (
                    <p className="text-xs text-slate-600 mt-2">
                      Role Recommendations:{" "}
                      {persona.careerDirection.roleRecommendations.length}
                    </p>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}

"use client";

import { useFormAction } from "@/hooks/form/use-from-action";
import { Button } from "../ui/button";
import { getNicheFromPersona } from "@/actions/niche/get-niche-from-persona";
import { useRouter } from "next/navigation";
import { RegistrationLoading } from "../auth/registration-loading";
import { useCallback, useEffect } from "react";
import { FormState } from "@/lib/types";
import { Wand2, Sparkles, Zap, ArrowRight } from "lucide-react";

interface GenerateCareerDirectionFormProps {
  userPersonaId: number;
}

export default function GenerateForm({
  userPersonaId,
}: GenerateCareerDirectionFormProps) {
  const router = useRouter();

  const { formState, handleSubmit, isSubmitting } = useFormAction(
    getNicheFromPersona.bind(null, userPersonaId)
  );

  const handleSuccess = useCallback(
    (formState: FormState) => {
      if (formState?.redirectTo) {
        router.push(formState.redirectTo);
      }
    },
    [router]
  );

  useEffect(() => {
    if (formState?.success) {
      handleSuccess(formState);
    } else if (formState.redirectTo) {
      router.push(formState.redirectTo);
    }
  }, [formState, handleSuccess, router]);

  const showLoading = isSubmitting;

  if (showLoading) {
    return <RegistrationLoading isVisible={showLoading} />;
  }

  return (
    <div className="mt-10 container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="relative inline-flex mb-4">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-800 rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative p-4 bg-linear-to-br from-blue-700 to-blue-900 rounded-full">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-4xl font-bold bg-linear-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-3">
            Ready to Discover?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Generate your personalized niche and career direction insights based on your unique profile
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 text-center">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              AI-Powered
            </p>
          </div>
          <div className="p-4 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 text-center">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Instant Results
            </p>
          </div>
          <div className="p-4 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 text-center">
            <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Personalized
            </p>
          </div>
        </div>

        {/* Generate Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-700 to-blue-900 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="relative w-full text-lg font-semibold bg-linear-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-900 text-white py-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <Wand2 className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Generate My Results
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
            This usually takes just a few seconds
          </p>
        </form>
      </div>
    </div>
  );
}

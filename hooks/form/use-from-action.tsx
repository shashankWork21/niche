"use client";

import { FormState } from "@/lib/types";
import { startTransition, useActionState, useEffect, useState } from "react";

export function useFormAction(
  formAction: (formState: FormState, formData: FormData) => Promise<FormState>,
  onSuccess: () => void = () => {}
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, action] = useActionState(formAction, {
    success: false,
    errors: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    startTransition(() => {
      action(formData);
      setIsSubmitting(false);
    });
  }

  useEffect(() => {
    if (formState.success && onSuccess) {
      onSuccess();
    }
  }, [formState, onSuccess]);

  return { formState, isSubmitting, handleSubmit };
}

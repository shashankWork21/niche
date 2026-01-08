"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  submitContactMessage,
  type ContactActionState,
} from "@/actions/contact";
import { ContactTextareaField, ContactTextField } from "./contact-form-fields";

const initialState: ContactActionState = { status: "idle" };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
    initialState
  );

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactTextField
          id="firstName"
          label="First Name"
          required
          placeholder="John"
        />
        <ContactTextField
          id="lastName"
          label="Last Name"
          required
          placeholder="Doe"
        />
      </div>

      <ContactTextField
        id="email"
        label="Email Address"
        type="email"
        required
        placeholder="john@example.com"
      />

      <ContactTextField
        id="phone"
        label="Phone"
        type="tel"
        required
        placeholder="+91-7349172510"
      />

      <ContactTextareaField
        id="message"
        label="Message"
        required
        placeholder="Tell us more about your needs..."
      />

      {state.status === "success" ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thanks — we received your message.
        </div>
      ) : null}
      {state.status === "error" ? (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {state.message}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 w-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

export function ContactTextField({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 border-blue-100 bg-white text-slate-950 placeholder:text-slate-400 focus-visible:ring-blue-200"
      />
    </div>
  );
}

type TextareaProps = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export function ContactTextareaField({
  id,
  label,
  placeholder,
  required,
}: TextareaProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <Textarea
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="min-h-32 border-blue-100 bg-white text-slate-950 placeholder:text-slate-400 focus-visible:ring-blue-200"
      />
    </div>
  );
}

import type { ReactNode } from "react";

type ContactInfoCardProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
  iconClassName?: string;
};

export function ContactInfoCard({
  icon,
  title,
  subtitle,
  children,
  iconClassName,
}: ContactInfoCardProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className={[
            "flex h-10 w-10 items-center justify-center rounded-xl",
            iconClassName ?? "bg-slate-100 text-slate-700",
          ].join(" ")}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-lg font-semibold text-slate-950">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-sm text-slate-600">{subtitle}</div>
          ) : null}
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function TextDisplay({
  label,
  text,
}: {
  label: string;
  text: string | null;
}) {
  if (!text) return null;

  return (
    <div>
      <h4 className="font-semibold text-sm text-slate-700 mb-2">{label}</h4>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

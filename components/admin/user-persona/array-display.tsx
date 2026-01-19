export function ArrayDisplay({
  label,
  items,
}: {
  label: string;
  items: string[] | null;
}) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h4 className="font-semibold text-sm text-slate-700 mb-2">{label}</h4>
      <ul className="list-disc list-inside space-y-1 text-slate-600">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

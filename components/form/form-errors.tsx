interface FormErrorsProps {
  property: {
    errors: string[];
  };
}

export function FormErrors({ property }: FormErrorsProps) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-600">
      {property.errors.map((error: string, index: number) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
}

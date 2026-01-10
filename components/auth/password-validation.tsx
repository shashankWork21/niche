import { Check, X } from "lucide-react";

// Validation Item Component
interface ValidationItemProps {
  isValid: boolean;
  text: string;
}

export default function ValidationItem({ isValid, text }: ValidationItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div
        className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
          isValid ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        {isValid ? (
          <Check size={12} strokeWidth={3} />
        ) : (
          <X size={12} strokeWidth={2} />
        )}
      </div>
      <span
        className={`transition-colors ${
          isValid ? "text-green-600 font-medium" : "text-gray-600"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

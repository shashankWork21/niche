"use client";

import { useEffect, useState } from "react";

interface RegistrationLoadingProps {
  isVisible: boolean;
  messages?: string[];
}

const defaultMessages = [
  "Analyzing your interests...",
  "Mapping your skills...",
  "Figuring out market demands...",
  "Finding your perfect niche...",
];

export function RegistrationLoading({
  isVisible,
  messages = defaultMessages,
}: RegistrationLoadingProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, messages.length]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-linear-to-br from-blue-700 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-24 h-24 mx-auto border-8 border-blue-200 border-t-white rounded-full animate-spin"></div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white animate-pulse">
            {messages[currentMessageIndex]}
          </h2>
          <p className="text-blue-200 text-lg">
            Please wait while we create your personalized results
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          {messages.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentMessageIndex
                  ? "bg-white scale-125"
                  : "bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

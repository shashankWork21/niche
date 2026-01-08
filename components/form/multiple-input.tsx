"use client";

import { Minus, Plus } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface MultipleInputsProps {
  label: string;
  count: number[] | string[];
  name: string;
  inputPlaceholder?: string;
  handleAddInput?: (field: string) => void;
  handleRemoveInput?: (field: string, index: number) => void;
  error?: string;
  onChange?: (field: string, index: number, value: string) => void;
  values?: string[];
}

export default function MultipleInputs({
  label,
  count,
  name,
  inputPlaceholder,
  handleAddInput,
  handleRemoveInput,
  error,
  onChange,
  values,
}: MultipleInputsProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full my-4">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>

      {count.map((item, index) => {
        return (
          <div key={index} className="flex items-center w-full">
            <Input
              name={name}
              placeholder={
                inputPlaceholder
                  ? `${inputPlaceholder} ${index + 1}`
                  : `${name} ${index + 1}`
              }
              className={`bg-white text-black ${error ? "border-red-500" : ""}`}
              value={values ? values[index] : ""}
              onChange={(e) =>
                onChange && onChange(name, index, e.target.value)
              }
            />
            {count.length > 1 && handleRemoveInput && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => handleRemoveInput(name, index)}
                className="text-red-800 hover:text-red-700 cursor-pointer hover:bg-red-100/50"
              >
                <Minus />
              </Button>
            )}
          </div>
        );
      })}
      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
      {handleAddInput && (
        <Button
          type="button"
          variant="ghost"
          onClick={() => handleAddInput(name)}
          className="text-blue-800 hover:text-blue-700 cursor-pointer hover:bg-blue-100/50"
        >
          <Plus className="h-8 w-8" /> Add{" "}
          {inputPlaceholder ? inputPlaceholder : name}
        </Button>
      )}
    </div>
  );
}

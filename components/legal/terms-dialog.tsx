"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TermsContent } from "./terms-content";

interface TermsDialogProps {
  onAccept: () => void;
  trigger?: React.ReactNode;
}

export function TermsDialog({ onAccept, trigger }: TermsDialogProps) {
  const [open, setOpen] = useState(false);

  const handleAccept = () => {
    onAccept();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button
            type="button"
            className="text-blue-600 hover:underline dark:text-blue-400 cursor-pointer"
          >
            Terms and Conditions
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-4xl! overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>
        <div className="prose prose-blue prose-sm dark:prose-invert max-w-none overflow-y-auto flex-1 pr-2">
          <TermsContent showNavigation={false} showTitle={false} />
        </div>
        <DialogFooter className="mt-4 gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button onClick={handleAccept} className="cursor-pointer">
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

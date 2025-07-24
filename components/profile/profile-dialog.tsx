"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CoupleProfile } from "@/lib/hooks/use-profile";

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  coupleNames: CoupleProfile;
  setCoupleNames: (names: CoupleProfile) => void;
  onSave: () => void;
}

export function ProfileDialog({
  open,
  onOpenChange,
  coupleNames,
  setCoupleNames,
  onSave,
}: ProfileDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Couple Profile
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-bold text-gray-700">
              Partner 1 Name
            </label>
            <Input
              value={coupleNames.partner1}
              onChange={(e) =>
                setCoupleNames({
                  ...coupleNames,
                  partner1: e.target.value,
                })
              }
              placeholder="Enter first name"
              className="rounded-lg mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">
              Partner 2 Name
            </label>
            <Input
              value={coupleNames.partner2}
              onChange={(e) =>
                setCoupleNames({
                  ...coupleNames,
                  partner2: e.target.value,
                })
              }
              placeholder="Enter second name"
              className="rounded-lg mt-1"
            />
          </div>
          <Button
            onClick={onSave}
            className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
          >
            Save Profile
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

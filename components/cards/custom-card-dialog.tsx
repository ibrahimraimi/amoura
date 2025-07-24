"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getThemeIconName } from "@/lib/utils/theme-utils";
import * as LucideIcons from "lucide-react";

export type CustomCardFormData = {
  category: string;
  level: string;
  prompt: string;
  theme: string;
};

interface CustomCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customCardForm: CustomCardFormData;
  setCustomCardForm: (form: CustomCardFormData) => void;
  onAddCard: () => void;
  categories: string[];
  levels: string[];
  themes: string[];
}

export function CustomCardDialog({
  open,
  onOpenChange,
  customCardForm,
  setCustomCardForm,
  onAddCard,
  categories,
  levels,
  themes,
}: CustomCardDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Create Custom Card
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-bold text-gray-700">
                Category
              </label>
              <Select
                value={customCardForm.category}
                onValueChange={(value) =>
                  setCustomCardForm({ ...customCardForm, category: value })
                }
              >
                <SelectTrigger className="rounded-lg mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {categories
                    .filter((c) => c !== "All")
                    .map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700">Level</label>
              <Select
                value={customCardForm.level}
                onValueChange={(value) =>
                  setCustomCardForm({ ...customCardForm, level: value })
                }
              >
                <SelectTrigger className="rounded-lg mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {levels
                    .filter((l) => l !== "All")
                    .map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Theme</label>
            <Select
              value={customCardForm.theme}
              onValueChange={(value) =>
                setCustomCardForm({ ...customCardForm, theme: value })
              }
            >
              <SelectTrigger className="rounded-lg mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                {themes
                  .filter((t) => t !== "All")
                  .map((theme) => (
                    <SelectItem key={theme} value={theme}>
                      <div className="flex items-center gap-2">
                        {(() => {
                          const IconComponent =
                            LucideIcons[
                              getThemeIconName(
                                theme
                              ) as keyof typeof LucideIcons
                            ];
                          return IconComponent ? (
                            <IconComponent className="w-4 h-4" />
                          ) : null;
                        })()}
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </div>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Prompt</label>
            <Textarea
              value={customCardForm.prompt}
              onChange={(e) =>
                setCustomCardForm({
                  ...customCardForm,
                  prompt: e.target.value,
                })
              }
              placeholder="Write your custom prompt..."
              rows={3}
              className="rounded-lg mt-1"
            />
          </div>
          <Button
            onClick={onAddCard}
            className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
            disabled={!customCardForm.prompt.trim()}
          >
            Add Custom Card
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

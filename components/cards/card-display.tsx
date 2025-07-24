"use client";

import { useState } from "react";
import { Heart, Star, Share2, Mic, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/lib/types";

interface CardDisplayProps {
  card: Card;
  favoriteCards: Set<number>;
  photoCompletions: Set<number>;
  timerActive: boolean;
  timeLeft: number;
  selectedTimer: number;
  onToggleFavorite: (cardId: number) => void;
  onCompletePhotoChallenge: (cardId: number) => void;
  onStartTimer: (seconds: number) => void;
  personalizePrompt: (prompt: string) => string;
  getCategoryColor: (category: string) => string;
  getLevelColor: (level: string) => string;
  getThemeIcon: (theme: string) => React.ReactNode;
}

export default function CardDisplay({
  card,
  favoriteCards,
  photoCompletions,
  timerActive,
  timeLeft,
  selectedTimer,
  onToggleFavorite,
  onCompletePhotoChallenge,
  onStartTimer,
  personalizePrompt,
  getCategoryColor,
  getLevelColor,
  getThemeIcon,
}: CardDisplayProps) {
  if (!card) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-500 text-xl mb-6">
            No cards available with current filters
          </p>
          <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-8 py-3">
            Reset Filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-8 lg:p-12">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-3 flex-wrap">
            <Badge
              className={`${getCategoryColor(
                card.category
              )} rounded-full px-4 py-2 font-medium`}
            >
              {card.category}
            </Badge>
            <Badge
              className={`${getLevelColor(
                card.level
              )} rounded-full px-4 py-2 font-medium`}
            >
              {card.level}
            </Badge>
            {card.theme !== "general" && (
              <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 rounded-full px-4 py-2 font-medium flex items-center gap-2">
                {getThemeIcon(card.theme)}
                {card.theme}
              </Badge>
            )}
            {card.isCustom && (
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 rounded-full px-4 py-2 font-medium">
                Custom
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleFavorite(card.id)}
              className="p-3 rounded-lg hover:bg-yellow-50"
            >
              <Star
                className={`w-6 h-6 ${
                  favoriteCards.has(card.id)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400 hover:text-yellow-400"
                }`}
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 rounded-lg hover:bg-blue-50"
            >
              <Share2 className="w-6 h-6 text-gray-400 hover:text-blue-500" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 rounded-lg hover:bg-green-50"
            >
              <Mic className="w-6 h-6 text-gray-400 hover:text-green-500" />
            </Button>
          </div>
        </div>

        <div className="text-center mb-10">
          <p className="text-2xl lg:text-3xl leading-relaxed text-gray-800 font-medium">
            {personalizePrompt(card.prompt)}
          </p>
        </div>

        {/* Photo Challenge Button */}
        {card.category === "Photo" && (
          <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Photo Challenge</h4>
                  <p className="text-sm text-green-600">
                    Capture this moment together
                  </p>
                </div>
              </div>
              <Button
                onClick={() => onCompletePhotoChallenge(card.id)}
                disabled={photoCompletions.has(card.id)}
                className={`rounded-lg ${
                  photoCompletions.has(card.id)
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {photoCompletions.has(card.id)
                  ? "Completed! ✓"
                  : "Mark Complete"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

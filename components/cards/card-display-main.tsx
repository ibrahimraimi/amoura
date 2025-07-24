"use client";

import { useTimer } from "@/lib/hooks/use-timer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Timer,
  Star,
  Share2,
  Mic,
  SkipForward,
  Shuffle,
  Camera,
  Play,
  Pause,
} from "lucide-react";
import { getCategoryColor, getLevelColor } from "@/lib/utils/ui-helpers";
import { Card } from "@/lib/types";
import { useMemo } from "react";

interface CardDisplayProps {
  card: Card | null;
  favoriteCards: Set<number>;
  photoCompletions: Set<number>;
  personalizePrompt: (prompt: string) => string;
  toggleFavorite: (cardId: number) => void;
  completePhotoChallenge: (cardId: number) => void;
  nextCard: () => void;
  shuffleAndNext: () => void;
  filteredCards: Card[];
}

export function CardDisplay({
  card,
  favoriteCards,
  photoCompletions,
  personalizePrompt,
  toggleFavorite,
  completePhotoChallenge,
  nextCard,
  shuffleAndNext,
  filteredCards,
}: CardDisplayProps) {
  const {
    timerActive,
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
    selectedTimer,
    formatTime,
  } = useTimer();

  // Get theme icon dynamically
  const getThemeIcon = useMemo(() => {
    if (!card || card.theme === "general") return null;

    return (
      <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 rounded-full px-4 py-2 font-medium">
        {card.theme}
      </Badge>
    );
  }, [card]);

  if (!card) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-12 text-center">
          <p className="text-gray-500 text-xl mb-6">
            No cards available with current filters
          </p>
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
            {card.theme !== "general" && getThemeIcon}
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
              onClick={() => toggleFavorite(card.id)}
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
                onClick={() => completePhotoChallenge(card.id)}
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

        {!timerActive && timeLeft === 0 && (
          <div className="mb-8 text-center">
            <Button
              variant="outline"
              onClick={() => startTimer(selectedTimer)}
              className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-lg px-8 py-3"
            >
              <Timer className="w-5 h-5 mr-2" />
              Start{" "}
              {selectedTimer < 60
                ? `${selectedTimer}s`
                : `${Math.floor(selectedTimer / 60)}m`}{" "}
              Timer
            </Button>
          </div>
        )}

        {timerActive && timeLeft > 0 && (
          <div className="mb-8 text-center">
            <div className="text-4xl font-bold text-rose-600 mb-4">
              {formatTime(timeLeft)}
            </div>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={timerActive ? pauseTimer : () => startTimer(timeLeft)}
                className="flex-1 max-w-xs rounded-lg border-rose-300 text-rose-600 hover:bg-rose-50"
              >
                {timerActive ? (
                  <Pause className="w-4 h-4 mr-2" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {timerActive ? "Pause" : "Resume"}
              </Button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={nextCard}
            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold py-6 text-lg rounded-lg"
            disabled={filteredCards.length === 0}
          >
            <SkipForward className="w-6 h-6 mr-3" />
            Next Card
          </Button>

          <Button
            onClick={shuffleAndNext}
            variant="outline"
            className="flex-1 border-2 border-rose-300 text-rose-600 hover:bg-rose-50 py-6 text-lg font-bold rounded-lg bg-transparent"
            disabled={filteredCards.length === 0}
          >
            <Shuffle className="w-5 h-5 mr-3" />
            Shuffle
          </Button>
        </div>
      </div>
    </div>
  );
}

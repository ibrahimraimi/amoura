"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import CardDisplay from "@/components/cards/card-display";
import CardFilters from "@/components/cards/card-filters";
import { useCards } from "@/lib/hooks/use-cards";
import { useTimer } from "@/lib/hooks/use-timer";

import {
  Heart,
  Shuffle,
  SkipForward,
  Plus,
  MapPin,
  BookOpen,
  Brain,
  Music,
  Volume2,
  VolumeX,
} from "lucide-react";
import { MUSIC_TRACKS } from "@/lib/constants";

export default function PlayPage() {
  const {
    currentCard,
    filteredCards,
    categories,
    levels,
    themes,
    selectedCategory,
    selectedLevel,
    selectedTheme,
    showFavoritesOnly,
    favoriteCards,
    photoCompletions,
    setSelectedCategory,
    setSelectedLevel,
    setSelectedTheme,
    setShowFavoritesOnly,
    toggleFavorite,
    completePhotoChallenge,
    nextCard,
    shuffleAndNext,
    getCategoryColor,
    getLevelColor,
    personalizePrompt,
  } = useCards();

  const {
    timerActive,
    timeLeft,
    selectedTimer,
    timerOptions,
    setSelectedTimer,
    startTimer,
    pauseTimer,
    resetTimer,
    formatTime,
  } = useTimer();

  const [musicEnabled, setMusicEnabled] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("romantic");

  const toggleMusic = () => setMusicEnabled(!musicEnabled);
  const changeTrack = (track: string) => setCurrentTrack(track);

  return (
    <div className="space-y-8">
      {/* Music Controls */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Ambient Music</h3>
                <p className="text-sm text-gray-600">Set the perfect mood</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={musicEnabled} onCheckedChange={toggleMusic} />
              {musicEnabled ? (
                <Volume2 className="w-5 h-5 text-purple-600" />
              ) : (
                <VolumeX className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
          {musicEnabled && (
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(MUSIC_TRACKS).map(([key, track]) => (
                <Button
                  key={key}
                  variant={currentTrack === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeTrack(key)}
                  className={`text-sm rounded-lg ${
                    currentTrack === key
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <span className="mr-2 text-base">{track.emoji}</span>
                  {track.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <CardFilters
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        selectedTheme={selectedTheme}
        showFavoritesOnly={showFavoritesOnly}
        selectedTimer={selectedTimer}
        timeLeft={timeLeft}
        timerActive={timerActive}
        categories={categories}
        levels={levels}
        themes={themes}
        timerOptions={timerOptions}
        onCategoryChange={setSelectedCategory}
        onLevelChange={setSelectedLevel}
        onThemeChange={setSelectedTheme}
        onFavoritesToggle={() => setShowFavoritesOnly(!showFavoritesOnly)}
        onTimerChange={setSelectedTimer}
        onTimerStart={startTimer}
        onTimerPause={pauseTimer}
        onTimerReset={resetTimer}
        formatTime={formatTime}
      />

      {/* Main Card Display */}
      <CardDisplay
        card={currentCard!}
        favoriteCards={favoriteCards}
        photoCompletions={photoCompletions}
        timerActive={timerActive}
        timeLeft={timeLeft}
        selectedTimer={selectedTimer}
        onToggleFavorite={toggleFavorite}
        onCompletePhotoChallenge={completePhotoChallenge}
        onStartTimer={startTimer}
        personalizePrompt={(prompt) => personalizePrompt(prompt)}
        getCategoryColor={getCategoryColor}
        getLevelColor={getLevelColor}
        getThemeIcon={() => null}
      />

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

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            icon: Plus,
            label: "Add Card",
            action: () => {},
          },
          { icon: MapPin, label: "Date Ideas", action: () => {} },
          {
            icon: BookOpen,
            label: "Add Memory",
            action: () => {},
          },
          {
            icon: Brain,
            label: "Meditate",
            action: () => {},
          },
        ].map((item, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={item.action}
            className="p-6 h-auto flex-col gap-3 rounded-lg border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 group"
          >
            <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {item.label}
            </span>
          </Button>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 text-center">
          <div className="text-sm text-gray-600 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
              <strong>{filteredCards.length}</strong> cards available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

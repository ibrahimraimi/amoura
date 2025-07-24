"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Filter,
  Timer,
  Star,
  Gift,
  Snowflake,
  Flower,
  Sun,
  Heart,
  Calendar,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface CardFilterProps {
  selectedCategory: string;
  selectedLevel: string;
  selectedTheme: string;
  showFavoritesOnly: boolean;
  selectedTimer: number;
  timeLeft: number;
  timerActive: boolean;
  categories: string[];
  levels: string[];
  themes: string[];
  timerOptions: number[];
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
  onThemeChange: (theme: string) => void;
  onFavoritesToggle: () => void;
  onTimerChange: (timer: number) => void;
  onTimerStart: (seconds: number) => void;
  onTimerPause: () => void;
  onTimerReset: () => void;
  formatTime: (seconds: number) => string;
}

export default function CardFilter({
  selectedCategory,
  selectedLevel,
  selectedTheme,
  showFavoritesOnly,
  selectedTimer,
  timeLeft,
  timerActive,
  categories,
  levels,
  themes,
  timerOptions,
  onCategoryChange,
  onLevelChange,
  onThemeChange,
  onFavoritesToggle,
  onTimerChange,
  onTimerStart,
  onTimerPause,
  onTimerReset,
  formatTime,
}: CardFilterProps) {
  const getThemeIcon = (theme: string) => {
    const icons = {
      holiday: <Gift className="w-4 h-4" />,
      winter: <Snowflake className="w-4 h-4" />,
      spring: <Flower className="w-4 h-4" />,
      summer: <Sun className="w-4 h-4" />,
      anniversary: <Heart className="w-4 h-4" />,
      general: <Calendar className="w-4 h-4" />,
    };

    return (
      icons[theme as keyof typeof icons] || <Calendar className="w-4 h-4" />
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">
              Customize Your Experience
            </h3>
            <p className="text-sm text-gray-600">
              Filter cards to match your mood
            </p>
          </div>
        </div>

        <Tabs defaultValue="filters" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-lg p-1">
            <TabsTrigger value="filters" className="rounded-md">
              Filters
            </TabsTrigger>
            <TabsTrigger value="timer" className="rounded-md">
              Timer
            </TabsTrigger>
            <TabsTrigger value="themes" className="rounded-md">
              Themes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="filters" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700 mb-2 block">
                  Category
                </label>
                <Select
                  value={selectedCategory}
                  onValueChange={onCategoryChange}
                >
                  <SelectTrigger className="rounded-lg border-gray-200 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 mb-2 block">
                  Vibe Level
                </label>
                <Select value={selectedLevel} onValueChange={onLevelChange}>
                  <SelectTrigger className="rounded-lg border-gray-200 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              variant={showFavoritesOnly ? "default" : "outline"}
              onClick={onFavoritesToggle}
              className={`w-full rounded-lg ${
                showFavoritesOnly
                  ? "bg-amber-600 text-white hover:bg-amber-700"
                  : "border-amber-200 text-amber-600 hover:bg-amber-50"
              }`}
            >
              <Star
                className={`w-4 h-4 mr-2 ${
                  showFavoritesOnly ? "fill-current" : ""
                }`}
              />
              {showFavoritesOnly ? "Show All Cards" : "Show Favorites Only"}
            </Button>
          </TabsContent>

          <TabsContent value="timer" className="space-y-4 mt-6">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                Timer Duration
              </label>
              <Select
                value={selectedTimer.toString()}
                onValueChange={(value) => onTimerChange(Number.parseInt(value))}
              >
                <SelectTrigger className="rounded-lg border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {timerOptions.map((seconds) => (
                    <SelectItem key={seconds} value={seconds.toString()}>
                      {seconds < 60
                        ? `${seconds}s`
                        : `${Math.floor(seconds / 60)}m`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {timeLeft > 0 && (
              <div className="text-center p-6 bg-rose-50 rounded-lg border border-rose-200">
                <div className="text-4xl font-bold text-rose-600 mb-4">
                  {formatTime(timeLeft)}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={
                      timerActive
                        ? onTimerPause
                        : () => onTimerStart(selectedTimer)
                    }
                    className="flex-1 rounded-lg border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    {timerActive ? "Pause" : "Play"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onTimerReset}
                    className="flex-1 rounded-lg border-rose-300 text-rose-600 hover:bg-rose-50 bg-transparent"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="themes" className="space-y-4 mt-6">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                Card Theme
              </label>
              <Select value={selectedTheme} onValueChange={onThemeChange}>
                <SelectTrigger className="rounded-lg border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {themes.map((theme) => (
                    <SelectItem key={theme} value={theme}>
                      <div className="flex items-center gap-2">
                        {theme !== "All" && getThemeIcon(theme)}
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="text-sm text-indigo-700 space-y-2">
                <p className="flex items-center gap-2">
                  <Gift className="w-4 h-4" /> <strong>Holiday:</strong> Festive
                  and celebration-themed
                </p>
                <p className="flex items-center gap-2">
                  <Snowflake className="w-4 h-4" /> <strong>Winter:</strong>{" "}
                  Cozy and warm moments
                </p>
                <p className="flex items-center gap-2">
                  <Flower className="w-4 h-4" /> <strong>Spring:</strong> Fresh
                  starts and new adventures
                </p>
                <p className="flex items-center gap-2">
                  <Sun className="w-4 h-4" /> <strong>Summer:</strong> Fun and
                  energetic activities
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-4 h-4" /> <strong>Anniversary:</strong>{" "}
                  Special milestone moments
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

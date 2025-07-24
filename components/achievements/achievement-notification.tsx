"use client";

import { Trophy } from "lucide-react";
import { Achievement } from "@/lib/hooks/use-achievements";

interface AchievementNotificationProps {
  achievement: Achievement | null;
}

export function AchievementNotification({
  achievement,
}: AchievementNotificationProps) {
  if (!achievement) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-rose-600 text-white px-8 py-4 rounded-lg shadow-lg animate-bounce">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <div className="font-bold text-lg">Achievement Unlocked!</div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <span className="text-xl">{achievement.icon}</span>
            <span>{achievement.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

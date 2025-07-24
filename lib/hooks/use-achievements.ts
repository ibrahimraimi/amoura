"use client";

import { useState, useEffect } from "react";

export type Achievement = {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
};

export type GameStats = {
  totalCardsPlayed: number;
  sessionCards: number;
  favoriteCategory: string | null;
  timerUsage: number;
  customCardsCreated: number;
  photosChallengesCompleted: number;
  deepDiveCompleted: number;
  spicyCompleted: number;
  sessionsPlayed: number;
  journalEntries: number;
  challengesCompleted: number;
  timelineEvents: number;
  meditationSessions: number;
  gamesPlayed: number;
  goalsCompleted: number;
  bucketListItems: number;
  intimacyScore: number;
};

export function useAchievements(achievements: Achievement[]) {
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(
    new Set()
  );
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(
    null
  );
  const [gameStats, setGameStats] = useState<GameStats>({
    totalCardsPlayed: 0,
    sessionCards: 0,
    favoriteCategory: null,
    timerUsage: 0,
    customCardsCreated: 0,
    photosChallengesCompleted: 0,
    deepDiveCompleted: 0,
    spicyCompleted: 0,
    sessionsPlayed: 0,
    journalEntries: 0,
    challengesCompleted: 0,
    timelineEvents: 0,
    meditationSessions: 0,
    gamesPlayed: 0,
    goalsCompleted: 0,
    bucketListItems: 0,
    intimacyScore: 0,
  });

  const checkAchievements = (
    action: string,
    data: Record<string, any> = {}
  ) => {
    const newUnlocked = new Set(unlockedAchievements);

    switch (action) {
      case "first_card":
        if (!unlockedAchievements.has("first_game")) {
          newUnlocked.add("first_game");
          setNewAchievement(
            achievements.find((a) => a.id === "first_game") || null
          );
        }
        break;
      case "favorite_added":
        if (
          data.favoriteSize >= 5 &&
          !unlockedAchievements.has("favorite_collector")
        ) {
          newUnlocked.add("favorite_collector");
          setNewAchievement(
            achievements.find((a) => a.id === "favorite_collector") || null
          );
        }
        break;
      case "custom_card":
        if (!unlockedAchievements.has("custom_creator")) {
          newUnlocked.add("custom_creator");
          setNewAchievement(
            achievements.find((a) => a.id === "custom_creator") || null
          );
        }
        break;
      case "timer_used":
        if (
          gameStats.timerUsage >= 10 &&
          !unlockedAchievements.has("timer_master")
        ) {
          newUnlocked.add("timer_master");
          setNewAchievement(
            achievements.find((a) => a.id === "timer_master") || null
          );
        }
        break;
      case "photo_completed":
        if (
          gameStats.photosChallengesCompleted >= 5 &&
          !unlockedAchievements.has("photo_lover")
        ) {
          newUnlocked.add("photo_lover");
          setNewAchievement(
            achievements.find((a) => a.id === "photo_lover") || null
          );
        }
        break;
      case "deep_dive":
        if (
          gameStats.deepDiveCompleted >= 10 &&
          !unlockedAchievements.has("deep_diver")
        ) {
          newUnlocked.add("deep_diver");
          setNewAchievement(
            achievements.find((a) => a.id === "deep_diver") || null
          );
        }
        break;
      case "spicy_completed":
        if (
          gameStats.spicyCompleted >= 15 &&
          !unlockedAchievements.has("spice_master")
        ) {
          newUnlocked.add("spice_master");
          setNewAchievement(
            achievements.find((a) => a.id === "spice_master") || null
          );
        }
        break;
      case "session_milestone":
        if (
          gameStats.sessionCards >= 50 &&
          !unlockedAchievements.has("session_warrior")
        ) {
          newUnlocked.add("session_warrior");
          setNewAchievement(
            achievements.find((a) => a.id === "session_warrior") || null
          );
        }
        break;
      case "journal_entry":
        if (
          gameStats.journalEntries >= 10 &&
          !unlockedAchievements.has("journal_keeper")
        ) {
          newUnlocked.add("journal_keeper");
          setNewAchievement(
            achievements.find((a) => a.id === "journal_keeper") || null
          );
        }
        break;
      case "challenge_completed":
        if (
          gameStats.challengesCompleted >= 3 &&
          !unlockedAchievements.has("challenge_master")
        ) {
          newUnlocked.add("challenge_master");
          setNewAchievement(
            achievements.find((a) => a.id === "challenge_master") || null
          );
        }
        break;
      case "timeline_event":
        if (
          gameStats.timelineEvents >= 5 &&
          !unlockedAchievements.has("timeline_creator")
        ) {
          newUnlocked.add("timeline_creator");
          setNewAchievement(
            achievements.find((a) => a.id === "timeline_creator") || null
          );
        }
        break;
      case "meditation_session":
        if (
          gameStats.meditationSessions >= 10 &&
          !unlockedAchievements.has("meditation_master")
        ) {
          newUnlocked.add("meditation_master");
          setNewAchievement(
            achievements.find((a) => a.id === "meditation_master") || null
          );
        }
        break;
    }

    setUnlockedAchievements(newUnlocked);
  };

  const incrementStat = (stat: keyof GameStats, amount: number = 1) => {
    setGameStats((prev) => ({ ...prev, [stat]: prev[stat] + amount }));
  };

  useEffect(() => {
    if (newAchievement) {
      const timer = setTimeout(() => {
        setNewAchievement(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [newAchievement]);

  return {
    unlockedAchievements,
    newAchievement,
    gameStats,
    setGameStats,
    incrementStat,
    checkAchievements,
  };
}

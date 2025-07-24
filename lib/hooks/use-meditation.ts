"use client";

import { useState, useEffect } from "react";

export type MeditationExercise = {
  id: number;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
};

export function useMeditation() {
  const [activeMeditation, setActiveMeditation] =
    useState<MeditationExercise | null>(null);
  const [meditationTimer, setMeditationTimer] = useState(0);
  const [meditationActive, setMeditationActive] = useState(false);

  const startMeditation = (exercise: MeditationExercise) => {
    setActiveMeditation(exercise);
    // Parse duration properly - extract number from string like "5 min"
    const durationInMinutes = Number.parseInt(exercise.duration.split(" ")[0]);
    setMeditationTimer(durationInMinutes * 60); // Convert minutes to seconds
    setMeditationActive(true);
    return true;
  };

  const pauseMeditation = () => {
    setMeditationActive(false);
  };

  const resumeMeditation = () => {
    if (activeMeditation && meditationTimer > 0) {
      setMeditationActive(true);
    }
  };

  const endMeditation = () => {
    setActiveMeditation(null);
    setMeditationActive(false);
    setMeditationTimer(0);
  };

  const formatMeditationTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (meditationActive && meditationTimer > 0) {
      interval = setInterval(() => {
        setMeditationTimer((prev) => prev - 1);
      }, 1000);
    } else if (meditationTimer === 0 && meditationActive) {
      setMeditationActive(false);
      setActiveMeditation(null);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [meditationActive, meditationTimer]);

  return {
    activeMeditation,
    meditationTimer,
    meditationActive,
    startMeditation,
    pauseMeditation,
    resumeMeditation,
    endMeditation,
    formatMeditationTime,
  };
}

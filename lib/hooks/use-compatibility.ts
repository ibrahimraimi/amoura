"use client";

import { useState } from "react";

export type CompatibilityData = {
  communicationStyle: number;
  intimacyLevel: number;
  adventureSeeker: number;
  emotionalDepth: number;
  playfulness: number;
};

export function useCompatibility() {
  const [compatibilityData, setCompatibilityData] = useState<CompatibilityData>(
    {
      communicationStyle: 0,
      intimacyLevel: 0,
      adventureSeeker: 0,
      emotionalDepth: 0,
      playfulness: 0,
    }
  );

  const analyzeCompatibility = () => {
    const analysis = {
      overall: Math.round(
        (compatibilityData.communicationStyle +
          compatibilityData.intimacyLevel +
          compatibilityData.adventureSeeker +
          compatibilityData.emotionalDepth +
          compatibilityData.playfulness) /
          5
      ),
      strengths: [] as string[],
      growthAreas: [] as string[],
    };

    if (compatibilityData.communicationStyle >= 8)
      analysis.strengths.push("Excellent Communication");
    if (compatibilityData.intimacyLevel >= 8)
      analysis.strengths.push("Strong Intimacy");
    if (compatibilityData.adventureSeeker >= 8)
      analysis.strengths.push("Adventurous Spirit");
    if (compatibilityData.emotionalDepth >= 8)
      analysis.strengths.push("Deep Emotional Connection");
    if (compatibilityData.playfulness >= 8)
      analysis.strengths.push("Playful Dynamic");

    if (compatibilityData.communicationStyle <= 5)
      analysis.growthAreas.push("Communication Skills");
    if (compatibilityData.intimacyLevel <= 5)
      analysis.growthAreas.push("Intimacy Building");
    if (compatibilityData.adventureSeeker <= 5)
      analysis.growthAreas.push("Shared Adventures");
    if (compatibilityData.emotionalDepth <= 5)
      analysis.growthAreas.push("Emotional Depth");
    if (compatibilityData.playfulness <= 5)
      analysis.growthAreas.push("Playfulness");

    return analysis;
  };

  const updateCompatibilityFromCardCategory = (category: string) => {
    setCompatibilityData((prev) => {
      const updates = { ...prev };
      switch (category) {
        case "Talk":
          updates.communicationStyle = Math.min(
            10,
            prev.communicationStyle + 0.1
          );
          break;
        case "Deep Dive":
          updates.emotionalDepth = Math.min(10, prev.emotionalDepth + 0.2);
          break;
        case "Touch":
          updates.intimacyLevel = Math.min(10, prev.intimacyLevel + 0.15);
          break;
        case "Dare":
          updates.adventureSeeker = Math.min(10, prev.adventureSeeker + 0.2);
          updates.playfulness = Math.min(10, prev.playfulness + 0.1);
          break;
        case "Wild":
          updates.intimacyLevel = Math.min(10, prev.intimacyLevel + 0.25);
          updates.playfulness = Math.min(10, prev.playfulness + 0.15);
          break;
      }
      return updates;
    });
  };

  return {
    compatibilityData,
    setCompatibilityData,
    analyzeCompatibility,
    updateCompatibilityFromCardCategory,
  };
}

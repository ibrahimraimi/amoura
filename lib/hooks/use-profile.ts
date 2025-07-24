"use client";

import { useState } from "react";

export type CoupleProfile = {
  partner1: string;
  partner2: string;
};

export function useProfile() {
  const [coupleNames, setCoupleNames] = useState<CoupleProfile>({
    partner1: "",
    partner2: "",
  });
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [profileSet, setProfileSet] = useState(false);

  const saveProfile = () => {
    if (coupleNames.partner1.trim() && coupleNames.partner2.trim()) {
      setProfileSet(true);
      setShowProfileDialog(false);
      return true;
    }
    return false;
  };

  const personalizePrompt = (prompt: string): string => {
    if (!profileSet) return prompt;

    const personalized = prompt
      .replace(/your partner/gi, coupleNames.partner2)
      .replace(/me/g, coupleNames.partner1)
      .replace(/my/g, `${coupleNames.partner1}'s`);

    return personalized;
  };

  return {
    coupleNames,
    setCoupleNames,
    showProfileDialog,
    setShowProfileDialog,
    profileSet,
    saveProfile,
    personalizePrompt,
  };
}

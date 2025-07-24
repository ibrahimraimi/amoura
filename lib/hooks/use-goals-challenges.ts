"use client";

import { useState } from "react";

export type RelationshipGoal = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  category: string;
  completed: boolean;
  createdAt: string;
  progress: number;
};

export type RelationshipChallenge = {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  startDate?: string;
  progress?: number;
  isActive?: boolean;
};

export function useGoalsAndChallenges() {
  const [relationshipGoals, setRelationshipGoals] = useState<
    RelationshipGoal[]
  >([]);
  const [newGoal, setNewGoal] = useState<
    Omit<RelationshipGoal, "id" | "completed" | "createdAt" | "progress">
  >({
    title: "",
    description: "",
    deadline: "",
    category: "communication",
  });

  const [activeChallenges, setActiveChallenges] = useState<
    RelationshipChallenge[]
  >([]);
  const [completedChallenges, setCompletedChallenges] = useState<Set<number>>(
    new Set()
  );

  const addRelationshipGoal = () => {
    if (!newGoal.title.trim()) return null;

    const goal = {
      id: Date.now(),
      ...newGoal,
      completed: false,
      createdAt: new Date().toISOString(),
      progress: 0,
    };

    setRelationshipGoals((prev) => [...prev, goal]);
    setNewGoal({
      title: "",
      description: "",
      deadline: "",
      category: "communication",
    });

    return goal;
  };

  const completeGoal = (goalId: number) => {
    setRelationshipGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId ? { ...goal, completed: true } : goal
      )
    );
    return true;
  };

  const updateGoalProgress = (goalId: number, progress: number) => {
    setRelationshipGoals((prev) =>
      prev.map((goal) => (goal.id === goalId ? { ...goal, progress } : goal))
    );
  };

  const startChallenge = (challenge: RelationshipChallenge) => {
    const activeChallenge = {
      ...challenge,
      startDate: new Date().toISOString(),
      progress: 0,
      isActive: true,
    };
    setActiveChallenges((prev) => [...prev, activeChallenge]);
    return activeChallenge;
  };

  const completeChallenge = (challengeId: number) => {
    setActiveChallenges((prev) => prev.filter((c) => c.id !== challengeId));
    setCompletedChallenges((prev) => new Set([...prev, challengeId]));
    return true;
  };

  const updateChallengeProgress = (challengeId: number, progress: number) => {
    setActiveChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === challengeId ? { ...challenge, progress } : challenge
      )
    );
  };

  return {
    relationshipGoals,
    newGoal,
    setNewGoal,
    addRelationshipGoal,
    completeGoal,
    updateGoalProgress,
    activeChallenges,
    completedChallenges,
    startChallenge,
    completeChallenge,
    updateChallengeProgress,
  };
}

"use client";

import { useState, useEffect } from "react";
import { gameData } from "@/lib/data/cards";
import { Card } from "@/lib/types";

export function useCards() {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [allCards, setAllCards] = useState<Card[]>(gameData);
  const [filteredCards, setFilteredCards] = useState<Card[]>(gameData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedTheme, setSelectedTheme] = useState("All");
  const [usedCards, setUsedCards] = useState(new Set<number>());
  const [favoriteCards, setFavoriteCards] = useState(new Set<number>());
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [photoCompletions, setPhotoCompletions] = useState(new Set<number>());

  const categories = ["All", ...new Set(allCards.map((card) => card.category))];
  const levels = ["All", ...new Set(allCards.map((card) => card.level))];
  const themes = [
    "All",
    "general",
    "holiday",
    "anniversary",
    "winter",
    "spring",
    "summer",
    "fall",
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Talk: "bg-blue-100 text-blue-800 border-blue-200",
      "Deep Dive": "bg-purple-100 text-purple-800 border-purple-200",
      Dare: "bg-orange-100 text-orange-800 border-orange-200",
      Touch: "bg-pink-100 text-pink-800 border-pink-200",
      Wild: "bg-red-100 text-red-800 border-red-200",
      Photo: "bg-green-100 text-green-800 border-green-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  const getLevelColor = (level: string) => {
    const colors = {
      Soft: "bg-green-100 text-green-800 border-green-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Spicy: "bg-orange-100 text-orange-800 border-orange-200",
      Explicit: "bg-red-100 text-red-800 border-red-200",
    };
    return (
      colors[level as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  const personalizePrompt = (
    prompt: string,
    profile?: { partner1: string; partner2: string }
  ) => {
    if (!profile || !profile.partner1 || !profile.partner2) return prompt;

    const personalized = prompt
      .replace(/your partner/gi, profile.partner2)
      .replace(/me/g, profile.partner1)
      .replace(/my/g, `${profile.partner1}'s`);

    return personalized;
  };

  const filterCards = () => {
    let filtered = allCards;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((card) => card.category === selectedCategory);
    }

    if (selectedLevel !== "All") {
      filtered = filtered.filter((card) => card.level === selectedLevel);
    }

    if (selectedTheme !== "All") {
      filtered = filtered.filter((card) => card.theme === selectedTheme);
    }

    if (showFavoritesOnly) {
      filtered = filtered.filter((card) => favoriteCards.has(card.id));
    }

    setFilteredCards(filtered);
    setUsedCards(new Set());
  };

  const getRandomCard = () => {
    if (filteredCards.length === 0) return null;

    if (usedCards.size >= filteredCards.length) {
      setUsedCards(new Set());
    }

    const availableCards = filteredCards.filter(
      (card) => !usedCards.has(card.id)
    );

    if (availableCards.length === 0) {
      const randomIndex = Math.floor(Math.random() * filteredCards.length);
      return filteredCards[randomIndex];
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];

    setUsedCards((prev) => new Set([...prev, selectedCard.id]));

    return selectedCard;
  };

  const nextCard = () => {
    const newCard = getRandomCard();
    setCurrentCard(newCard);
    return newCard;
  };

  const shuffleAndNext = () => {
    setUsedCards(new Set());
    return nextCard();
  };

  const toggleFavorite = (cardId: number) => {
    setFavoriteCards((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(cardId)) {
        newFavorites.delete(cardId);
      } else {
        newFavorites.add(cardId);
      }
      return newFavorites;
    });
  };

  const addCustomCard = (customCard: Omit<Card, "id" | "isCustom">) => {
    const newCard: Card = {
      id: Date.now(),
      ...customCard,
      isCustom: true,
    };

    setAllCards((prev) => [...prev, newCard]);
    return newCard;
  };

  const completePhotoChallenge = (cardId: number) => {
    setPhotoCompletions((prev) => new Set([...prev, cardId]));
  };

  useEffect(() => {
    filterCards();
  }, [
    selectedCategory,
    selectedLevel,
    selectedTheme,
    showFavoritesOnly,
    allCards,
  ]);

  return {
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
    usedCards,
    setSelectedCategory,
    setSelectedLevel,
    setSelectedTheme,
    setShowFavoritesOnly,
    toggleFavorite,
    addCustomCard,
    completePhotoChallenge,
    nextCard,
    shuffleAndNext,
    getCategoryColor,
    getLevelColor,
    personalizePrompt,
  };
}

"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/play");
  }, [router]);

  return null;
}

import { gameData } from "@/lib/data/cards";
import {
  Heart,
  Shuffle,
  SkipForward,
  Filter,
  Timer,
  Plus,
  Star,
  Users,
  Play,
  Pause,
  RotateCcw,
  Trophy,
  Camera,
  Music,
  Volume2,
  VolumeX,
  Calendar,
  Gift,
  Snowflake,
  Sun,
  Leaf,
  Flower,
  BookOpen,
  MapPin,
  Target,
  Share2,
  Mic,
  Menu,
  TrendingUp,
  Brain,
  Lightbulb,
  Gamepad2,
  MapIcon,
  Thermometer,
  Settings,
  Zap,
} from "lucide-react";
import {
  relationshipChallenges,
  achievements,
  coupleGames,
  dateNightIdeas,
  loveLanguages,
  moods,
  themes,
  meditationExercises,
  tips,
  gameQuestions,
  loveLanguageQuestions,
} from "@/lib/data/relationship";
import { Lovers_Quarrel } from "next/font/google";

const loveLight = Lovers_Quarrel({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-love-light",
});

export default function AmouraCoupleGame() {
  const [currentCard, setCurrentCard] = useState(null);
  const [allCards, setAllCards] = useState(gameData);
  const [filteredCards, setFilteredCards] = useState(gameData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [usedCards, setUsedCards] = useState(new Set());
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedTimer, setSelectedTimer] = useState(30);
  const [customCardForm, setCustomCardForm] = useState({
    category: "Talk",
    level: "Soft",
    prompt: "",
    theme: "general",
  });
  const [showCustomCardDialog, setShowCustomCardDialog] = useState(false);
  const [favoriteCards, setFavoriteCards] = useState(new Set());
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [coupleNames, setCoupleNames] = useState({
    partner1: "",
    partner2: "",
  });
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [profileSet, setProfileSet] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  const [newAchievement, setNewAchievement] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("All");
  const [photoCompletions, setPhotoCompletions] = useState(new Set());
  const [gameStats, setGameStats] = useState({
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
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("romantic");
  const audioRef = useRef(null);
  const [journalEntries, setJournalEntries] = useState([]);
  const [newJournalEntry, setNewJournalEntry] = useState({
    title: "",
    content: "",
    mood: "happy",
  });
  const [suggestedDates, setSuggestedDates] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState(new Set());
  const [shareableContent, setShareableContent] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceNotes, setVoiceNotes] = useState(new Map());
  const mediaRecorderRef = useRef(null);
  const [recordingTime, setRecordingTime] = useState(0);

  const [activeTab, setActiveTab] = useState("play");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Relationship Timeline
  const [timelineEvents, setTimelineEvents] = useState([
    {
      id: 1,
      title: "Our First Date",
      description:
        "The magical evening when we first met for coffee and talked for hours. I knew there was something special about you from the moment you smiled.",
      date: "2023-06-15",
      category: "milestone",
      createdAt: new Date().toISOString(),
    },
  ]);
  const [newTimelineEvent, setNewTimelineEvent] = useState({
    title: "",
    description: "",
    date: "",
    category: "milestone",
  });

  // Compatibility Insights
  const [compatibilityData, setCompatibilityData] = useState({
    communicationStyle: 0,
    intimacyLevel: 0,
    adventureSeeker: 0,
    emotionalDepth: 0,
    playfulness: 0,
  });

  // Meditation & Mindfulness
  const [activeMeditation, setActiveMeditation] = useState(null);
  const [meditationTimer, setMeditationTimer] = useState(0);
  const [meditationActive, setMeditationActive] = useState(false);

  // Anniversary Reminders
  const [anniversaryReminders, setAnniversaryReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({
    title: "",
    date: "",
    type: "anniversary",
    recurring: true,
  });

  // Relationship Coaching
  const [coachingTips, setCoachingTips] = useState([]);
  const [currentTip, setCurrentTip] = useState(null);

  // Couple Games Collection
  const [activeGame, setActiveGame] = useState(null);
  const [gameProgress, setGameProgress] = useState({});

  // Love Language Assessment
  const [loveLanguageScores, setLoveLanguageScores] = useState({
    partner1: {},
    partner2: {},
  });
  const [takingAssessment, setTakingAssessment] = useState(false);

  // Relationship Goals Tracker
  const [relationshipGoals, setRelationshipGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    deadline: "",
    category: "communication",
  });

  // Couple Bucket List
  const [bucketList, setBucketList] = useState([]);
  const [newBucketItem, setNewBucketItem] = useState({
    title: "",
    description: "",
    category: "travel",
    priority: "medium",
  });

  // NIntimacy Tracker
  const [intimacyData, setIntimacyData] = useState({
    emotional: [],
    physical: [],
    intellectual: [],
    spiritual: [],
  });
  const [intimacyEntry, setIntimacyEntry] = useState({
    type: "emotional",
    rating: 5,
    notes: "",
    date: new Date().toISOString().split("T")[0],
  });

  const categories = ["All", ...new Set(allCards.map((card) => card.category))];
  const levels = ["All", ...new Set(allCards.map((card) => card.level))];
  const timerOptions = [15, 30, 60, 120, 300];

  const musicTracks = {
    romantic: { name: "Romantic Ambience", emoji: "💕" },
    chill: { name: "Chill Vibes", emoji: "🎵" },
    intimate: { name: "Intimate Moments", emoji: "🌙" },
    playful: { name: "Playful Energy", emoji: "✨" },
  };

  const getCategoryColor = (category) => {
    const colors = {
      Talk: "bg-blue-100 text-blue-800 border-blue-200",
      "Deep Dive": "bg-purple-100 text-purple-800 border-purple-200",
      Dare: "bg-orange-100 text-orange-800 border-orange-200",
      Touch: "bg-pink-100 text-pink-800 border-pink-200",
      Wild: "bg-red-100 text-red-800 border-red-200",
      Photo: "bg-green-100 text-green-800 border-green-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getLevelColor = (level) => {
    const colors = {
      Soft: "bg-green-100 text-green-800 border-green-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Spicy: "bg-orange-100 text-orange-800 border-orange-200",
      Explicit: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[level] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getThemeIcon = (theme) => {
    const icons = {
      holiday: <Gift className="w-4 h-4" />,
      winter: <Snowflake className="w-4 h-4" />,
      spring: <Flower className="w-4 h-4" />,
      summer: <Sun className="w-4 h-4" />,
      fall: <Leaf className="w-4 h-4" />,
      anniversary: <Heart className="w-4 h-4" />,
      general: <Calendar className="w-4 h-4" />,
    };
    return icons[theme] || <Calendar className="w-4 h-4" />;
  };

  const getMoodEmoji = (mood) => {
    const emojis = {
      happy: "😊",
      romantic: "💕",
      excited: "🎉",
      thoughtful: "🤔",
      grateful: "🙏",
      playful: "😄",
    };
    return emojis[mood] || "😊";
  };

  // Timeline Functions
  const addTimelineEvent = () => {
    if (!newTimelineEvent.title.trim() || !newTimelineEvent.date) return;

    const event = {
      id: Date.now(),
      ...newTimelineEvent,
      createdAt: new Date().toISOString(),
    };

    setTimelineEvents((prev) =>
      [...prev, event].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
    setGameStats((prev) => ({
      ...prev,
      timelineEvents: prev.timelineEvents + 1,
    }));
    setNewTimelineEvent({
      title: "",
      description: "",
      date: "",
      category: "milestone",
    });
    checkAchievements("timeline_event");
  };

  // Compatibility Analysis
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
      strengths: [],
      growthAreas: [],
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

  // Meditation Functions
  const startMeditation = (exercise) => {
    setActiveMeditation(exercise);
    // Parse duration properly - extract number from string like "5 min"
    const durationInMinutes = Number.parseInt(exercise.duration.split(" ")[0]);
    setMeditationTimer(durationInMinutes * 60); // Convert minutes to seconds
    setMeditationActive(true);
    setGameStats((prev) => ({
      ...prev,
      meditationSessions: prev.meditationSessions + 1,
    }));
    checkAchievements("meditation_session");
  };

  // Anniversary Reminder Functions
  const addAnniversaryReminder = () => {
    if (!newReminder.title.trim() || !newReminder.date) return;

    const reminder = {
      id: Date.now(),
      ...newReminder,
      createdAt: new Date().toISOString(),
    };

    setAnniversaryReminders((prev) => [...prev, reminder]);
    setNewReminder({
      title: "",
      date: "",
      type: "anniversary",
      recurring: true,
    });
  };

  // Coaching Functions
  const generateCoachingTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(randomTip);
  };

  // Games Functions
  const startCoupleGame = (game) => {
    setActiveGame(game);
    setGameStats((prev) => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
  };

  // Goals Functions
  const addRelationshipGoal = () => {
    if (!newGoal.title.trim()) return;

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
  };

  const completeGoal = (goalId) => {
    setRelationshipGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId ? { ...goal, completed: true } : goal
      )
    );
    setGameStats((prev) => ({
      ...prev,
      goalsCompleted: prev.goalsCompleted + 1,
    }));
  };

  // Bucket List Functions
  const addBucketListItem = () => {
    if (!newBucketItem.title.trim()) return;

    const item = {
      id: Date.now(),
      ...newBucketItem,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setBucketList((prev) => [...prev, item]);
    setGameStats((prev) => ({
      ...prev,
      bucketListItems: prev.bucketListItems + 1,
    }));
    setNewBucketItem({
      title: "",
      description: "",
      category: "travel",
      priority: "medium",
    });
  };

  // Intimacy Tracking Functions
  const addIntimacyEntry = () => {
    if (!intimacyEntry.notes.trim()) return;

    const entry = {
      id: Date.now(),
      ...intimacyEntry,
      createdAt: new Date().toISOString(),
    };

    setIntimacyData((prev) => ({
      ...prev,
      [intimacyEntry.type]: [...prev[intimacyEntry.type], entry],
    }));

    // Update intimacy score
    const avgRating =
      Object.values(intimacyData)
        .flat()
        .reduce((sum, entry) => sum + entry.rating, 0) /
      (Object.values(intimacyData).flat().length || 1);

    setGameStats((prev) => ({ ...prev, intimacyScore: Math.round(avgRating) }));
    setIntimacyEntry({
      type: "emotional",
      rating: 5,
      notes: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  // Challenge Management Functions
  const startChallenge = (challenge) => {
    const activeChallenge = {
      ...challenge,
      startDate: new Date().toISOString(),
      progress: 0,
      isActive: true,
    };
    setActiveChallenges((prev) => [...prev, activeChallenge]);
    setGameStats((prev) => ({
      ...prev,
      challengesCompleted: prev.challengesCompleted + 1,
    }));
    checkAchievements("challenge_completed");
  };

  const completeChallenge = (challengeId) => {
    setActiveChallenges((prev) => prev.filter((c) => c.id !== challengeId));
    setCompletedChallenges((prev) => new Set([...prev, challengeId]));
  };

  // Add game state
  const [currentGameQuestion, setCurrentGameQuestion] = useState(0);
  const [gameQuestionsList, setGameQuestionsList] = useState([]);
  const [gameScore, setGameScore] = useState({ player1: 0, player2: 0 });

  // Add love language assessment state
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [currentPartner, setCurrentPartner] = useState(1);

  // Game Functions
  const startGameSession = (game) => {
    setActiveGame(game);
    setCurrentGameQuestion(0);
    setGameScore({ player1: 0, player2: 0 });

    if (gameQuestions[game.id]) {
      setGameQuestionsList(gameQuestions[game.id]);
    }

    setGameStats((prev) => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
  };

  const nextGameQuestion = () => {
    if (currentGameQuestion < gameQuestionsList.length - 1) {
      setCurrentGameQuestion((prev) => prev + 1);
    } else {
      // Game finished
      setActiveGame(null);
      setCurrentGameQuestion(0);
      setGameQuestionsList([]);
    }
  };

  const endGame = () => {
    setActiveGame(null);
    setCurrentGameQuestion(0);
    setGameQuestionsList([]);
    setGameScore({ player1: 0, player2: 0 });
  };

  // Love Language Assessment Functions
  const startAssessment = () => {
    setTakingAssessment(true);
    setAssessmentStep(0);
    setAssessmentAnswers({});
    setCurrentPartner(1);
  };

  const answerAssessmentQuestion = (languageType) => {
    const newAnswers = { ...assessmentAnswers };
    const key = `partner${currentPartner}_q${assessmentStep}`;
    newAnswers[key] = languageType;
    setAssessmentAnswers(newAnswers);

    if (assessmentStep < loveLanguageQuestions.length - 1) {
      setAssessmentStep((prev) => prev + 1);
    } else if (currentPartner === 1) {
      // Switch to partner 2
      setCurrentPartner(2);
      setAssessmentStep(0);
    } else {
      // Assessment complete
      calculateLoveLanguageResults();
    }
  };

  const calculateLoveLanguageResults = () => {
    const results = { partner1: {}, partner2: {} };

    // Count answers for each partner
    for (let partner = 1; partner <= 2; partner++) {
      const counts = { words: 0, acts: 0, gifts: 0, time: 0, touch: 0 };

      for (let q = 0; q < loveLanguageQuestions.length; q++) {
        const answer = assessmentAnswers[`partner${partner}_q${q}`];
        if (answer) {
          counts[answer]++;
        }
      }

      results[`partner${partner}`] = counts;
    }

    setLoveLanguageScores(results);
    setTakingAssessment(false);
    setAssessmentStep(0);
    setCurrentPartner(1);
  };

  // Achievement checking
  const checkAchievements = (action, data = {}) => {
    const newUnlocked = new Set(unlockedAchievements);

    switch (action) {
      case "first_card":
        if (!unlockedAchievements.has("first_game")) {
          newUnlocked.add("first_game");
          setNewAchievement(achievements.find((a) => a.id === "first_game"));
        }
        break;
      case "favorite_added":
        if (
          favoriteCards.size >= 5 &&
          !unlockedAchievements.has("favorite_collector")
        ) {
          newUnlocked.add("favorite_collector");
          setNewAchievement(
            achievements.find((a) => a.id === "favorite_collector")
          );
        }
        break;
      case "custom_card":
        if (!unlockedAchievements.has("custom_creator")) {
          newUnlocked.add("custom_creator");
          setNewAchievement(
            achievements.find((a) => a.id === "custom_creator")
          );
        }
        break;
      case "timer_used":
        if (
          gameStats.timerUsage >= 10 &&
          !unlockedAchievements.has("timer_master")
        ) {
          newUnlocked.add("timer_master");
          setNewAchievement(achievements.find((a) => a.id === "timer_master"));
        }
        break;
      case "photo_completed":
        if (
          gameStats.photosChallengesCompleted >= 5 &&
          !unlockedAchievements.has("photo_lover")
        ) {
          newUnlocked.add("photo_lover");
          setNewAchievement(achievements.find((a) => a.id === "photo_lover"));
        }
        break;
      case "deep_dive":
        if (
          gameStats.deepDiveCompleted >= 10 &&
          !unlockedAchievements.has("deep_diver")
        ) {
          newUnlocked.add("deep_diver");
          setNewAchievement(achievements.find((a) => a.id === "deep_diver"));
        }
        break;
      case "spicy_completed":
        if (
          gameStats.spicyCompleted >= 15 &&
          !unlockedAchievements.has("spice_master")
        ) {
          newUnlocked.add("spice_master");
          setNewAchievement(achievements.find((a) => a.id === "spice_master"));
        }
        break;
      case "session_milestone":
        if (
          gameStats.sessionCards >= 50 &&
          !unlockedAchievements.has("session_warrior")
        ) {
          newUnlocked.add("session_warrior");
          setNewAchievement(
            achievements.find((a) => a.id === "session_warrior")
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
            achievements.find((a) => a.id === "journal_keeper")
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
            achievements.find((a) => a.id === "challenge_master")
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
            achievements.find((a) => a.id === "timeline_creator")
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
            achievements.find((a) => a.id === "meditation_master")
          );
        }
        break;
    }

    setUnlockedAchievements(newUnlocked);
  };

  // Existing functions (shortened for brevity)
  const startTimer = (seconds) => {
    setTimeLeft(seconds);
    setTimerActive(true);
    setGameStats((prev) => ({ ...prev, timerUsage: prev.timerUsage + 1 }));
    checkAchievements("timer_used");
  };

  const pauseTimer = () => setTimerActive(false);
  const resetTimer = () => {
    setTimerActive(false);
    setTimeLeft(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const addCustomCard = () => {
    if (!customCardForm.prompt.trim()) return;

    const newCard = {
      id: Date.now(),
      category: customCardForm.category,
      level: customCardForm.level,
      prompt: customCardForm.prompt,
      theme: customCardForm.theme,
      isCustom: true,
    };

    setAllCards((prev) => [...prev, newCard]);
    setGameStats((prev) => ({
      ...prev,
      customCardsCreated: prev.customCardsCreated + 1,
    }));
    setCustomCardForm({
      category: "Talk",
      level: "Soft",
      prompt: "",
      theme: "general",
    });
    setShowCustomCardDialog(false);
    checkAchievements("custom_card");
  };

  const toggleFavorite = (cardId) => {
    setFavoriteCards((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(cardId)) {
        newFavorites.delete(cardId);
      } else {
        newFavorites.add(cardId);
        checkAchievements("favorite_added");
      }
      return newFavorites;
    });
  };

  const completePhotoChallenge = (cardId) => {
    setPhotoCompletions((prev) => new Set([...prev, cardId]));
    setGameStats((prev) => ({
      ...prev,
      photosChallengesCompleted: prev.photosChallengesCompleted + 1,
    }));
    checkAchievements("photo_completed");
  };

  const toggleMusic = () => setMusicEnabled(!musicEnabled);
  const changeTrack = (track) => setCurrentTrack(track);

  const saveProfile = () => {
    if (coupleNames.partner1.trim() && coupleNames.partner2.trim()) {
      setProfileSet(true);
      setShowProfileDialog(false);
    }
  };

  const personalizePrompt = (prompt) => {
    if (!profileSet) return prompt;

    const personalized = prompt
      .replace(/your partner/gi, coupleNames.partner2)
      .replace(/me/g, coupleNames.partner1)
      .replace(/my/g, `${coupleNames.partner1}'s`);

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
    resetTimer();

    // Update stats and compatibility data based on card
    setGameStats((prev) => {
      const newStats = {
        ...prev,
        totalCardsPlayed: prev.totalCardsPlayed + 1,
        sessionCards: prev.sessionCards + 1,
      };

      if (newCard) {
        if (newCard.category === "Deep Dive") {
          newStats.deepDiveCompleted = prev.deepDiveCompleted + 1;
          checkAchievements("deep_dive");
        }
        if (newCard.level === "Spicy" || newCard.level === "Explicit") {
          newStats.spicyCompleted = prev.spicyCompleted + 1;
          checkAchievements("spicy_completed");
        }
      }

      return newStats;
    });

    // Update compatibility insights based on card interaction
    if (newCard) {
      setCompatibilityData((prev) => {
        const updates = { ...prev };
        switch (newCard.category) {
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
    }

    if (gameStats.totalCardsPlayed === 0) {
      checkAchievements("first_card");
    }
    checkAchievements("session_milestone");
  };

  const shuffleAndNext = () => {
    setUsedCards(new Set());
    nextCard();
  };

  // Effects
  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  useEffect(() => {
    let interval = null;
    if (meditationActive && meditationTimer > 0) {
      interval = setInterval(() => {
        setMeditationTimer((prev) => prev - 1);
      }, 1000);
    } else if (meditationTimer === 0 && meditationActive) {
      setMeditationActive(false);
      setActiveMeditation(null);
    }
    return () => clearInterval(interval);
  }, [meditationActive, meditationTimer]);

  useEffect(() => {
    if (newAchievement) {
      const timer = setTimeout(() => {
        setNewAchievement(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [newAchievement]);

  useEffect(() => {
    filterCards();
  }, [
    selectedCategory,
    selectedLevel,
    selectedTheme,
    showFavoritesOnly,
    allCards,
  ]);

  useEffect(() => {
    if (filteredCards.length > 0 && !currentCard && activeTab === "play") {
      nextCard();
    }
  }, [filteredCards, activeTab]);

  // Generate coaching tips based on usage patterns
  useEffect(() => {
    if (
      gameStats.totalCardsPlayed > 0 &&
      gameStats.totalCardsPlayed % 10 === 0
    ) {
      generateCoachingTip();
    }
  }, [gameStats.totalCardsPlayed]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Achievement Notification */}
      {newAchievement && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-rose-600 text-white px-8 py-4 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-lg">Achievement Unlocked!</div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <span className="text-xl">{newAchievement.icon}</span>
                <span>{newAchievement.name}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div>
                  <h1
                    className={`text-6xl ${loveLight.className} font-bold text-rose-600`}
                  >
                    Amoura
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {profileSet && (
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-lg border border-rose-200">
                  <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-rose-600" />
                  </div>
                  <span className="text-sm font-medium text-rose-700">
                    {coupleNames.partner1} & {coupleNames.partner2}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg border border-amber-200">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-bold text-amber-700">
                  {unlockedAchievements.size}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProfileDialog(true)}
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar Navigation */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative z-30 w-72 h-screen bg-white border-r border-gray-200 transition-transform duration-300 overflow-y-auto`}
        >
          <div className="p-6 space-y-3">
            {[
              { id: "play", icon: Heart, label: "Play Cards" },
              { id: "insights", icon: TrendingUp, label: "Insights" },
              { id: "timeline", icon: Calendar, label: "Timeline" },
              { id: "mindfulness", icon: Brain, label: "Mindfulness" },
              { id: "goals", icon: Target, label: "Goals & Challenges" },
              { id: "games", icon: Gamepad2, label: "Couple Games" },
              { id: "journal", icon: BookOpen, label: "Journal & Memories" },
              { id: "intimacy", icon: Thermometer, label: "Intimacy Tracker" },
              { id: "bucket-list", icon: MapIcon, label: "Bucket List" },
              { id: "coaching", icon: Lightbulb, label: "Coaching Tips" },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`w-full justify-start h-12 rounded-lg ${
                  activeTab === item.id
                    ? "bg-rose-600 text-white hover:bg-rose-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="p-6 border-t border-gray-200 mt-6">
            <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
              Quick Stats
            </h3>
            <div className="space-y-3">
              {[
                {
                  label: "Cards Played",
                  value: gameStats.totalCardsPlayed,
                  color: "rose",
                },
                {
                  label: "Favorites",
                  value: favoriteCards.size,
                  color: "amber",
                },
                {
                  label: "Memories",
                  value: journalEntries.length,
                  color: "blue",
                },
                {
                  label: "Achievements",
                  value: `${unlockedAchievements.size}/${achievements.length}`,
                  color: "purple",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <span
                    className={`font-bold text-xs px-2 py-1 rounded-lg ${
                      stat.color === "rose"
                        ? "bg-rose-100 text-rose-700"
                        : stat.color === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : stat.color === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : stat.color === "purple"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 p-6 lg:p-8">
          {/* PLAY CARDS TAB */}
          {activeTab === "play" && (
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
                        <h3 className="font-bold text-gray-800">
                          Ambient Music
                        </h3>
                        <p className="text-sm text-gray-600">
                          Set the perfect mood
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={musicEnabled}
                        onCheckedChange={toggleMusic}
                      />
                      {musicEnabled ? (
                        <Volume2 className="w-5 h-5 text-purple-600" />
                      ) : (
                        <VolumeX className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  {musicEnabled && (
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(musicTracks).map(([key, track]) => (
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
                            onValueChange={setSelectedCategory}
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
                          <Select
                            value={selectedLevel}
                            onValueChange={setSelectedLevel}
                          >
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
                        onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
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
                        {showFavoritesOnly
                          ? "Show All Cards"
                          : "Show Favorites Only"}
                      </Button>
                    </TabsContent>

                    <TabsContent value="timer" className="space-y-4 mt-6">
                      <div>
                        <label className="text-sm font-bold text-gray-700 mb-2 block">
                          Timer Duration
                        </label>
                        <Select
                          value={selectedTimer.toString()}
                          onValueChange={(value) =>
                            setSelectedTimer(Number.parseInt(value))
                          }
                        >
                          <SelectTrigger className="rounded-lg border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg">
                            {timerOptions.map((seconds) => (
                              <SelectItem
                                key={seconds}
                                value={seconds.toString()}
                              >
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
                                  ? pauseTimer
                                  : () => setTimerActive(true)
                              }
                              className="flex-1 rounded-lg border-rose-300 text-rose-600 hover:bg-rose-50"
                            >
                              {timerActive ? (
                                <Pause className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              onClick={resetTimer}
                              className="flex-1 rounded-lg border-rose-300 text-rose-600 hover:bg-rose-50 bg-transparent"
                            >
                              <RotateCcw className="w-4 h-4" />
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
                        <Select
                          value={selectedTheme}
                          onValueChange={setSelectedTheme}
                        >
                          <SelectTrigger className="rounded-lg border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg">
                            {themes.map((theme) => (
                              <SelectItem key={theme} value={theme}>
                                <div className="flex items-center gap-2">
                                  {theme !== "All" && getThemeIcon(theme)}
                                  {theme.charAt(0).toUpperCase() +
                                    theme.slice(1)}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div className="text-sm text-indigo-700 space-y-2">
                          <p className="flex items-center gap-2">
                            <Gift className="w-4 h-4" />{" "}
                            <strong>Holiday:</strong> Festive and
                            celebration-themed
                          </p>
                          <p className="flex items-center gap-2">
                            <Snowflake className="w-4 h-4" />{" "}
                            <strong>Winter:</strong> Cozy and warm moments
                          </p>
                          <p className="flex items-center gap-2">
                            <Flower className="w-4 h-4" />{" "}
                            <strong>Spring:</strong> Fresh starts and new
                            adventures
                          </p>
                          <p className="flex items-center gap-2">
                            <Sun className="w-4 h-4" /> <strong>Summer:</strong>{" "}
                            Fun and energetic activities
                          </p>
                          <p className="flex items-center gap-2">
                            <Heart className="w-4 h-4" />{" "}
                            <strong>Anniversary:</strong> Special milestone
                            moments
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Main Card Display */}
              {currentCard ? (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-8 lg:p-12">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-3 flex-wrap">
                        <Badge
                          className={`${getCategoryColor(
                            currentCard.category
                          )} rounded-full px-4 py-2 font-medium`}
                        >
                          {currentCard.category}
                        </Badge>
                        <Badge
                          className={`${getLevelColor(
                            currentCard.level
                          )} rounded-full px-4 py-2 font-medium`}
                        >
                          {currentCard.level}
                        </Badge>
                        {currentCard.theme !== "general" && (
                          <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 rounded-full px-4 py-2 font-medium flex items-center gap-2">
                            {getThemeIcon(currentCard.theme)}
                            {currentCard.theme}
                          </Badge>
                        )}
                        {currentCard.isCustom && (
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200 rounded-full px-4 py-2 font-medium">
                            Custom
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(currentCard.id)}
                          className="p-3 rounded-lg hover:bg-yellow-50"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              favoriteCards.has(currentCard.id)
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
                        {personalizePrompt(currentCard.prompt)}
                      </p>
                    </div>

                    {/* Photo Challenge Button */}
                    {currentCard.category === "Photo" && (
                      <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                              <Camera className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-green-800">
                                Photo Challenge
                              </h4>
                              <p className="text-sm text-green-600">
                                Capture this moment together
                              </p>
                            </div>
                          </div>
                          <Button
                            onClick={() =>
                              completePhotoChallenge(currentCard.id)
                            }
                            disabled={photoCompletions.has(currentCard.id)}
                            className={`rounded-lg ${
                              photoCompletions.has(currentCard.id)
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-green-600 hover:bg-green-700"
                            }`}
                          >
                            {photoCompletions.has(currentCard.id)
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
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-12 text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-xl mb-6">
                      No cards available with current filters
                    </p>
                    <Button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedLevel("All");
                        setSelectedTheme("All");
                        setShowFavoritesOnly(false);
                      }}
                      className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-8 py-3"
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: Plus,
                    label: "Add Card",
                    action: () => setShowCustomCardDialog(true),
                  },
                  { icon: MapPin, label: "Date Ideas", action: () => {} },
                  {
                    icon: BookOpen,
                    label: "Add Memory",
                    action: () => setActiveTab("journal"),
                  },
                  {
                    icon: Brain,
                    label: "Meditate",
                    action: () => setActiveTab("mindfulness"),
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
                      <strong>{filteredCards.length}</strong> cards available •{" "}
                      <strong>{usedCards.size}</strong> played • Session:{" "}
                      <strong>{gameStats.sessionCards}</strong>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <strong>{favoriteCards.size}</strong> favorites •{" "}
                      <strong>
                        {unlockedAchievements.size}/{achievements.length}
                      </strong>{" "}
                      achievements • <strong>{journalEntries.length}</strong>{" "}
                      memories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TIMELINE TAB */}
          {activeTab === "timeline" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Relationship Timeline
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Your beautiful journey together
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-6 py-3">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-gray-900">
                        Add Timeline Event
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Event Title
                        </label>
                        <Input
                          value={newTimelineEvent.title}
                          onChange={(e) =>
                            setNewTimelineEvent((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Our first date, anniversary, etc."
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Date
                        </label>
                        <Input
                          type="date"
                          value={newTimelineEvent.date}
                          onChange={(e) =>
                            setNewTimelineEvent((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Category
                        </label>
                        <Select
                          value={newTimelineEvent.category}
                          onValueChange={(value) =>
                            setNewTimelineEvent((prev) => ({
                              ...prev,
                              category: value,
                            }))
                          }
                        >
                          <SelectTrigger className="rounded-lg mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg">
                            <SelectItem value="milestone">Milestone</SelectItem>
                            <SelectItem value="date">Special Date</SelectItem>
                            <SelectItem value="achievement">
                              Achievement
                            </SelectItem>
                            <SelectItem value="memory">Memory</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Description
                        </label>
                        <Textarea
                          value={newTimelineEvent.description}
                          onChange={(e) =>
                            setNewTimelineEvent((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          placeholder="Describe this special moment..."
                          rows={3}
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <Button
                        onClick={addTimelineEvent}
                        className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
                      >
                        Add to Timeline
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-6">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="relative">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-rose-600 rounded-lg flex items-center justify-center">
                              <Heart className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-bold text-2xl text-gray-800">
                                {event.title}
                              </h3>
                              <Badge
                                className={`rounded-full px-4 py-2 font-medium ${
                                  event.category === "milestone"
                                    ? "bg-purple-100 text-purple-700 border-purple-200"
                                    : event.category === "date"
                                    ? "bg-rose-100 text-rose-700 border-rose-200"
                                    : event.category === "achievement"
                                    ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                    : "bg-blue-100 text-blue-700 border-blue-200"
                                }`}
                              >
                                {event.category}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">
                                {new Date(event.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute left-8 -bottom-3 w-1 h-6 bg-rose-300 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INSIGHTS TAB */}
          {activeTab === "insights" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Compatibility Insights
                </h2>
                <p className="text-gray-600 mt-2">
                  Discover your relationship strengths and growth areas
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Your Compatibility Score
                  </h3>
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-rose-600 mb-2">
                      {analyzeCompatibility().overall}/10
                    </div>
                    <p className="text-gray-600">Overall Compatibility</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5" />
                        Strengths
                      </h4>
                      <div className="space-y-2">
                        {analyzeCompatibility().strengths.length > 0 ? (
                          analyzeCompatibility().strengths.map(
                            (strength, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-green-700"
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                {strength}
                              </div>
                            )
                          )
                        ) : (
                          <p className="text-gray-500 italic">
                            Keep playing to discover your strengths!
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-orange-700 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Growth Areas
                      </h4>
                      <div className="space-y-2">
                        {analyzeCompatibility().growthAreas.length > 0 ? (
                          analyzeCompatibility().growthAreas.map(
                            (area, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-orange-700"
                              >
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                {area}
                              </div>
                            )
                          )
                        ) : (
                          <p className="text-gray-500 italic">
                            Great job! No major growth areas identified.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h4 className="font-bold text-gray-800">
                      Detailed Breakdown
                    </h4>
                    {[
                      {
                        key: "communicationStyle",
                        label: "Communication Style",
                      },
                      { key: "intimacyLevel", label: "Intimacy Level" },
                      { key: "adventureSeeker", label: "Adventure Seeking" },
                      { key: "emotionalDepth", label: "Emotional Depth" },
                      { key: "playfulness", label: "Playfulness" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-2 bg-rose-500 rounded-full"
                              style={{
                                width: `${
                                  (compatibilityData[item.key] / 10) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-600 w-8">
                            {compatibilityData[item.key].toFixed(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MINDFULNESS TAB */}
          {activeTab === "mindfulness" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Mindfulness & Meditation
                </h2>
                <p className="text-gray-600 mt-2">
                  Connect deeper through mindful practices
                </p>
              </div>

              {activeMeditation ? (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {activeMeditation.name}
                    </h3>
                    <p className="text-gray-600 mb-8">
                      {activeMeditation.description}
                    </p>

                    <div className="text-6xl font-bold text-green-600 mb-4">
                      {formatTime(meditationTimer)}
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => setMeditationActive(!meditationActive)}
                        className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-8 py-3"
                      >
                        {meditationActive ? (
                          <Pause className="w-5 h-5 mr-2" />
                        ) : (
                          <Play className="w-5 h-5 mr-2" />
                        )}
                        {meditationActive ? "Pause" : "Resume"}
                      </Button>
                      <Button
                        onClick={() => {
                          setActiveMeditation(null);
                          setMeditationActive(false);
                          setMeditationTimer(0);
                        }}
                        variant="outline"
                        className="rounded-lg px-8 py-3"
                      >
                        End Session
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {meditationExercises.map((exercise) => (
                    <div
                      key={exercise.id}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg text-gray-800">
                            {exercise.name}
                          </h3>
                          <Badge
                            className={`${
                              exercise.difficulty === "easy"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            } rounded-full px-3 py-1`}
                          >
                            {exercise.difficulty}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {exercise.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {exercise.duration}
                          </span>
                          <Button
                            onClick={() => startMeditation(exercise)}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-lg"
                          >
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* GOALS TAB */}
          {activeTab === "goals" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Goals & Challenges
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Set and track your relationship goals
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-6 py-3">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Goal
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-gray-900">
                        Add Relationship Goal
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Goal Title
                        </label>
                        <Input
                          value={newGoal.title}
                          onChange={(e) =>
                            setNewGoal((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Improve communication, plan date nights, etc."
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Description
                        </label>
                        <Textarea
                          value={newGoal.description}
                          onChange={(e) =>
                            setNewGoal((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          placeholder="Describe your goal in detail..."
                          rows={3}
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Deadline
                        </label>
                        <Input
                          type="date"
                          value={newGoal.deadline}
                          onChange={(e) =>
                            setNewGoal((prev) => ({
                              ...prev,
                              deadline: e.target.value,
                            }))
                          }
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Category
                        </label>
                        <Select
                          value={newGoal.category}
                          onValueChange={(value) =>
                            setNewGoal((prev) => ({ ...prev, category: value }))
                          }
                        >
                          <SelectTrigger className="rounded-lg mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg">
                            <SelectItem value="communication">
                              Communication
                            </SelectItem>
                            <SelectItem value="intimacy">Intimacy</SelectItem>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="personal">
                              Personal Growth
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        onClick={addRelationshipGoal}
                        className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
                      >
                        Add Goal
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Active Goals
                  </h3>
                  <div className="space-y-4">
                    {relationshipGoals.filter((goal) => !goal.completed)
                      .length > 0 ? (
                      relationshipGoals
                        .filter((goal) => !goal.completed)
                        .map((goal) => (
                          <div
                            key={goal.id}
                            className="bg-white rounded-lg border border-gray-200 shadow-sm"
                          >
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-gray-800">
                                  {goal.title}
                                </h4>
                                <Badge className="bg-blue-100 text-blue-700 rounded-full px-3 py-1">
                                  {goal.category}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-sm mb-4">
                                {goal.description}
                              </p>
                              {goal.deadline && (
                                <p className="text-gray-500 text-xs mb-4">
                                  Due:{" "}
                                  {new Date(goal.deadline).toLocaleDateString()}
                                </p>
                              )}
                              <Button
                                onClick={() => completeGoal(goal.id)}
                                className="bg-green-600 hover:bg-green-700 text-white rounded-lg"
                              >
                                Mark Complete
                              </Button>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">
                          No active goals yet. Add one to get started!
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Relationship Challenges
                  </h3>
                  <div className="space-y-4">
                    {relationshipChallenges.map((challenge) => (
                      <div
                        key={challenge.id}
                        className="bg-white rounded-lg border border-gray-200 shadow-sm"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-800">
                              {challenge.title}
                            </h4>
                            <Badge
                              className={`rounded-full px-3 py-1 ${
                                challenge.difficulty === "easy"
                                  ? "bg-green-100 text-green-700"
                                  : challenge.difficulty === "medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {challenge.difficulty}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            {challenge.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-xs">
                              {challenge.duration}
                            </span>
                            <Button
                              onClick={() => startChallenge(challenge)}
                              disabled={
                                activeChallenges.some(
                                  (ac) => ac.id === challenge.id
                                ) || completedChallenges.has(challenge.id)
                              }
                              className={`rounded-lg ${
                                activeChallenges.some(
                                  (ac) => ac.id === challenge.id
                                )
                                  ? "bg-green-600 hover:bg-green-700"
                                  : completedChallenges.has(challenge.id)
                                  ? "bg-gray-400"
                                  : "bg-orange-600 hover:bg-orange-700"
                              } text-white`}
                            >
                              {activeChallenges.some(
                                (ac) => ac.id === challenge.id
                              )
                                ? "Active"
                                : completedChallenges.has(challenge.id)
                                ? "Completed"
                                : "Start Challenge"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GAMES TAB */}
          {activeTab === "games" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Couple Games
                </h2>
                <p className="text-gray-600 mt-2">
                  Fun games to play together and learn more about each other
                </p>
              </div>

              {activeGame ? (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {activeGame.name}
                      </h3>
                      <Button
                        onClick={endGame}
                        variant="outline"
                        className="rounded-lg bg-transparent"
                      >
                        End Game
                      </Button>
                    </div>

                    {activeGame.id === 4 ? (
                      // Truth or Dare
                      <div className="text-center">
                        <div className="mb-6">
                          <Badge
                            className={`text-lg px-4 py-2 rounded-full ${
                              gameQuestionsList[currentGameQuestion]?.type ===
                              "truth"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {gameQuestionsList[
                              currentGameQuestion
                            ]?.type?.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-xl mb-8 text-gray-700">
                          {gameQuestionsList[currentGameQuestion]?.content}
                        </p>
                      </div>
                    ) : (
                      // Other games
                      <div className="text-center">
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">
                            Question {currentGameQuestion + 1} of{" "}
                            {gameQuestionsList.length}
                          </span>
                        </div>
                        <p className="text-xl mb-8 text-gray-700">
                          {gameQuestionsList[currentGameQuestion]}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={nextGameQuestion}
                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-8 py-3"
                      >
                        {currentGameQuestion < gameQuestionsList.length - 1
                          ? "Next Question"
                          : "Finish Game"}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coupleGames.map((game) => (
                    <div
                      key={game.id}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                            {game.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">
                              {game.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {game.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6">{game.description}</p>
                        <Button
                          onClick={() => startGameSession(game)}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                        >
                          Play Game
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Love Languages Assessment
                  </h3>

                  {takingAssessment ? (
                    <div>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            Partner {currentPartner} - Question{" "}
                            {assessmentStep + 1} of{" "}
                            {loveLanguageQuestions.length}
                          </span>
                          <span className="text-sm text-gray-500">
                            {Math.round(
                              ((assessmentStep +
                                (currentPartner - 1) *
                                  loveLanguageQuestions.length) /
                                (loveLanguageQuestions.length * 2)) *
                                100
                            )}
                            % Complete
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-rose-600 h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${
                                ((assessmentStep +
                                  (currentPartner - 1) *
                                    loveLanguageQuestions.length) /
                                  (loveLanguageQuestions.length * 2)) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-800 mb-6">
                          {loveLanguageQuestions[assessmentStep].question}
                        </h4>
                        <div className="space-y-3">
                          {loveLanguageQuestions[assessmentStep].options.map(
                            (option, index) => (
                              <Button
                                key={index}
                                onClick={() =>
                                  answerAssessmentQuestion(option.language)
                                }
                                variant="outline"
                                className="w-full text-left p-4 h-auto rounded-lg border-gray-200 hover:bg-rose-50 hover:border-rose-300"
                              >
                                {option.text}
                              </Button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : Object.keys(loveLanguageScores.partner1).length > 0 ? (
                    <div>
                      <p className="text-gray-600 mb-6">
                        Assessment completed! Here are your results:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2].map((partner) => (
                          <div
                            key={partner}
                            className="p-4 bg-gray-50 rounded-lg"
                          >
                            <h4 className="font-bold text-gray-800 mb-4">
                              Partner {partner} Results
                            </h4>
                            <div className="space-y-2">
                              {Object.entries(
                                loveLanguageScores[`partner${partner}`]
                              )
                                .sort(([, a], [, b]) => b - a)
                                .map(([language, score]) => (
                                  <div
                                    key={language}
                                    className="flex items-center justify-between"
                                  >
                                    <span className="text-sm text-gray-700 capitalize">
                                      {language === "words"
                                        ? "Words of Affirmation"
                                        : language === "acts"
                                        ? "Acts of Service"
                                        : language === "gifts"
                                        ? "Receiving Gifts"
                                        : language === "time"
                                        ? "Quality Time"
                                        : "Physical Touch"}
                                    </span>
                                    <div className="flex items-center gap-2">
                                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                                        <div
                                          className="h-2 bg-rose-500 rounded-full"
                                          style={{
                                            width: `${
                                              (score /
                                                loveLanguageQuestions.length) *
                                              100
                                            }%`,
                                          }}
                                        ></div>
                                      </div>
                                      <span className="text-sm font-medium text-gray-600 w-6">
                                        {score}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => {
                          setLoveLanguageScores({ partner1: {}, partner2: {} });
                          setAssessmentAnswers({});
                        }}
                        className="mt-6 bg-rose-600 hover:bg-rose-700 text-white rounded-lg"
                      >
                        Retake Assessment
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 mb-6">
                        Discover how you and your partner prefer to give and
                        receive love
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {loveLanguages.map((language) => (
                          <div
                            key={language.id}
                            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                                {language.icon}
                              </div>
                              <h4 className="font-medium text-gray-800">
                                {language.name}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              {language.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={startAssessment}
                        className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg"
                      >
                        Take Assessment
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* JOURNAL TAB */}
          {activeTab === "journal" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Journal & Memories
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Capture and cherish your special moments together
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-6 py-3">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Memory
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-gray-900">
                        Add Memory
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Title
                        </label>
                        <Input
                          value={newJournalEntry.title}
                          onChange={(e) =>
                            setNewJournalEntry((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Give your memory a title..."
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Memory
                        </label>
                        <Textarea
                          value={newJournalEntry.content}
                          onChange={(e) =>
                            setNewJournalEntry((prev) => ({
                              ...prev,
                              content: e.target.value,
                            }))
                          }
                          placeholder="Describe this special moment..."
                          rows={4}
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Mood
                        </label>
                        <Select
                          value={newJournalEntry.mood}
                          onValueChange={(value) =>
                            setNewJournalEntry((prev) => ({
                              ...prev,
                              mood: value,
                            }))
                          }
                        >
                          <SelectTrigger className="rounded-lg mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg">
                            {moods.map((mood) => (
                              <SelectItem key={mood} value={mood}>
                                <div className="flex items-center gap-2">
                                  <span>{getMoodEmoji(mood)}</span>
                                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        onClick={() => {
                          if (
                            newJournalEntry.title.trim() &&
                            newJournalEntry.content.trim()
                          ) {
                            const entry = {
                              id: Date.now(),
                              ...newJournalEntry,
                              date: new Date().toISOString(),
                            };
                            setJournalEntries((prev) => [entry, ...prev]);
                            setGameStats((prev) => ({
                              ...prev,
                              journalEntries: prev.journalEntries + 1,
                            }));
                            setNewJournalEntry({
                              title: "",
                              content: "",
                              mood: "happy",
                            });
                            checkAchievements("journal_entry");
                          }
                        }}
                        className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
                      >
                        Save Memory
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-6">
                {journalEntries.length > 0 ? (
                  journalEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-xl text-gray-800">
                            {entry.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">
                              {getMoodEmoji(entry.mood)}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(entry.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {entry.content}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-50 rounded-lg p-12 text-center">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No memories yet</p>
                    <p className="text-gray-400">
                      Start capturing your special moments together
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* INTIMACY TAB */}
          {activeTab === "intimacy" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Intimacy Tracker
                </h2>
                <p className="text-gray-600 mt-2">
                  Track different aspects of your intimate connection
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Add Intimacy Entry
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Type
                        </label>
                        <Select
                          value={intimacyEntry.type}
                          onValueChange={(value) =>
                            setIntimacyEntry((prev) => ({
                              ...prev,
                              type: value,
                            }))
                          }
                        >
                          <SelectTrigger className="rounded-lg mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg">
                            <SelectItem value="emotional">Emotional</SelectItem>
                            <SelectItem value="physical">Physical</SelectItem>
                            <SelectItem value="intellectual">
                              Intellectual
                            </SelectItem>
                            <SelectItem value="spiritual">Spiritual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Rating (1-10)
                        </label>
                        <Input
                          type="number"
                          min="1"
                          max="10"
                          value={intimacyEntry.rating}
                          onChange={(e) =>
                            setIntimacyEntry((prev) => ({
                              ...prev,
                              rating: Number.parseInt(e.target.value),
                            }))
                          }
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Date
                        </label>
                        <Input
                          type="date"
                          value={intimacyEntry.date}
                          onChange={(e) =>
                            setIntimacyEntry((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                          className="rounded-lg mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700">
                        Notes
                      </label>
                      <Textarea
                        value={intimacyEntry.notes}
                        onChange={(e) =>
                          setIntimacyEntry((prev) => ({
                            ...prev,
                            notes: e.target.value,
                          }))
                        }
                        placeholder="Describe this intimate moment..."
                        rows={6}
                        className="rounded-lg mt-1"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={addIntimacyEntry}
                    className="mt-6 bg-rose-600 hover:bg-rose-700 text-white rounded-lg"
                  >
                    Add Entry
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(intimacyData).map(([type, entries]) => (
                  <div
                    key={type}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-800 mb-4 capitalize">
                        {type}
                      </h3>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-rose-600">
                          {entries.length > 0
                            ? (
                                entries.reduce(
                                  (sum, entry) => sum + entry.rating,
                                  0
                                ) / entries.length
                              ).toFixed(1)
                            : "0.0"}
                        </div>
                        <p className="text-sm text-gray-500">Average Rating</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {entries.length} entries
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUCKET LIST TAB */}
          {activeTab === "bucket-list" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Couple Bucket List
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Dreams and adventures you want to experience together
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-6 py-3">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Item
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-gray-900">
                        Add Bucket List Item
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Title
                        </label>
                        <Input
                          value={newBucketItem.title}
                          onChange={(e) =>
                            setNewBucketItem((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Visit Paris, Learn to dance, etc."
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-gray-700">
                          Description
                        </label>
                        <Textarea
                          value={newBucketItem.description}
                          onChange={(e) =>
                            setNewBucketItem((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          placeholder="Describe this dream experience..."
                          rows={3}
                          className="rounded-lg mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-bold text-gray-700">
                            Category
                          </label>
                          <Select
                            value={newBucketItem.category}
                            onValueChange={(value) =>
                              setNewBucketItem((prev) => ({
                                ...prev,
                                category: value,
                              }))
                            }
                          >
                            <SelectTrigger className="rounded-lg mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                              <SelectItem value="travel">Travel</SelectItem>
                              <SelectItem value="adventure">
                                Adventure
                              </SelectItem>
                              <SelectItem value="learning">Learning</SelectItem>
                              <SelectItem value="experience">
                                Experience
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-bold text-gray-700">
                            Priority
                          </label>
                          <Select
                            value={newBucketItem.priority}
                            onValueChange={(value) =>
                              setNewBucketItem((prev) => ({
                                ...prev,
                                priority: value,
                              }))
                            }
                          >
                            <SelectTrigger className="rounded-lg mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button
                        onClick={addBucketListItem}
                        className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
                      >
                        Add to Bucket List
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bucketList.length > 0 ? (
                  bucketList.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg text-gray-800">
                            {item.title}
                          </h3>
                          <Badge
                            className={`rounded-full px-3 py-1 ${
                              item.priority === "high"
                                ? "bg-red-100 text-red-700"
                                : item.priority === "medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-100 text-blue-700 rounded-full px-3 py-1">
                            {item.category}
                          </Badge>
                          <Button
                            onClick={() => {
                              setBucketList((prev) =>
                                prev.map((bucketItem) =>
                                  bucketItem.id === item.id
                                    ? {
                                        ...bucketItem,
                                        completed: !bucketItem.completed,
                                      }
                                    : bucketItem
                                )
                              );
                            }}
                            variant={item.completed ? "default" : "outline"}
                            className="rounded-lg"
                          >
                            {item.completed ? "Completed! ✓" : "Mark Done"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full bg-gray-50 rounded-lg p-12 text-center">
                    <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      No bucket list items yet
                    </p>
                    <p className="text-gray-400">
                      Start adding your dream experiences together
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* COACHING TAB */}
          {activeTab === "coaching" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Relationship Coaching
                </h2>
                <p className="text-gray-600 mt-2">
                  Expert tips and advice to strengthen your relationship
                </p>
              </div>

              {currentTip && (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-800">
                          {currentTip.title}
                        </h3>
                        <Badge className="bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 mt-1">
                          {currentTip.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {currentTip.content}
                    </p>
                  </div>
                </div>
              )}

              <div className="text-center">
                <Button
                  onClick={generateCoachingTip}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg px-8 py-3"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Get New Tip
                </Button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Relationship Health Check
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-4">
                        Your Progress
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Cards Played</span>
                          <span className="font-bold text-gray-800">
                            {gameStats.totalCardsPlayed}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">
                            Deep Conversations
                          </span>
                          <span className="font-bold text-gray-800">
                            {gameStats.deepDiveCompleted}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">
                            Memories Captured
                          </span>
                          <span className="font-bold text-gray-800">
                            {journalEntries.length}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Goals Set</span>
                          <span className="font-bold text-gray-800">
                            {relationshipGoals.length}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-4">
                        Recommendations
                      </h4>
                      <div className="space-y-3">
                        {gameStats.deepDiveCompleted < 5 && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-700">
                              Try more Deep Dive cards to strengthen emotional
                              connection
                            </p>
                          </div>
                        )}
                        {journalEntries.length < 3 && (
                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-700">
                              Start capturing memories in your journal
                            </p>
                          </div>
                        )}
                        {relationshipGoals.length === 0 && (
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <p className="text-sm text-purple-700">
                              Set some relationship goals to work towards
                              together
                            </p>
                          </div>
                        )}
                        {gameStats.meditationSessions < 1 && (
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <p className="text-sm text-orange-700">
                              Try mindfulness exercises to deepen your
                              connection
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Profile Setup Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Couple Profile
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700">
                Partner 1 Name
              </label>
              <Input
                value={coupleNames.partner1}
                onChange={(e) =>
                  setCoupleNames((prev) => ({
                    ...prev,
                    partner1: e.target.value,
                  }))
                }
                placeholder="Enter first name"
                className="rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700">
                Partner 2 Name
              </label>
              <Input
                value={coupleNames.partner2}
                onChange={(e) =>
                  setCoupleNames((prev) => ({
                    ...prev,
                    partner2: e.target.value,
                  }))
                }
                placeholder="Enter second name"
                className="rounded-lg mt-1"
              />
            </div>
            <Button
              onClick={saveProfile}
              className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
            >
              Save Profile
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Custom Card Dialog */}
      <Dialog
        open={showCustomCardDialog}
        onOpenChange={setShowCustomCardDialog}
      >
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Create Custom Card
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-bold text-gray-700">
                  Category
                </label>
                <Select
                  value={customCardForm.category}
                  onValueChange={(value) =>
                    setCustomCardForm((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger className="rounded-lg mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    {categories
                      .filter((c) => c !== "All")
                      .map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700">Level</label>
                <Select
                  value={customCardForm.level}
                  onValueChange={(value) =>
                    setCustomCardForm((prev) => ({ ...prev, level: value }))
                  }
                >
                  <SelectTrigger className="rounded-lg mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    {levels
                      .filter((l) => l !== "All")
                      .map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700">Theme</label>
              <Select
                value={customCardForm.theme}
                onValueChange={(value) =>
                  setCustomCardForm((prev) => ({ ...prev, theme: value }))
                }
              >
                <SelectTrigger className="rounded-lg mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {themes
                    .filter((t) => t !== "All")
                    .map((theme) => (
                      <SelectItem key={theme} value={theme}>
                        <div className="flex items-center gap-2">
                          {getThemeIcon(theme)}
                          {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </div>
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700">Prompt</label>
              <Textarea
                value={customCardForm.prompt}
                onChange={(e) =>
                  setCustomCardForm((prev) => ({
                    ...prev,
                    prompt: e.target.value,
                  }))
                }
                placeholder="Write your custom prompt..."
                rows={3}
                className="rounded-lg mt-1"
              />
            </div>
            <Button
              onClick={addCustomCard}
              className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg"
              disabled={!customCardForm.prompt.trim()}
            >
              Add Custom Card
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <div className="text-center py-12 text-gray-500">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-rose-600 fill-rose-600" />
          </div>
          <p className="text-sm font-medium">
            Made with 💕 for couples who want to connect deeper
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Building stronger relationships, one card at a time
          </p>
        </div>
      </div>
    </div>
  );
}

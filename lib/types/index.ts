// Card Types
export interface Card {
  id: number;
  category: string;
  level: string;
  prompt: string;
  isCustom: boolean;
  theme: string;
}

export interface CustomCardForm {
  category: string;
  level: string;
  prompt: string;
  theme: string;
}

// Couple Profile Types
export interface CoupleNames {
  partner1: string;
  partner2: string;
}

// Timeline Event Types
export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  category: "milestone" | "date" | "achievement" | "memory";
  createdAt: string;
}

export interface NewTimelineEvent {
  title: string;
  description: string;
  date: string;
  category: "milestone" | "date" | "achievement" | "memory";
}

// Compatibility Types
export interface CompatibilityData {
  communicationStyle: number;
  intimacyLevel: number;
  adventureSeeker: number;
  emotionalDepth: number;
  playfulness: number;
}

export interface CompatibilityAnalysis {
  overall: number;
  strengths: string[];
  growthAreas: string[];
}

// Meditation Types
export interface MeditationExercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
}

// Reminder Types
export interface AnniversaryReminder {
  id: number;
  title: string;
  date: string;
  type: string;
  recurring: boolean;
  createdAt: string;
}

export interface NewReminder {
  title: string;
  date: string;
  type: string;
  recurring: boolean;
}

// Game Types
export interface CoupleGame {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
}

export interface GameProgress {
  [key: string]: any;
}

// Goal Types
export interface RelationshipGoal {
  id: number;
  title: string;
  description: string;
  deadline: string;
  category: string;
  completed: boolean;
  createdAt: string;
  progress: number;
}

export interface NewGoal {
  title: string;
  description: string;
  deadline: string;
  category: string;
}

// Bucket List Types
export interface BucketListItem {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: "low" | "medium" | "high";
  completed?: boolean;
  createdAt: string;
}

export interface NewBucketItem {
  title: string;
  description: string;
  category: string;
  priority: "low" | "medium" | "high";
}

// Journal Types
export interface JournalEntry {
  title: string;
  content: string;
  mood: string;
  date?: string;
  id?: number;
}

// Challenge Types
export interface RelationshipChallenge {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  difficulty: string;
  startDate?: string;
  progress?: number;
  isActive?: boolean;
}

// Stats Types
export interface GameStats {
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
}

// Achievement Types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

// Love Language Types
export interface LoveLanguage {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface LoveLanguageScores {
  partner1: Record<string, number>;
  partner2: Record<string, number>;
}

// Intimacy Types
export interface IntimacyEntry {
  id?: number;
  type: string;
  rating: number;
  notes: string;
  date: string;
  createdAt?: string;
}

export interface IntimacyData {
  emotional: IntimacyEntry[];
  physical: IntimacyEntry[];
  intellectual: IntimacyEntry[];
  spiritual: IntimacyEntry[];
}

// Coaching Types
export interface CoachingTip {
  title: string;
  content: string;
  category: string;
}

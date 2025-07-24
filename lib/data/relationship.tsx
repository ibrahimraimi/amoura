import {
  BookOpen,
  Brain,
  Camera,
  Clock,
  Coffee,
  Gift,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  MessageSquare,
  Plane,
  Star,
  Sun,
  Target,
  Users,
  Utensils,
  Zap,
} from "lucide-react";

// Date night suggestions
export const dateNightIdeas = {
  Talk: [
    {
      icon: <Coffee className="w-4 h-4" />,
      title: "Coffee Shop Deep Dive",
      description:
        "Find a cozy café and continue your conversation over warm drinks",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: "Bookstore Browse",
      description:
        "Explore a bookstore and share your favorite books with each other",
    },
    {
      icon: <Home className="w-4 h-4" />,
      title: "Home Wine Tasting",
      description:
        "Create a wine tasting experience at home with conversation starters",
    },
  ],
  Touch: [
    {
      icon: <Heart className="w-4 h-4" />,
      title: "Couples Massage",
      description: "Book a couples massage or give each other massages at home",
    },
    {
      icon: <Sun className="w-4 h-4" />,
      title: "Beach Walk",
      description:
        "Take a romantic walk on the beach, holding hands and feeling connected",
    },
    {
      icon: <Home className="w-4 h-4" />,
      title: "Dance at Home",
      description:
        "Put on your favorite music and slow dance in your living room",
    },
  ],
  Dare: [
    {
      icon: <Plane className="w-4 h-4" />,
      title: "Adventure Date",
      description:
        "Try something completely new together - skydiving, rock climbing, or escape room",
    },
    {
      icon: <Camera className="w-4 h-4" />,
      title: "Photo Scavenger Hunt",
      description: "Create a fun photo challenge around your city",
    },
    {
      icon: <Gift className="w-4 h-4" />,
      title: "Surprise Date",
      description:
        "Plan a surprise date for each other without revealing the details",
    },
  ],
  "Deep Dive": [
    {
      icon: <Star className="w-4 h-4" />,
      title: "Stargazing Night",
      description:
        "Find a quiet spot to look at stars and share your deepest thoughts",
    },
    {
      icon: <Utensils className="w-4 h-4" />,
      title: "Cooking Together",
      description:
        "Prepare a meal together while discussing your dreams and goals",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Memory Lane Drive",
      description: "Visit places that are meaningful to your relationship",
    },
  ],
  Wild: [
    {
      icon: <Heart className="w-4 h-4" />,
      title: "Romantic Getaway",
      description: "Book a spontaneous weekend trip to a romantic destination",
    },
    {
      icon: <Home className="w-4 h-4" />,
      title: "Transform Your Space",
      description:
        "Turn your bedroom into a romantic paradise with candles and music",
    },
    {
      icon: <Gift className="w-4 h-4" />,
      title: "Role Play Date",
      description:
        "Dress up and pretend to meet for the first time at a fancy restaurant",
    },
  ],
};

// Relationship challenges
export const relationshipChallenges = [
  {
    id: 1,
    title: "Daily Appreciation Week",
    description:
      "Tell your partner one thing you appreciate about them every day for a week",
    duration: "7 days",
    category: "gratitude",
    difficulty: "easy",
  },
  {
    id: 2,
    title: "No Phone Date Nights",
    description:
      "Have three date nights this month without any phones or distractions",
    duration: "1 month",
    category: "connection",
    difficulty: "medium",
  },
  {
    id: 3,
    title: "Love Language Challenge",
    description:
      "Focus on expressing love in your partner's primary love language for two weeks",
    duration: "14 days",
    category: "love languages",
    difficulty: "medium",
  },
  {
    id: 4,
    title: "Adventure Together",
    description:
      "Try 5 new activities together that neither of you have done before",
    duration: "1 month",
    category: "adventure",
    difficulty: "hard",
  },
  {
    id: 5,
    title: "Morning Ritual",
    description:
      "Create a special morning routine you do together every day for 21 days",
    duration: "21 days",
    category: "habits",
    difficulty: "medium",
  },
];

// Mini Games
export const coupleGames = [
  {
    id: 1,
    name: "20 Questions",
    description: "Take turns asking each other 20 personal questions",
    icon: <MessageSquare className="w-6 h-6" />,
    duration: "15-20 min",
  },
  {
    id: 2,
    name: "Would You Rather",
    description: "Romantic and spicy 'would you rather' scenarios",
    icon: <Brain className="w-6 h-6" />,
    duration: "10-15 min",
  },
  {
    id: 3,
    name: "Memory Match",
    description: "Test how well you know each other's preferences",
    icon: <Zap className="w-6 h-6" />,
    duration: "10 min",
  },
  {
    id: 4,
    name: "Truth or Dare",
    description: "Classic game with intimate twists for couples",
    icon: <Target className="w-6 h-6" />,
    duration: "20-30 min",
  },
];

// Love Languages
export const loveLanguages = [
  {
    id: "words",
    name: "Words of Affirmation",
    description: "Verbal and written expressions of love",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    id: "acts",
    name: "Acts of Service",
    description: "Doing helpful things for your partner",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: "gifts",
    name: "Receiving Gifts",
    description: "Thoughtful presents and surprises",
    icon: <Gift className="w-6 h-6" />,
  },
  {
    id: "time",
    name: "Quality Time",
    description: "Focused, uninterrupted time together",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: "touch",
    name: "Physical Touch",
    description: "Physical expressions of love and affection",
    icon: <Users className="w-6 h-6" />,
  },
];

// Meditation exercises
export const meditationExercises = [
  {
    id: 1,
    name: "Synchronized Breathing",
    description: "Breathe together in harmony for 5 minutes",
    duration: "5 min",
    difficulty: "easy",
  },
  {
    id: 2,
    name: "Gratitude Meditation",
    description: "Share what you're grateful for about each other",
    duration: "10 min",
    difficulty: "easy",
  },
  {
    id: 3,
    name: "Eye Gazing",
    description: "Maintain loving eye contact in silence",
    duration: "3 min",
    difficulty: "medium",
  },
  {
    id: 4,
    name: "Heart Connection",
    description: "Place hands on each other's hearts and sync your breathing",
    duration: "7 min",
    difficulty: "medium",
  },
];

export const achievements = [
  {
    id: "first_game",
    name: "First Connection",
    description: "Played your first card",
    icon: "🎯",
    unlocked: false,
  },
  {
    id: "favorite_collector",
    name: "Memory Keeper",
    description: "Favorited 5 cards",
    icon: "⭐",
    unlocked: false,
  },
  {
    id: "custom_creator",
    name: "Personal Touch",
    description: "Created your first custom card",
    icon: "✨",
    unlocked: false,
  },
  {
    id: "timer_master",
    name: "Time Keeper",
    description: "Used the timer 10 times",
    icon: "⏰",
    unlocked: false,
  },
  {
    id: "photo_lover",
    name: "Picture Perfect",
    description: "Completed 5 photo challenges",
    icon: "📸",
    unlocked: false,
  },
  {
    id: "deep_diver",
    name: "Soul Searcher",
    description: "Completed 10 Deep Dive cards",
    icon: "🌊",
    unlocked: false,
  },
  {
    id: "spice_master",
    name: "Heat Wave",
    description: "Completed 15 Spicy/Explicit cards",
    icon: "🌶️",
    unlocked: false,
  },
  {
    id: "session_warrior",
    name: "Marathon Lovers",
    description: "Played 50 cards in one session",
    icon: "🏃‍♂️",
    unlocked: false,
  },
  {
    id: "journal_keeper",
    name: "Memory Maker",
    description: "Added 10 journal entries",
    icon: "📖",
    unlocked: false,
  },
  {
    id: "challenge_master",
    name: "Goal Getter",
    description: "Completed 3 relationship challenges",
    icon: "🎯",
    unlocked: false,
  },
  {
    id: "timeline_creator",
    name: "Story Teller",
    description: "Added 5 timeline events",
    icon: "📅",
    unlocked: false,
  },
  {
    id: "meditation_master",
    name: "Zen Couple",
    description: "Completed 10 meditation sessions",
    icon: "🧘",
    unlocked: false,
  },
];

export const themes = [
  "All",
  "general",
  "holiday",
  "anniversary",
  "winter",
  "spring",
  "summer",
  "fall",
];

export const moods = [
  "happy",
  "romantic",
  "excited",
  "thoughtful",
  "grateful",
  "playful",
];

export const tips = [
  {
    title: "Communication Boost",
    content:
      "Try the 'Daily Check-in' - spend 10 minutes each day sharing your highs and lows.",
    category: "communication",
  },
  {
    title: "Intimacy Builder",
    content:
      "Physical touch releases oxytocin. Try holding hands for 2 minutes while talking.",
    category: "intimacy",
  },
  {
    title: "Adventure Together",
    content:
      "Plan a 'Yes Day' where you both say yes to each other's suggestions for 24 hours.",
    category: "adventure",
  },
  {
    title: "Emotional Connection",
    content:
      "Practice the '36 Questions' exercise to deepen your emotional bond.",
    category: "emotional",
  },
];

// Game Questions and Content
export const gameQuestions = {
  1: [
    // 20 Questions
    "What's my biggest fear?",
    "What's my favorite childhood memory?",
    "What's one thing I've never told you?",
    "What's my dream vacation destination?",
    "What's my biggest goal in life?",
    "What makes me feel most loved?",
    "What's my favorite thing about our relationship?",
    "What's something I want to learn?",
    "What's my biggest insecurity?",
    "What's my favorite way to spend a weekend?",
    "What's one thing I admire about you?",
    "What's my love language?",
    "What's my biggest pet peeve?",
    "What's my favorite memory of us?",
    "What's something I'm proud of?",
    "What's my biggest regret?",
    "What's my favorite season and why?",
    "What's one thing I want to change about myself?",
    "What's my biggest dream?",
    "What makes me happiest?",
  ],
  2: [
    // Would You Rather
    "Would you rather have a romantic dinner at home or go out to a fancy restaurant?",
    "Would you rather travel the world together or buy a dream house?",
    "Would you rather know each other's thoughts or feel each other's emotions?",
    "Would you rather have more time together or more money to spend?",
    "Would you rather be able to read my mind or have me read yours?",
    "Would you rather have a big wedding or elope somewhere romantic?",
    "Would you rather live in the city or countryside together?",
    "Would you rather have kids now or travel first?",
    "Would you rather have date night every week or a monthly weekend getaway?",
    "Would you rather be famous together or live a quiet private life?",
  ],
  3: [
    // Memory Match
    "What's my favorite color?",
    "What's my biggest fear?",
    "What's my favorite food?",
    "What's my dream job?",
    "What's my favorite movie?",
    "What's my biggest pet peeve?",
    "What's my favorite season?",
    "What's my love language?",
    "What's my favorite way to relax?",
    "What's my biggest goal?",
  ],
  4: [
    // Truth or Dare
    {
      type: "truth",
      content: "What's the most romantic thing I've ever done for you?",
    },
    { type: "dare", content: "Give me a 30-second massage" },
    { type: "truth", content: "What's your biggest fantasy about us?" },
    { type: "dare", content: "Whisper something sexy in my ear" },
    {
      type: "truth",
      content: "What's one thing you want to try in our relationship?",
    },
    { type: "dare", content: "Kiss me like it's our first kiss" },
    {
      type: "truth",
      content: "What's your favorite physical feature of mine?",
    },
    { type: "dare", content: "Dance with me for 2 minutes" },
    { type: "truth", content: "What's the most attractive thing about me?" },
    { type: "dare", content: "Tell me three things you love about me" },
  ],
};

// Love Language Assessment Questions
export const loveLanguageQuestions = [
  {
    question: "I feel most loved when my partner...",
    options: [
      {
        text: "Tells me they love me and gives me compliments",
        language: "words",
      },
      {
        text: "Helps me with tasks and does things for me",
        language: "acts",
      },
      { text: "Gives me thoughtful gifts and surprises", language: "gifts" },
      {
        text: "Spends quality time with me without distractions",
        language: "time",
      },
      {
        text: "Hugs, kisses, and shows physical affection",
        language: "touch",
      },
    ],
  },
  {
    question: "What makes me feel most appreciated?",
    options: [
      {
        text: "Hearing 'thank you' and words of appreciation",
        language: "words",
      },
      {
        text: "Having my partner help with chores or tasks",
        language: "acts",
      },
      {
        text: "Receiving small tokens of love and thoughtfulness",
        language: "gifts",
      },
      {
        text: "Having my partner's full attention during conversations",
        language: "time",
      },
      {
        text: "Getting hugs, hand-holding, and physical closeness",
        language: "touch",
      },
    ],
  },
  {
    question: "I prefer to show love by...",
    options: [
      {
        text: "Expressing my feelings with words and compliments",
        language: "words",
      },
      { text: "Doing helpful things and acts of service", language: "acts" },
      { text: "Giving meaningful gifts and surprises", language: "gifts" },
      {
        text: "Spending focused, uninterrupted time together",
        language: "time",
      },
      { text: "Being physically affectionate and close", language: "touch" },
    ],
  },
  {
    question: "What hurts me most in a relationship?",
    options: [
      {
        text: "Harsh words or lack of verbal affirmation",
        language: "words",
      },
      {
        text: "My partner not helping when I need support",
        language: "acts",
      },
      {
        text: "Forgotten special occasions or lack of thoughtful gestures",
        language: "gifts",
      },
      {
        text: "Feeling ignored or not getting quality time",
        language: "time",
      },
      { text: "Lack of physical affection and touch", language: "touch" },
    ],
  },
  {
    question: "I feel most connected when we...",
    options: [
      {
        text: "Have deep conversations and share our thoughts",
        language: "words",
      },
      {
        text: "Work together on projects or help each other",
        language: "acts",
      },
      {
        text: "Exchange meaningful gifts or tokens of love",
        language: "gifts",
      },
      {
        text: "Spend uninterrupted time together doing activities",
        language: "time",
      },
      { text: "Are physically close and affectionate", language: "touch" },
    ],
  },
];

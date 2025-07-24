export const getCategoryColor = (category: string) => {
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

export const getLevelColor = (level: string) => {
  const colors = {
    Soft: "bg-green-100 text-green-800 border-green-200",
    Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Spicy: "bg-orange-100 text-orange-800 border-orange-200",
    Explicit: "bg-red-100 text-red-800 border-red-200",
  };
  return colors[level] || "bg-gray-100 text-gray-800 border-gray-200";
};

export const getMoodEmoji = (mood: string) => {
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

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

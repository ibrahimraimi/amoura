export const getThemeIconName = (theme: string): string => {
  const icons: Record<string, string> = {
    holiday: "Gift",
    winter: "Snowflake",
    spring: "Flower",
    summer: "Sun",
    fall: "Leaf",
    anniversary: "Heart",
    general: "Calendar",
  };

  return icons[theme] || "Calendar";
};

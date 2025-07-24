"use client";

import { useState } from "react";

export type TimelineEvent = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  createdAt: string;
};

export function useTimeline() {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([
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

  const [newTimelineEvent, setNewTimelineEvent] = useState<
    Omit<TimelineEvent, "id" | "createdAt">
  >({
    title: "",
    description: "",
    date: "",
    category: "milestone",
  });

  const addTimelineEvent = () => {
    if (!newTimelineEvent.title.trim() || !newTimelineEvent.date) return;

    const event = {
      id: Date.now(),
      ...newTimelineEvent,
      createdAt: new Date().toISOString(),
    };

    setTimelineEvents((prev) =>
      [...prev, event].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );

    setNewTimelineEvent({
      title: "",
      description: "",
      date: "",
      category: "milestone",
    });

    return event;
  };

  const deleteTimelineEvent = (id: number) => {
    setTimelineEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return {
    timelineEvents,
    newTimelineEvent,
    setNewTimelineEvent,
    addTimelineEvent,
    deleteTimelineEvent,
  };
}

"use client";

import { useState } from "react";
import { getMoodEmoji } from "../utils/ui-helpers";

export type JournalEntry = {
  id: number;
  title: string;
  content: string;
  mood: string;
  date: string;
};

export function useJournal() {
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [newJournalEntry, setNewJournalEntry] = useState({
    title: "",
    content: "",
    mood: "happy",
  });

  const addJournalEntry = () => {
    if (!newJournalEntry.title.trim() || !newJournalEntry.content.trim())
      return;

    const entry = {
      id: Date.now(),
      ...newJournalEntry,
      date: new Date().toISOString(),
    };

    setJournalEntries((prev) => [entry, ...prev]);
    setNewJournalEntry({
      title: "",
      content: "",
      mood: "happy",
    });

    return entry;
  };

  const deleteJournalEntry = (id: number) => {
    setJournalEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return {
    journalEntries,
    newJournalEntry,
    setNewJournalEntry,
    addJournalEntry,
    deleteJournalEntry,
    getMoodEmoji,
  };
}

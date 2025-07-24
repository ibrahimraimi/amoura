"use client";

import { TimelineEvent, useTimeline } from "@/lib/hooks/use-timeline";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Heart, Plus } from "lucide-react";
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

export function TimelinePage() {
  const {
    timelineEvents,
    newTimelineEvent,
    setNewTimelineEvent,
    addTimelineEvent,
  } = useTimeline();

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "milestone":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "date":
        return "bg-rose-100 text-rose-700 border-rose-200";
      case "achievement":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Relationship Timeline
          </h2>
          <p className="text-gray-600 mt-2">Your beautiful journey together</p>
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
                <label className="text-sm font-bold text-gray-700">Date</label>
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
                    <SelectItem value="achievement">Achievement</SelectItem>
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
          <TimelineEventCard
            key={event.id}
            event={event}
            isLast={index === timelineEvents.length - 1}
            getCategoryStyle={getCategoryStyle}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineEventCardProps {
  event: TimelineEvent;
  isLast: boolean;
  getCategoryStyle: (category: string) => string;
}

function TimelineEventCard({
  event,
  isLast,
  getCategoryStyle,
}: TimelineEventCardProps) {
  return (
    <div className="relative">
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
                  className={`rounded-full px-4 py-2 font-medium ${getCategoryStyle(
                    event.category
                  )}`}
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
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="absolute left-8 -bottom-3 w-1 h-6 bg-rose-300 rounded-full"></div>
      )}
    </div>
  );
}

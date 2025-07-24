"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lovers_Quarrel } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Heart,
  TrendingUp,
  Brain,
  BookOpen,
  Calendar,
  MapIcon,
  Target,
  Gamepad2,
  Thermometer,
  Lightbulb,
  Menu,
  Users,
  Trophy,
  Settings,
} from "lucide-react";

const loveLight = Lovers_Quarrel({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-love-light",
});

const navigation = [
  { id: "play", href: "/play", icon: Heart, label: "Play Cards" },
  { id: "insights", href: "/insights", icon: TrendingUp, label: "Insights" },
  { id: "timeline", href: "/timeline", icon: Calendar, label: "Timeline" },
  {
    id: "mindfulness",
    href: "/mindfulness",
    icon: Brain,
    label: "Mindfulness",
  },
  { id: "goals", href: "/goals", icon: Target, label: "Goals & Challenges" },
  { id: "games", href: "/games", icon: Gamepad2, label: "Couple Games" },
  {
    id: "journal",
    href: "/journal",
    icon: BookOpen,
    label: "Journal & Memories",
  },
  {
    id: "intimacy",
    href: "/intimacy",
    icon: Thermometer,
    label: "Intimacy Tracker",
  },
  {
    id: "bucket-list",
    href: "/bucket-list",
    icon: MapIcon,
    label: "Bucket List",
  },
  {
    id: "coaching",
    href: "/coaching",
    icon: Lightbulb,
    label: "Coaching Tips",
  },
];

export default function MainLayout({
  children,
  stats,
}: {
  children: React.ReactNode;
  stats?: {
    totalCardsPlayed: number;
    favoritesCount: number;
    memoriesCount: number;
    achievementsCount: number;
    totalAchievements: number;
  };
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [coupleNames, setCoupleNames] = useState({
    partner1: "",
    partner2: "",
  });
  const [profileSet, setProfileSet] = useState(false);
  const [unlockedAchievements] = useState<Set<string>>(new Set());

  const saveProfile = () => {
    if (coupleNames.partner1.trim() && coupleNames.partner2.trim()) {
      setProfileSet(true);
      setShowProfileDialog(false);
    }
  };

  // Default stats if not provided
  const displayStats = stats || {
    totalCardsPlayed: 0,
    favoritesCount: 0,
    memoriesCount: 0,
    achievementsCount: 0,
    totalAchievements: 12,
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={pathname.includes(item.href) ? "default" : "ghost"}
                className={`w-full justify-start h-12 rounded-lg ${
                  pathname.includes(item.href)
                    ? "bg-rose-600 text-white hover:bg-rose-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSidebarOpen(false)}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Link>
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
                  value: displayStats.totalCardsPlayed,
                  color: "rose",
                },
                {
                  label: "Favorites",
                  value: displayStats.favoritesCount,
                  color: "amber",
                },
                {
                  label: "Memories",
                  value: displayStats.memoriesCount,
                  color: "blue",
                },
                {
                  label: "Achievements",
                  value: `${displayStats.achievementsCount}/${displayStats.totalAchievements}`,
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
        <div className="flex-1 p-6 lg:p-8">{children}</div>
      </div>

      {/* Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Your Couple Profile
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
                placeholder="Your name"
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
                placeholder="Your partner's name"
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
    </div>
  );
}

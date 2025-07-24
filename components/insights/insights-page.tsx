"use client";

import { useCompatibility } from "@/lib/hooks/use-compatibility";
import { Trophy, Target } from "lucide-react";

export function InsightsPage() {
  const { compatibilityData, analyzeCompatibility } = useCompatibility();

  return (
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
                  analyzeCompatibility().strengths.map((strength, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-green-700"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {strength}
                    </div>
                  ))
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
                  analyzeCompatibility().growthAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-orange-700"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      {area}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">
                    Great job! No major growth areas identified.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h4 className="font-bold text-gray-800">Detailed Breakdown</h4>
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
              <div key={item.key} className="flex items-center justify-between">
                <span className="text-gray-700">{item.label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-rose-500 rounded-full"
                      style={{
                        width: `${
                          (compatibilityData[
                            item.key as keyof typeof compatibilityData
                          ] /
                            10) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-8">
                    {compatibilityData[
                      item.key as keyof typeof compatibilityData
                    ].toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

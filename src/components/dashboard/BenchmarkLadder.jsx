import { useMemo } from "react";

export default function BenchmarkLadder() {
  const assessmentData = useMemo(() => {
    const saved = localStorage.getItem("leipResults");
    return saved ? JSON.parse(saved) : null;
  }, []);

  const score = assessmentData?.readinessPercentage || 0;

  // Determine current level
  const currentLevel = score < 40 ? "Emerging" : score < 70 ? "Growing" : "Optimized";

  const levels = ["Industry Leadership", "Optimized", "Growing", "Emerging"];
  const nextLevel =
    currentLevel === "Emerging"
      ? "Growing"
      : currentLevel === "Growing"
      ? "Optimized"
      : "Industry Leadership";

  const gapToNextLevel =
    currentLevel === "Emerging"
      ? 40 - score
      : currentLevel === "Growing"
      ? 70 - score
      : currentLevel === "Optimized"
      ? 90 - score
      : 0;

  const progressPercentage =
    currentLevel === "Emerging"
      ? Math.round((score / 40) * 100)
      : currentLevel === "Growing"
      ? Math.round(((score - 40) / 30) * 100)
      : currentLevel === "Optimized"
      ? Math.round(((score - 70) / 20) * 100)
      : 100;
      
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Executive Benchmark Ladder
      </h2>

      <div className="max-w-md mx-auto">
        {levels.map((level, index) => {
          const isActive = currentLevel === level;
          
          return (
            <div key={level} className="relative">
              <div
                className={`
                  border rounded-xl p-4 mb-2 text-center font-semibold transition-colors
                  ${
                    isActive
                      ? "bg-yellow-100 border-yellow-500 text-yellow-800 shadow-md"
                      : "bg-slate-50 border-slate-200 text-slate-600"
                  }
                `}
              >
                {level}
                {isActive && <span className="ml-2 font-bold animate-pulse">← YOU</span>}
              </div>

              {/* Indicator arrow */}
              {index < levels.length - 1 && (
                <div className="text-center text-slate-300 mb-2">▲</div>
              )}
            </div>
          );
        })}
        
        <div className="mt-8 border-t pt-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-slate-500">
                Current Score
              </p>
              <p className="text-2xl font-bold">
                {score}%
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Next Level
              </p>
              <p className="font-semibold">
                {nextLevel}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Gap To Next Level
              </p>
              <p className="text-2xl font-bold">
                {gapToNextLevel > 0
                  ? `${gapToNextLevel}%`
                  : "Achieved"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Progress To Next Level
              </p>
              <p className="text-2xl font-bold text-yellow-600">
                {progressPercentage}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
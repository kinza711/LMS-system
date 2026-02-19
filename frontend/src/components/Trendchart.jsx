import React from "react";

const Trendchart = () => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
        Assessment Completion Trends
      </h3>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-4 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Performance Trend
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Average scores over the last 30 days
            </p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              78%
            </p>
            <p className="text-xs text-green-500">Avg this period</p>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 320 120"
            className="w-full h-40 min-w-[300px]"
            preserveAspectRatio="none"
          >
            {/* Gradient */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Area */}
            <path
              d="M10 90 
               Q50 50 80 55 
               T140 50 
               T200 45 
               T260 40 
               L260 110 L10 110 Z"
              fill="url(#areaGradient)"
            />

            {/* Line */}
            <path
              d="M10 90 
               Q50 50 80 55 
               T140 50 
               T200 45 
               T260 40"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Points */}
            {[80, 140, 200, 260].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={[55, 50, 45, 40][i]}
                r="3.5"
                fill="white"
                stroke="#2563eb"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>

        {/* X-axis */}
        <div className="flex justify-between text-xs text-slate-400 mt-2">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  );
};

export default Trendchart;

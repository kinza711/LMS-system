import React from "react";

const Chart = () => {
  return (
    <div className="xl:col-span-2 flex flex-col bg-white dark:bg-[#15202b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Performance Analysis</h3>
          <p className="text-sm text-slate-500">Your score trends over the last 7 months</p>
        </div>
        <select className="bg-slate-50 dark:bg-slate-800 border-none text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-primary/20 cursor-pointer">
          <option>Last 6 Months</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="flex-1 w-full min-h-[300px] relative">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#137fec" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#137fec" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="250" y2="250"></line>
          <line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="180" y2="180"></line>
          <line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="110" y2="110"></line>
          <line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="40" y2="40"></line>
          <path
            d="M0,200 C100,200 100,120 200,150 C300,180 300,80 400,100 C500,120 500,60 600,80 C700,100 700,40 800,50 L800,300 L0,300 Z"
            fill="url(#chartGradient)"
          ></path>
          <path
            d="M0,200 C100,200 100,120 200,150 C300,180 300,80 400,100 C500,120 500,60 600,80 C700,100 700,40 800,50"
            fill="none"
            stroke="#137fec"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          ></path>
          <circle cx="200" cy="150" fill="#fff" r="6" stroke="#137fec" strokeWidth="3"></circle>
          <circle cx="400" cy="100" fill="#fff" r="6" stroke="#137fec" strokeWidth="3"></circle>
          <circle cx="600" cy="80" fill="#fff" r="6" stroke="#137fec" strokeWidth="3"></circle>
          <circle cx="800" cy="50" fill="#fff" r="6" stroke="#137fec" strokeWidth="3"></circle>
        </svg>
        <div className="flex justify-between mt-4 px-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;

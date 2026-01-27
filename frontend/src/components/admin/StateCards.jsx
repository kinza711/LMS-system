import React from "react";

const StatsCard = ({ icon, color, label, value, change, bgChange }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-center justify-between">
        <div className={`p-2.5 rounded-lg ${bgChange} text-${color}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {change && (
          <span className="px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold">{change}</span>
        )}
      </div>
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</p>
        <h3 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mt-1">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;

import React from "react";

const StatsCard = ({ icon, iconColor, title, value, change, changeColor }) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className={`size-14 rounded-full ${iconColor} flex items-center justify-center transition-colors duration-300`}>
        <span className="material-symbols-outlined !text-3xl">{icon}</span>
      </div>
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-slate-900 dark:text-white text-3xl font-bold">{value}</h3>
          {change && (
            <span className={`${changeColor} text-xs font-bold flex items-center bg-${changeColor}-50 dark:bg-${changeColor}-900/30 px-1.5 py-0.5 rounded-md`}>
              <span className="material-symbols-outlined !text-xs mr-0.5">trending_up</span> {change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

import React from "react";

const activities = [
  { icon: "person", color: "blue", user: "Sarah Smith", action: "registered", time: "2 mins ago" },
  { icon: "check_circle", color: "green", user: "New test created", action: '"React Basics"', time: "1 hour ago" },
  { icon: "upload_file", color: "purple", user: "Course material updated", action: "", time: "3 hours ago" },
];

const RecentActivity = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
        <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
      </div>
      <div className="flex flex-col gap-4">
        {activities.map((act, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full bg-${act.color}-100 text-${act.color}-600 flex items-center justify-center shrink-0 mt-0.5`}>
              <span className="material-symbols-outlined text-[16px]">{act.icon}</span>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-slate-900 dark:text-white">{act.user} {act.action}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

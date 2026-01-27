import React from "react";

const actions = [
  { icon: "add_box", label: "New Test", color: "primary" },
  { icon: "person_add", label: "Add User", color: "purple-500" },
  { icon: "campaign", label: "Post News", color: "orange-500" },
  { icon: "file_download", label: "Export Report", color: "green-500" },
];

const QuickActions = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-primary/5 hover:text-primary dark:hover:text-primary transition-colors gap-2 group"
          >
            <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
              <span className={`material-symbols-outlined text-${action.color}`}>{action.icon}</span>
            </div>
            <span className="text-xs font-bold">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

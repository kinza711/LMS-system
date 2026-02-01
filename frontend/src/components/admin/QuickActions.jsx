import React from "react";
import { RiNumbersFill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { MdPostAdd } from "react-icons/md";
import { FaLaptopMedical } from "react-icons/fa6";
import {Link, Links} from "react-router-dom";

const actions = [
  {
    icon: <RiNumbersFill />,
    label: "Test Scores",
    color: "primary",
    link: "/tests",
  },
  {
    icon: <HiMiniUsers />,
    label: "Manage User",
    color: "purple-500",
    link: "/usermanagement",
  },
  {
    icon: <MdPostAdd />,
    label: "Post News",
    color: "orange-500",
    link: "/announcement",
  },
  {
    icon: <FaLaptopMedical />,
    label: "Manage Courses",
    color: "green-500",
    link: "/managecourse",
  },


];

const QuickActions = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
  <Link
    to={action.link}
    key={action.label}
    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-primary/5 hover:text-primary dark:hover:text-primary transition-colors gap-2 group"
  >
    <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
      <span className={`text-${action.color}`}>
        {action.icon}
      </span>
    </div>
    <span className="text-xs font-bold">{action.label}</span>
  </Link>
))}

      </div>
    </div>
  );
};

export default QuickActions;

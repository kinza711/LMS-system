import React from "react";

// 🔹 props ka naam = kinza
const StatsCard = ({ kinza }) => {

  const { icon, title, value, color, tagText, tagColor } = kinza;

  const colors = {
    blue: "text-blue-500 bg-blue-50",
    green: "text-green-500 bg-green-50",
    purple: "text-purple-500 bg-purple-50",
    orange: "text-orange-500 bg-orange-50",
  };

  return (
    <div className="bg-white dark:bg-[#15202b] p-3 rounded-xl shadow-sm">
      <div className="flex justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors[color]}`}>
          {icon}
        </div>

        <span className={`text-xs font-bold px-2 items-center justify-center flex py-1 rounded-full ${colors[tagColor]}`}>
          {tagText}
        </span>
      </div>

      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;

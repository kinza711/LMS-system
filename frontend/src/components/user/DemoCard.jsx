import React from "react";

const DemoCard = ({ category, difficulty, title, description, duration, students }) => {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-[#15202b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all overflow-hidden h-full">
      <div
        className="h-32 w-full bg-cover bg-center"
        style={{ backgroundImage: `url("https://via.placeholder.com/400x150")` }}
      >
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-slate-700 dark:text-white">
          {duration}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-bold tracking-wider uppercase ${category.color} px-2 py-0.5 rounded-full`}>
            {category.name}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">{difficulty}</span>
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-500 mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex -space-x-2">
            {students.map((student, index) => (
              <div
                key={index}
                className={`size-6 rounded-full border-2 border-white dark:border-slate-800 bg-gray-200 bg-cover`}
                style={{ backgroundImage: `url("${student}")` }}
              ></div>
            ))}
            {students.length > 3 && (
              <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500">
                +{students.length - 3}
              </div>
            )}
          </div>
          <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-3 py-1.5 rounded-lg text-sm font-bold transition-all">
            Start Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;

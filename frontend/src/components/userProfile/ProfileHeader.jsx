import React from "react";

const ProfileHeader = ({ user }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-3 lg:px-10">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="size-8 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined !text-3xl">school</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          EduLMS
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <button className="group flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700"
          style={{ backgroundImage: `url(${user.avatar})` }}
        ></div>
      </div>
    </header>
  );
};

export default ProfileHeader;

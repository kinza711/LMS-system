import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 lg:px-8 bg-white/80 dark:bg-[#15202b]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-10 sticky top-0">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Search */}
        <div className="hidden md:flex items-center w-64 lg:w-96 h-10 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 transition-all focus-within:ring-2 focus-within:ring-primary/20">
          <span className="material-symbols-outlined text-slate-400 text-[20px]"><IoSearchSharp /></span>
          <input
            className="flex-1 bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 px-2 h-full"
            placeholder="Search courses, tests..."
            type="text"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <span className="material-symbols-outlined"><FaBell /></span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#15202b]"></span>
        </button>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-sm font-bold text-slate-900 dark:text-white">Alex Johnson</span>
          <span className="text-xs text-slate-500">Student</span>
        </div>
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-9 cursor-pointer ring-2 ring-transparent hover:ring-primary/50 transition-all"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0yYHzeffEsrl_uBZizrycY66dRdkAOJVPKE6cS_F6zq0ANI7rnMbDmIBryS9UjxLep09-gBJ53Z9NIoKi19OXqMNu0g6Zt1b1mJCynMmM-hu-8cQ2YrjcG7BEznOHkpDDTzB4uzvMOPeJziYqyfQoH4XGhujxK4Vjgpc5MHWurnFS6t4Z2Sded6UBkhSoGvw74RkfXzaq4ZsJy8_fozEglrVJoqfuzvp9-XrKw_PRtyVxqHoYcbNOEg3fB4qJ2N3GVHmYz_Z51Lo")` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;

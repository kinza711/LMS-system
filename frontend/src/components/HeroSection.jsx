import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";

const HeroSection = () => {
  return (
    <header className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-sm"><TbRosetteDiscountCheckFilled /></span>
              v2.0 Released
            </div>
            <h1 className="text-slate-900 dark:text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Revolutionize Your{" "}
              <span className="text-primary bg-clip-text text-transparent  from-primary bg-blue-400">
                Assessment
              </span>{" "}
              Process
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The all-in-one platform for educators and learners to create,
              distribute, and analyze assessments seamlessly with AI-powered
              insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#3293A8] hover:bg-[#176b7d] text-white text-base font-bold shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span className="material-symbols-outlined mr-2"><FaCirclePlay /></span>
              Watch Demo
            </button>
          </div>
        
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWnxfVepPEtoF9l1t5LjQLxP1aEyJvw3GJfp6wqLtMqMAAnkwO2RduG-Zkak-WcqH-tOO0CzIHGA0bVsIBeK3GooSM5LsMUy8J16pmND_e9Pmn5yQN9IO18FxAipvesvM5wbF9L43R-Zum8EQGagIJ4gHqj6fyDfyAjg4rb4Qt0kxFiHQiMYtBTc5HCaDFQYllPJWMVAwdrp4tmR4RXk1BYvFKPI31xWpTCX8sR8Y9c5m4PjYsKLIaO7ifFOrD9tG-Q1-WRRrlABM')",
              }}
            ></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-100 dark:border-slate-700 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined"><IoMdTrendingUp /></span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Class Performance
                  </p>
                  <p className="text-slate-900 dark:text-white font-bold text-lg">
                    +24% Increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

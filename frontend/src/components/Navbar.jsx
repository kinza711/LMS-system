import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl w-20 items-center">
                <img src="/lms logo.png" alt="logo" />
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-2xl mt-3 font-bold tracking-tight">
              <Link to="/">
              EduAssess
              </Link>
              
            </h2>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
            <Link to="/demo" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
                
              >
                Demo_Test
              </Link>
              <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
              >
                Product
              </Link>
              <Link to="/courses" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
              >
                Courses
              </Link>
              <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
                
              >
                Solutions
              </Link>
              <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
              >
                Prices
              </Link>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center rounded-lg border-2 border-[#3292A8] h-10 px-5 text-slate-700 dark:text-slate-200 hover:bg-[#3293A8] dark:hover:bg-slate-800 text-sm font-bold transition-colors">
              <Link to="/login">
                Login
              </Link>

            </button>
            <button
              className="flex items-center justify-center rounded-lg h-10 px-5 bg-[#44A4BB] hover:bg-[#3292A8] text-white shadow-lg shadow-blue-500/20 text-sm font-bold transition-all transform active:scale-95">
              <Link
                to="/register"
              >
                Register
              </Link>

            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

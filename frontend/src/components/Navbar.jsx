// its a responsive Navbar

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/lmslogo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-12 h-12" />

            <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
              <Link to="/">EduAssess</Link>
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
            <Link
              to="/demo"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
            >
              Demo_Test
            </Link>

            <Link
              to="/"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
            >
              Product
            </Link>

            <Link
              to="/courses"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
            >
              Courses
            </Link>

            <Link
              to="/"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
            >
              Solutions
            </Link>

            <Link
              to="/"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors"
            >
              Prices
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button className="rounded-lg border-2 border-[#3292A8] h-10 px-5 text-slate-700 dark:text-slate-200 hover:bg-[#3293A8] text-sm font-bold transition-colors">
              <Link to="/login">Login</Link>
            </button>

            <button className="rounded-lg h-10 px-5 bg-[#44A4BB] hover:bg-[#3292A8] text-white shadow-lg shadow-blue-500/20 text-sm font-bold transition-all transform active:scale-95">
              <Link to="/register">Register</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-slate-700 dark:text-white"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-6 pt-4">
            <Link
              to="/demo"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-semibold"
            >
              Demo_Test
            </Link>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-semibold"
            >
              Product
            </Link>

            <Link
              to="/courses"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-semibold"
            >
              Courses
            </Link>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-semibold"
            >
              Solutions
            </Link>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-semibold"
            >
              Prices
            </Link>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                to="/login"
                className="w-full text-center rounded-lg border-2 border-[#3292A8] h-10 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#3293A8] font-bold"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="w-full text-center rounded-lg h-10 flex items-center justify-center bg-[#44A4BB] hover:bg-[#3292A8] text-white font-bold shadow-lg"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

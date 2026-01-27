import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFileSignature } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

import Navbar from "../components/Navbar"

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="font-display flex-col bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white flex items-center justify-center min-h-screen p-6">
     <Navbar/>
      <div className="max-w-2xl w-full text-center flex flex-col items-center">

        {/* Logo */}
        <div className="mb-12 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">
             <img src="/lms logo.png" alt="logo" />
            </span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Quiz Management
          </h2>
        </div>

        {/* 404 Graphic */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center">
            <div className="absolute size-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>

            <div className="relative flex items-center gap-4">
              <span className="text-8xl md:text-9xl font-extrabold text-[#e2e8f0] dark:text-[#2a3b4d] select-none">
                4
              </span>

              <div className="relative group">
                <div className="bg-white dark:bg-[#1a2632] p-6 rounded-full shadow-xl border border-[#3d74ab] dark:border-[#2a3b4d] relative z-10 transition-transform hover:rotate-3">
                  <span className="material-symbols-outlined text-6xl md:text-7xl text-primary">
                    <FaSearchengin />
                  </span>

                  <div className="absolute -top-4 -right-4 size-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center border border-yellow-200 dark:border-yellow-800 rotate-12">
                    <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400 text-xl">
                     <FaFileSignature />
                    </span>
                  </div>

                  <div className="absolute -bottom-4 -left-4 size-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center border border-green-200 dark:border-green-800 -rotate-12">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-xl">
                      <FaCheckCircle />
                    </span>
                  </div>
                </div>
              </div>

              <span className="text-8xl md:text-9xl font-extrabold text-[#e2e8f0] dark:text-[#2a3b4d] select-none">
                4
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Page Not Found
          </h1>

          <p className="text-[#4c739a] text-lg max-w-md mx-auto leading-relaxed">
            Oops! It looks like this question has been removed from the bank or the
            link you followed is broken.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-800 hover:bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined"><MdDashboard /></span>
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#e7edf3] dark:border-[#2a3b4d] bg-white dark:bg-[#1a2632] hover:bg-slate-50 dark:hover:bg-[#23303e] font-bold text-base transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined"><IoArrowBack /></span>
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#e7edf3] dark:border-[#2a3b4d] w-full max-w-sm">
          <p className="text-sm text-[#4c739a]">
            Think this is a mistake?{" "}
            <Link to="/support" className="text-primary font-semibold hover:underline">
              Contact Support
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFound;

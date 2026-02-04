import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GiSecurityGate } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import Footer from "../components/Footer";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] min-h-screen flex flex-col transition-colors duration-300">

    <Navbar/>

      {/* ✅ Main Content */}
      <main className="flex-1 flex items-center justify-center p-5">
        <div className="max-w-[560px] w-full bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="p-8 md:p-12 flex flex-col items-center">

            {/* Illustration */}
            <div className="relative mb-8 flex justify-center items-center">
              <div className="absolute inset-0 bg-[#137fec]/10 dark:bg-[#137fec]/20 rounded-full blur-2xl scale-125"></div>

              <div className="relative bg-transparent  size-48 flex items-center justify-center">
                <GiSecurityGate className="h-full w-full object-cover text-blue-500" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-slate-900 dark:text-slate-50 text-[32px] font-bold text-center pb-3">
              403 - Access Denied
            </h1>

            {/* Text */}
            <p className="text-slate-600 dark:text-slate-400 text-base text-center max-w-[400px] leading-relaxed">
              Oops! You are not allowed to visit this page. Please log in with
              the appropriate credentials or contact support if you believe this
              is an error.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3 w-full max-w-[400px] justify-center">

              {/* Login Button */}
              <button
                onClick={() => navigate("/login")}
                className="flex min-w-[140px] items-center justify-center rounded-xl h-12 px-6 bg-[#137fec] text-white text-base font-bold hover:bg-[#137fec]/90 transition-all"
              >
            
                Log In
              </button>

              {/* Home Button */}
              <button
                onClick={() => navigate("/")}
                className="flex min-w-[140px] items-center justify-center rounded-xl h-12 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
    
                Go to Home
              </button>
            </div>

            {/* Support Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-px w-16 bg-slate-200 dark:bg-slate-800"></div>

              <div className="text-sm text-slate-500 text-center">
                <p>If you need assistance, please contact</p>
                <a
                  href="#"
                  className="text-[#137fec] font-medium hover:underline flex items-center justify-center mt-1"
                >
                  <span className="material-symbols-outlined text-sm mr-1">
                   <MdSupportAgent />
                  </span>
                  Technical Support
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default AccessDenied;

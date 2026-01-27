import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const MediaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-100 dark:from-black/20 to-transparent -z-10"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#115097] rounded-3xl p-6 sm:p-12 text-center text-white overflow-hidden relative shadow-2xl shadow-primary/20">
          <div
            className="absolute top-0 right-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                See how it works
              </h3>
              <p className="text-blue-100 text-lg">
                Watch a quick walkthrough of how EduAssess transforms the
                classroom experience.
              </p>
            </div>
            <div className="w-full max-w-4xl mt-4">
              <div
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group cursor-pointer"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQsU1Lvpa9sUs7vOrbnsejrU1mhi_ZW3glAUhUWIAdeVsU9B1dmjpsz81PR4pUctjTWNmSYMzbhb-idXF-knUUbFydrqRpZMd2kJ3hV4C2-Jbg-1a5NuO5sm26BC5qbPdBdJ4-CgbBAzIUUblajYQy7yUqwRORQzb2iBXQig6fEiS5LMlLrN5lW4BF3pNUBPyIodmLwN8AVqLsgfwesppl36gLior7Wgjp9mYgKPgUhvV5PapgZ06RvcwyI8g7tCBhc4bWwIJhAmY')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl fill-current">
                  <FaGooglePlay />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;

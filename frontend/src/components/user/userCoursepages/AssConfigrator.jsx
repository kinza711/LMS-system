import React, { useState } from "react";
import { VscChecklist } from "react-icons/vsc";
import { IoArrowForward, IoNewspaper } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import {useNavigate} from "react-router-dom"

const AssConfigrator = ({ courseTitle , courseId}) => {
  const [assessmentType, setAssessmentType] = useState("objective");
  const [difficulty, setDifficulty] = useState("Medium");
  const navigate = useNavigate()

 const handleStartTest = () => {
  navigate(
    `/objective?courseId=${courseId}&title=${encodeURIComponent(courseTitle)}&type=${assessmentType.toLowerCase()}&difficulty=${difficulty.toLowerCase()}`
  );
};


  return (
    <aside className="lg:col-span-4 sticky top-28">
      <div className="glass-panel rounded-3xl p-8 space-y-10">
        <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
          Assessment Configurator
        </h3>

        {/* Assessment Type */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
            1. Assessment Type
          </label>
          <div className="flex p-1.5 bg-slate-100/80 rounded-3xl">
            <button
              onClick={() => setAssessmentType("objective")}
              className={`flex-1 py-3 px-4 rounded-3xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                assessmentType === "objective"
                  ? "bg-white shadow-sm text-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <VscChecklist className="text-lg" /> Objective
            </button>

            <button
              onClick={() => setAssessmentType("subjective")}
              className={`flex-1 py-3 px-4 rounded-3xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                assessmentType === "subjective"
                  ? "bg-white shadow-sm text-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <IoNewspaper className="text-lg" /> Subjective
            </button>
          </div>
        </div>

        {/* Difficulty Level */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
            2. Difficulty Level
          </label>
          <div className="flex flex-wrap gap-3">
            {["Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-all ${
                  difficulty === level
                    ? "border-primary/20 bg-primary/5 text-primary shadow-sm shadow-primary/10"
                    : "border-slate-100 bg-slate-50 text-slate-500 hover:border-primary/30 hover:text-primary"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Time and Questions */}
        <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Time Limit
            </p>
            <p className="text-lg font-bold text-slate-800">45 Mins</p>
          </div>
          <div className="text-center border-l border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Questions
            </p>
            <p className="text-lg font-bold text-slate-800">30 MCQ</p>
          </div>
        </div>

        {/* Start Assessment */}
        <div className="space-y-4 pt-2">
          <button 
          onClick={handleStartTest}
          className="w-full bg-green-700 hover:bg-blue-600 text-white font-extrabold py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
            Start Assessment
            <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-[11px] text-center text-slate-400 font-medium">
            By clicking start, you agree to the assessment guidelines and honor code.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex justify-between items-center px-4">
        <button className="text-slate-500 hover:text-slate-800 text-xs font-bold flex items-center gap-1">
          <IoIosHelpCircle className="text-sm" /> Guidelines
        </button>
        <button className="text-slate-500 hover:text-slate-800 text-xs font-bold flex items-center gap-1">
          <MdHistory className="text-sm" /> Past Results
        </button>
      </div>
    </aside>
  );
};

export default AssConfigrator;

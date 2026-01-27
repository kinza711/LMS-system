import FooterActions from "./FooterActions";
import Options from "./Options";
import { FaFlag } from "react-icons/fa";
const QuestionCard = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 flex justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5">
        <h3 className="text-sm font-semibold text-slate-500 uppercase">
          Question 5 of 20
        </h3>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <span className="material-symbols-outlined text-slate-400 peer-checked:text-amber-500">
          <FaFlag />
          </span>
          <span className="text-sm text-slate-500">Mark for Review</span>
        </label>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 space-y-6">
        <p className="text-lg md:text-xl font-medium">
          Which of the following serves as the primary energy source for cellular respiration in human cells?
        </p>

        <Options />
      </div>

      <FooterActions />
    </div>
  );
};

export default QuestionCard;

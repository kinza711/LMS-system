import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const FooterActions = () => {
  return (
    <div className="p-6 flex justify-between border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      
      <button className="text-sm text-slate-500 underline">
        Clear Response
      </button>

      <div className="flex gap-4">
        <button className="px-6 h-12 rounded-xl border text-sm font-bold flex items-center gap-2">
          <span className="material-symbols-outlined"><FaArrowLeftLong /></span>
          Previous
        </button>

        <button className="px-8 h-12 rounded-xl bg-blue-500 text-white font-bold flex items-center gap-2">
          Next
          <span className="material-symbols-outlined"><FaArrowRightLong /></span>
        </button>
      </div>

    </div>
  );
};

export default FooterActions;

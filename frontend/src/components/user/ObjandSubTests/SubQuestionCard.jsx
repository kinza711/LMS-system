import Editor from "./Editor"
import { FaFlag } from "react-icons/fa";

const SubQuestionCard = () => {
  return (
    <div className="bg-white mb-5 rounded-xl shadow-soft p-2 border-[0.25px] border-gray-300">
      <div className="flex justify-between mb-2">
        <span className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded-full">
          Question 4 of 20
        </span>

        <div className="flex items-center gap-1 text-slate-400 hover:text-primary cursor-pointer">
          <span className="material-symbols-outlined text-sm"><FaFlag /></span>
          <span className="text-xs font-semibold">Mark for Review</span>
        </div>
      </div>

      <h1 className="text-xl font-bold mb-2">
        Discuss the socio-economic impacts of the Industrial Revolution in the
        19th century.
        <p className="text-sm text-slate-500 italic">
         (10 Marks)
      </p>
      </h1>

      
      <Editor/> 
    </div>
  );
};

export default SubQuestionCard;

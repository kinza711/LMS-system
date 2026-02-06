// import FooterActions from "./FooterActions";
// import Options from "./Options";
// import { FaFlag } from "react-icons/fa";
// const QuestionCard = () => {
//   return (
//     <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
      
//       {/* Header */}
//       <div className="p-6 flex justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5">
//         <h3 className="text-sm font-semibold text-slate-500 uppercase">
//           Question 5 of 20
//         </h3>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input type="checkbox" className="sr-only peer" />
//           <span className="material-symbols-outlined text-slate-400 peer-checked:text-amber-500">
//           <FaFlag />
//           </span>
//           <span className="text-sm text-slate-500">Mark for Review</span>
//         </label>
//       </div>

//       {/* Body */}
//       <div className="p-6 md:p-8 space-y-6">
//         <p className="text-lg md:text-xl font-medium">
//           Which of the following serves as the primary energy source for cellular respiration in human cells?
//         </p>

//         <Options />
//       </div>

//       <FooterActions />
//     </div>
//   );
// };

// export default QuestionCard;



const QuestionCard = ({ question, selectedAnswer, onSelect }) => {
  if (!question) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm mb-8 p-8">

      <h2 className="text-2xl font-bold mb-4">
        {question.title} 
      </h2>

      <p className="text-lg font-medium mb-6">
        {question.disc}
      </p>

      {/* ================= OBJECTIVE ================= */}
      {question.questionType === "objective" && (
        <div className="space-y-4">
          {question.options.map((opt, i) => (
            <label
              key={i}
              className="relative flex items-start gap-4 p-4 rounded-xl border cursor-pointer hover:border-blue-500 transition"
            >
              <input
                type="radio"
                name={`question-${question._id}`} // 🔥 unique per question
                className="peer sr-only"
                checked={selectedAnswer === opt}
                onChange={() => onSelect(question._id, opt)}
              />

              <div className="w-5 h-5 rounded-full border-2 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
              </div>

              <div>
                <span className="font-bold text-slate-400 mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                <span className="font-medium">{opt}</span>
              </div>
            </label>
          ))}
        </div>
      )}

      {/* ================= SUBJECTIVE ================= */}
      {question.questionType === "subjective" && (
        <textarea
          placeholder="Type your answer..."
          className="w-full border rounded-lg p-4"
        />
      )}
    </div>
  );
};

export default QuestionCard;
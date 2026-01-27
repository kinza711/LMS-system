// const QuestionNavigator = () => {
//   return (
//     <div className="p-6 flex-1 overflow-y-auto">
//       <h3 className="font-bold mb-4">Question Navigator</h3>

//       <div className="grid grid-cols-5 gap-3">
//         {[...Array(30)].map((_, i) => (
//           <button
//             key={i}
//             className={`aspect-square rounded-lg font-semibold text-sm ${
//               i === 4
//                 ? "border-2 border-blue-600 text-blue-600 bg-blue-50"
//                 : "bg-slate-100 hover:bg-slate-200"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionNavigator;


import QuestionPalette from "./QuestionPalette";
import SubmitSection from "./SubmitSection";

const TimerSidebar = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Timer */}
      <div className="p-6 shadow border-gray-300">
        <p className="text-xs uppercase text-slate-500 font-bold text-center">
          Time Remaining
        </p>
        <div className="flex justify-center mt-4">
          <div className="size-32 rounded-full shadow-2xl  flex items-center justify-center">
            <span className="text-3xl font-bold">01:25</span>
          </div>
        </div>
      </div>

      <QuestionPalette />
      <SubmitSection />
    </div>
  );
};

export default TimerSidebar;



// const options = [
//   "X = 14.5",
//   "X = 12.2",
//   "X = 28.4",
//   "None of the above",
// ];

// const QuestionCard = () => {
//   return (
//     <div className="bg-white rounded-2xl  shadow-sm mb-8">
      

//       <div className="p-8">
//         <h2 className="text-2xl font-bold mb-4">
//           Question 5
//           <span className="ml-3 text-sm bg-slate-100 px-3 py-1 rounded-full">
//             Single Choice
//           </span>
//         </h2>

//         <p className="text-lg font-medium mb-6">
//           Calculate the value of X in the following equation given that Y
//           represents the slope of the curve at point (3,4).
//         </p>

//         {/* <Options /> */}
//          <div className="space-y-4">
//       {options.map((opt, i) => (
//         <label
//           key={i}
//           className="relative flex items-start gap-4 p-4 rounded-xl border-gray-300 border cursor-pointer hover:border-blue-500 transition"
//         >
//           <input type="radio" name="question" className="peer sr-only" />

//           <div className="w-5 h-5 rounded-full border-2 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
//             <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
//           </div>

//           <div>
//             <span className="font-bold text-slate-400 mr-2">
//               {String.fromCharCode(65 + i)}.
//             </span>
//             <span className="font-medium">{opt}</span>
//           </div>

//           <div className="absolute inset-0 rounded-xl border-2 border-blue-600 opacity-0 peer-checked:opacity-100 pointer-events-none" />
//         </label>
//       ))}
//     </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;


const QuestionCard = ({ question }) => {
  if (!question) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm mb-8 p-8">
      <h2 className="text-2xl font-bold mb-4">
        {question.title} - {question.questionType}
      </h2>

      <p className="text-lg font-medium mb-6">{question.disc}</p>

      {question.questionType === "objective" && (
        <div className="space-y-4">
          {question.options.map((opt, i) => (
            <label key={i} className="relative flex items-start gap-4 p-4 rounded-xl border cursor-pointer hover:border-blue-500 transition">
              <input type="radio" name={`question-${question._id}`} className="peer sr-only" />
              <div className="w-5 h-5 rounded-full border-2 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
              </div>
              <div>
                <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                <span className="font-medium">{opt}</span>
              </div>
            </label>
          ))}
        </div>
      )}

      {question.questionType === "subjective" && (
        <textarea placeholder="Type your answer..." className="w-full border rounded-lg p-4"></textarea>
      )}
    </div>
  );
};

export default QuestionCard;


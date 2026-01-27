const options = [
  "X = 14.5",
  "X = 12.2",
  "X = 28.4",
  "None of the above",
];

const Options = () => {
  return (
    <div className="space-y-4">
      {options.map((opt, i) => (
        <label
          key={i}
          className="relative flex items-start gap-4 p-4 rounded-xl border-gray-300 border cursor-pointer hover:border-blue-500 transition"
        >
          <input type="radio" name="question" className="peer sr-only" />

          <div className="w-5 h-5 rounded-full border-2 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
          </div>

          <div>
            <span className="font-bold text-slate-400 mr-2">
              {String.fromCharCode(65 + i)}.
            </span>
            <span className="font-medium">{opt}</span>
          </div>

          <div className="absolute inset-0 rounded-xl border-2 border-blue-600 opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </label>
      ))}
    </div>
  );
};

export default Options;



// const Options = ({ options }) => {
//   return (
//     <div className="space-y-4">
//       {options.map((opt, i) => (
//         <label
//           key={i}
//           className="relative flex gap-4 p-4 rounded-xl border cursor-pointer"
//         >
//           <input type="radio" name="question" className="sr-only peer" />

//           <div className="w-5 h-5 rounded-full border-2 peer-checked:bg-blue-600"></div>

//           <span>
//             <b>{String.fromCharCode(65 + i)}.</b> {opt}
//           </span>
//         </label>
//       ))}
//     </div>
//   );
// };

// export default Options;

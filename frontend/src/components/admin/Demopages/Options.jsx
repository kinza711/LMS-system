const options = [
  "Lipids",
  "Glucose",
  "Proteins",
  "Nucleic Acids",
];

const Options = () => {
  return (
    <div className="space-y-3">
      {options.map((opt, i) => (
        <label
          key={i}
          className="flex items-center p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:bg-slate-50 transition"
        >
          <input type="radio" name="q5" className="" />
         <div className="size-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
          <span className="ml-4 font-medium">{opt}</span>
        </label>
      ))}
    </div>
  );
};

export default Options;

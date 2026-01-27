const QuestionPalette = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <p className="font-bold mb-4">Question Palette</p>

      <div className="grid grid-cols-5 gap-3">
        {[...Array(20)].map((_, i) => (
          <button
            key={i}
            className={`aspect-square rounded-lg text-sm font-bold ${
              i === 3
                ? "bg-blue-500 text-white ring-2 ring-primary"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPalette;

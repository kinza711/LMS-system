const Editor = ({ questionId, answers, setAnswers }) => {
  const handleChange = (e) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: e.target.value, // ✅ store per question
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-300 overflow-hidden min-h-[200px] flex flex-col">
      <div className="p-6 flex-1">
        <textarea
          className="w-full h-full border-gray-300 rounded-xl p-5 border outline-none text-lg text-slate-700"
          placeholder="Type your answer here..."
          value={answers[questionId] || ""} // ✅ important
          onChange={handleChange} // ✅ controlled
        />
      </div>
    </div>
  );
};

export default Editor;

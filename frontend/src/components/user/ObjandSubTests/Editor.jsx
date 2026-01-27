const Editor = () => {
  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-300 overflow-hidden min-h-[200px] flex flex-col">

      {/* Textarea */}
      <div className="p-6 flex-1">
        <textarea
          className="w-full h-full border-gray-300 rounded-xl p-5 border outline-none text-lg text-slate-700"
          placeholder="Type your answer here..."
        />
      </div>
    </div>
  );
};

export default Editor;

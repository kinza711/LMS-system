

const TestSidebar = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-100 dark:border-slate-800 p-6 space-y-6">
      
      {/* Progress */}
      <div>
        <div className="flex justify-between mb-2">
          <h3 className="font-bold">Test Progress</h3>
          <span className="text-primary font-bold">9 / 20</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full">
          <div className="h-full bg-blue-500 w-[45%] rounded-full" />
        </div>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-5 gap-3">
        {[...Array(20)].map((_, i) => (
          <button
            key={i}
            className={`aspect-square rounded-lg font-semibold text-sm
              ${i === 4 ? "bg-green-700 text-white" : "bg-slate-100 text-slate-500"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold">
        Submit Test
      </button>

    </div>
  );
};

export default TestSidebar;

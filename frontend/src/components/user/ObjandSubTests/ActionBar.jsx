const ActionBar = () => {
  return (
    <div className="flex justify-between pb-10">
      <button className="px-6 py-3 rounded-3xl font-bold hover:bg-slate-200 bg-gray-200">
        Previous
      </button>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-amber-50 text-amber-600 rounded-xl font-bold">
          Mark for Review
        </button>

        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow hover:scale-105">
          Next Question 
        </button>
      </div>
    </div>
  );
};

export default ActionBar;

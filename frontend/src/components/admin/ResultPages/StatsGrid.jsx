const stats = [
  { title: "Avg Score", value: "82%", icon: "trending_up", color: "green" },
  { title: "Assessments", value: "1,240", icon: "assignment_turned_in", color: "blue" },
  { title: "Pass Rate", value: "94%", icon: "check_circle", color: "purple" },
  { title: "Top Score", value: "100%", icon: "emoji_events", color: "orange" },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="p-3 rounded-2xl bg-white  shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-between ">
            <p className="text-sm font-bold text-slate-500 uppercase">
              {s.title}
            </p>
            <div className={`size-8 rounded-full bg-${s.color}-100 flex items-center justify-center`}>
              <span className={`material-symbols-outlined text-${s.color}-600`}>
                {s.icon}
              </span>
            </div>
          </div>
          <p className="text-3xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;

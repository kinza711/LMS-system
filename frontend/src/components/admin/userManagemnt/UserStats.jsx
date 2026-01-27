// UserStats.js
const UserStats = ({ stats }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.keys(stats).map((key) => {
        const statItem = stats[key];
        return (
          <div
            key={key}
            className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-[#e7edf3] dark:border-[#2a3b4d] shadow-sm"
          >
            <p className="text-xs text-[#4c739a] font-bold">{statItem.label}</p>
            <p className={`text-2xl font-extrabold ${statItem.color || ""}`}>
              {statItem.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserStats;

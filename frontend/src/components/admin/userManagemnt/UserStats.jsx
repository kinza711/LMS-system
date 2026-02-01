// UserStats.js
const UserStats = ({ stats }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.keys(stats).map((key) => {
        const statItem = stats[key];
        return (
          <div
            key={key}
            className="bg-white dark:bg-[#1a2632] p-5  rounded-xl border border-[#e7edf3] dark:border-[#2a3b4d] shadow-sm"
          >
            <p className="text-xl text-[#4c739a] font-bold">{statItem.label}</p>
            <p className={`text-3xl font-extrabold ${statItem.color || ""}`}>
              {statItem.value}
            </p>
            
          </div>
        );
      })}
    </div>
  );
};

export default UserStats;

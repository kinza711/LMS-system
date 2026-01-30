import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";


const StatsGrid = ({stats}) => {
   

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

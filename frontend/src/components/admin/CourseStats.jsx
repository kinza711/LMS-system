
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const CourseStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-white border border-[#e7edf3] shadow-soft relative"
        >
          <div className={`absolute top-4 right-4 opacity-20 ${stat.color}`}>
            {stat.icon}
          </div>

          <p className="text-slate-500 font-medium mb-1">{stat.title}</p>

          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-slate-800">
              {stat.value}
            </h3>
            <span
              className={`text-sm font-bold ${stat.changeColor} ${stat.changeBg} px-2 py-1 rounded-md`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}

      {/* Add Course Button */}
      <Link
        to="/postcourses"
        className="flex items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 transition-all"
      >
        <IoIosAddCircle size={35}  className="text-blue-600" />
      </Link>
    </div>
  );
};

export default CourseStats;

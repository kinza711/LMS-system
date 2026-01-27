import React, { useEffect, useState } from "react";
import { MdQuiz, MdChecklist } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../services/api";

const TestStats = () => {
  const [tests, setTests] = useState([]);
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const res = await api.get("/questions");
      const data = res.data.data || [];

      setTests(data);

      // ✅ Build stats AFTER data comes
      setStatsData([
        {
          title: "Total Tests",
          value: data.length,
          change: "All questions",
          icon: <MdQuiz />,
          color: "text-primary",
          changeColor: "text-green-600",
          changeBg: "bg-green-50",
        },
        {
          title: "Objective Tests",
          value: data.filter(q => q.questionType === "objective").length,
          change: "Objective",
          icon: <FaUserGraduate />,
          color: "text-purple-500",
          changeColor: "text-green-600",
          changeBg: "bg-green-50",
        },
        {
          title: "Subjective Tests",
          value: data.filter(q => q.questionType === "subjective").length,
          change: "Subjective",
          icon: <MdChecklist />,
          color: "text-orange-500",
          changeColor: "text-orange-600",
          changeBg: "bg-orange-50",
        },
        {
          title: "Demo Tests",
          value: data.filter(q => q.isPublic === true).length,
          change: "Public",
          icon: <MdChecklist />,
          color: "text-blue-500",
          changeColor: "text-blue-600",
          changeBg: "bg-blue-50",
        },
      ]);
    } catch (err) {
      console.log("Error fetching tests", err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-white border border-[#e7edf3] shadow-soft relative overflow-hidden"
        >
          <p className="text-slate-500 font-medium mb-1">
            {stat.title}
          </p>

          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-slate-800">
              {stat.value}
            </h3>
            <span
              className={`text-sm font-bold ${stat.changeColor} ${stat.changeBg} px-2 py-1 rounded-md mb-1`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}

      {/* Add New Test */}
      {/* <Link
        to="/postquestions"
        className="flex items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 transition-all"
      >
        <IoIosAddCircle size={40} className="text-blue-600" />
      </Link> */}
    </div>
  );
};

export default TestStats;

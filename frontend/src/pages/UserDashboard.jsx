import React, { useEffect, useState } from "react";
import Sidebar from "../components/user/Sidebar";
import Header from "../components/user/Header";
import StatsCard from "../components/user/StatsCard";
import Chart from "../components/user/Chart";
import AnnouncementList from "../components/admin/announcement/AnnouncementList";
import api from "../services/api";

import { MdQuiz, MdChecklist } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

const UserDashboard = () => {

  // 🔹 ARRAY ka naam = bilal
  const [bilal, setBilal] = useState([]);

  // 🔹 tests ka data
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const res = await api.get("/questions");
      const data = res.data.data || [];

      setTests(data);

      // 🔹 bilal array yahin build ho raha hai
      setBilal([
        {
          title: "Total Tests",
          value: data.length,
          icon: <MdQuiz />,
          color: "blue",
          tagText: "All",
          tagColor: "green",
        },
        {
          title: "Objective Tests",
          value: data.filter(q => q.questionType === "objective").length,
          icon: <FaUserGraduate />,
          color: "purple",
          tagText: "Objective",
          tagColor: "green",
        },
        {
          title: "Subjective Tests",
          value: data.filter(q => q.questionType === "subjective").length,
          icon: <MdChecklist />,
          color: "orange",
          tagText: "Subjective",
          tagColor: "orange",
        },
      ]);
    } catch (err) {
      console.log("Error fetching tests", err);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      
      <aside className="w-64 hidden lg:flex">
        <Sidebar />
      </aside>

      <main className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-y-auto p-6">

          {/* 🔹 STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bilal.map((item, index) => (
              <StatsCard
                key={index}
                kinza={item}   // 👈 props ka naam = kinza
              />
            ))}
          </div>

          {/* 🔹 CHART + ANNOUNCEMENTS */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Chart />

            <div className="bg-white dark:bg-[#15202b] p-6 rounded-xl">
              <h3 className="font-bold mb-4">Announcements</h3>
              <AnnouncementList />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default UserDashboard;

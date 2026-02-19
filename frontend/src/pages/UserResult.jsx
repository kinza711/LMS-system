import React, { useState, useEffect } from "react";
import Header from "../components/admin/Header";
import UserSidebar from "../components/user/UserSidebar";
import RecentActivityTable from "../components/userProfile/RecentActivityTable";
import { BsStars } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import Sidebar from "../components/admin/Sidebar";
import api from "../services/api";

const UserResult = () => {
  const [results, setResults] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (!token || !userId) return;
    fetchResults();
  }, [token, userId]);

  const fetchResults = async () => {
    try {
      const res = await api.get(`/result/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResults(res.data.data);
    } catch (err) {
      console.log("Results not found", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/submit/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchResults();
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Sidebar */}

      {role == "admin" ? (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : (
        <UserSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      {/* Main area */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            {/* Banner */}
            <div
              className="flex flex-col lg:flex-row min-h-[260px] md:min-h-[320px] w-full gap-6 
                bg-cover bg-center bg-no-repeat rounded-2xl items-start lg:items-end justify-between 
                p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(19,127,236,0.9) 0%, rgba(26,47,85,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/...")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="flex flex-col gap-4 relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 w-fit">
                  <BsStars className="text-white text-sm" />
                  <span className="text-white text-xs font-medium uppercase tracking-wider">
                    Top Pick for You
                  </span>
                </div>
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                  Ready to master Web Development?
                </h1>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  You're 80% through 'Web Development 101'. Pick up right where
                  you left off.
                </p>
              </div>

              <button className="relative z-10 w-full lg:w-auto flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white font-bold shadow-xl hover:scale-105 transition">
                <FaCirclePlay />
                Resume Learning
              </button>
            </div>

            {/* Results Table */}
            <RecentActivityTable tests={results} onDelete={handleDelete} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserResult;

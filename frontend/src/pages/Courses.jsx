import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllCourses from "../components/user/userCoursepages/AllCourses";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import UserSidebar from "../components/user/UserSidebar";

function Courses() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  // Sidebar toggle state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // If user is logged in, show Header + Sidebar layout
  if (token) {
    return (
      <div className="flex h-screen bg-background-light dark:bg-background-dark">
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

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <Header setIsSidebarOpen={setIsSidebarOpen} />

          {/* Scrollable Page Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-[1280px] mx-auto w-full">
            <AllCourses />
            <Footer />
          </main>
        </div>
      </div>
    );
  }

  // If not logged in, show Navbar layout
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <AllCourses />
      <Footer />
    </div>
  );
}

export default Courses;

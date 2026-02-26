

import React, { useEffect, useState } from "react";
import Header from "../components/admin/Header";
import UserSidebar from "../components/user/UserSidebar";
import CourseDisc from "../components/user/userCoursepages/CourseDisc";
import AssConfigrator from "../components/user/userCoursepages/AssConfigrator";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Login from "../components/Login";
import Sidebar from "../components/admin/Sidebar";

const CourseDetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get(`/course/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourse(res.data.data);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  if (!course) return <Login />;

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      {role === "Student" ? (
        <UserSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      {/* Main Area */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <CourseDisc />
            </div>

            <div className="lg:col-span-4">
              <AssConfigrator
                courseTitle={course.title}
                courseId={course._id}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseDetails;

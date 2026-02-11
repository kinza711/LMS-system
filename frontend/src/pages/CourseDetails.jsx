
import React, { useEffect, useState } from "react";
import Header from "../components/admin/Header";
import UserSidebar from "../components/user/UserSidebar";
import CourseDisc from "../components/user/userCoursepages/CourseDisc";
import AssConfigrator from "../components/user/userCoursepages/AssConfigrator";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Login from "../components/Login"
import Sidebar from "../components/admin/Sidebar";

function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState(null);

  //role checking

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const token = localStorage.getItem("token")


    const res = await api.get(`/course/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCourse(res.data.data);
  };

  if (!course) return <div> <Login /> </div>;

 return (
  <div className="min-h-screen bg-background-light dark:bg-background-dark">

    {/* ✅ Sidebar Fixed */}
    <aside className="fixed top-0 left-0 h-screen w-64 z-50">
      {role === "Student" ? <UserSidebar /> : <Sidebar />}
    </aside>

    {/* ✅ Main Content */}
    <div className="ml-64 min-h-screen">

      {/* ✅ Header Fixed */}
      <header className="fixed top-0 left-64 right-0 h-16 z-40 bg-white dark:bg-slate-900 shadow">
        <Header />
      </header>

      {/* ✅ Content (scrollable) */}
      <main className="pt-20 p-5 md:p-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Course Description */}
          <div className="lg:col-span-8">
            <CourseDisc />
          </div>

          {/* Assessment Configurator */}
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


}

export default CourseDetails;

import React, { useEffect, useState } from "react";
import Header from "../components/admin/Header";
import Sidebar from "../components/user/Sidebar";
import CourseDisc from "../components/user/userCoursepages/CourseDisc";
import AssConfigrator from "../components/user/userCoursepages/AssConfigrator";
import { useParams } from "react-router-dom";
import api from "../services/api";


function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState(null);

   useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const res = await api.get(`/course/${id}`);
    setCourse(res.data.data);
  };

  if (!course) return <p>Loading...</p>;


  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-100 font-display">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar className="hidden lg:block w-64 flex-shrink-0" />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Course Description - Left */}
          <div className="lg:col-span-8">
            <CourseDisc />
          </div>

          {/* Assessment Configurator - Right */}
          <div className="lg:col-span-4">
            <AssConfigrator courseTitle={course.title} courseId={course._id}/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseDetails;

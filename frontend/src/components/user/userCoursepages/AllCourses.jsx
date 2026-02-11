import { React, useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";

import api from "../../../services/api";
import CourseCards from "./CourseCards";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/course"); // 🔹 all courses
      setCourses(res.data.data || []);
    } catch (err) {
      console.log("Error fetching courses", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading courses...</p>;
  }
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] overflow-x-hidden min-h-screen font-display">

      {/* Main */}
      <main className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-8">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
          {/* Hero Section */}
          <div className="@container w-full">
            <div
              className="flex flex-col md:flex-row min-h-[320px] w-full gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center md:items-end justify-between p-8 md:p-12 relative overflow-hidden shadow-lg group"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(19, 127, 236, 0.9) 0%, rgba(26, 47, 85, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5yTE1VjHLJmT0j2lk2eV_xyjfI8L02h-y7bvnh7snB-m2ualZwQsJb8UUXQ5oGnwif0cGDAb4enoJzjQvRyv6uxWDEhiOh9rqFLvHOQsevekhLHJMjQV0WGiYTzUMTHC5VeqhxsHGS5i0hJTdvN-pqUMBV5mhw3ZErbJ_3RX8SAzGpYlZ50AujeGD62RLnQQmkwtx2yY1gAL2D4zVIZK46_3zB-TIjUEskiZYSmeUsp_ou_d-Vp1F1Ava7iFXhaVgO2Qn-5V3eF8")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="flex flex-col gap-4 text-left relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 w-fit">
                  <span className="material-symbols-outlined text-white text-sm"><BsStars /></span>
                  <span className="text-white text-xs font-medium uppercase tracking-wider">
                    Top Pick for You
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Ready to master Web Development?
                </h1>
                <p className="text-white/90 text-lg font-normal leading-relaxed max-w-lg">
                  You're 80% through 'Web Development 101'. Pick up right where you left off and earn your certificate.
                </p>
              </div>
              <div className="relative z-10 w-full md:w-auto">
                <button className="flex w-full md:w-auto min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-white hover:bg-slate-50 text-primary text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 shadow-xl">
                  <span className="material-symbols-outlined"><FaCirclePlay /></span>
                  <span className="truncate">Resume Learning</span>
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          {/* <CourseCards/> */}
          
          <CourseCards data={courses} />
          {/* Load More */}
          <div className="flex justify-center mt-6 gap-5">
            <button className="px-8 py-3 rounded-xl border border-[#e7edf3] dark:border-gray-700 bg-white dark:bg-[#1a2634] text-[#4c739a] hover:text-primary hover:border-primary transition-colors text-sm font-semibold shadow-sm">
              Load More Courses
            </button>
            <button onClick={()=> navigate(-1)}
             className="px-8 py-3 rounded-xl border border-[#e7edf3] dark:border-gray-700 bg-white dark:bg-[#1a2634] text-[#4c739a] hover:text-primary hover:border-primary transition-colors text-sm font-semibold shadow-sm">
              Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllCourses;

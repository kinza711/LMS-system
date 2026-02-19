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
      <main className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Hero Section */}
          <div className="w-full">
            <div
              className="flex flex-col lg:flex-row 
        min-h-[260px] md:min-h-[320px] 
        w-full gap-6 
        bg-cover bg-center bg-no-repeat 
        rounded-2xl 
        items-start lg:items-end 
        justify-between 
        p-6 sm:p-8 md:p-12 
        relative overflow-hidden shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(19, 127, 236, 0.9) 0%, rgba(26, 47, 85, 0.8) 100%), url("https://lh3.googleusercontent.com/...")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="flex flex-col gap-4 relative z-10 max-w-2xl">
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
                  you left off and earn your certificate.
                </p>
              </div>

              <div className="relative z-10 w-full lg:w-auto">
                <button className="w-full lg:w-auto flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white hover:bg-slate-50 text-primary text-sm sm:text-base font-bold transition-transform hover:scale-105 shadow-xl">
                  <FaCirclePlay />
                  Resume Learning
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <CourseCards data={courses} />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl border dark:border-gray-700 bg-white dark:bg-[#1a2634] text-[#4c739a] hover:text-primary hover:border-primary transition text-sm font-semibold shadow-sm">
              Load More Courses
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border dark:border-gray-700 bg-white dark:bg-[#1a2634] text-[#4c739a] hover:text-primary hover:border-primary transition text-sm font-semibold shadow-sm"
            >
              Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllCourses;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api"
import { MdToken } from "react-icons/md";

const CourseDisc = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const token = localStorage.getItem("token")
    try {
      const res = await api.get(`/course/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourse(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!course) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Course not found
      </div>
    );
  }

  return (
    <div className="lg:col-span-8 space-y-10">

      {/* ===== HEADER ===== */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase
              ${course.level === "basic"
                ? "bg-green-100 text-green-700"
                : "bg-purple-100 text-purple-700"
              }`}
          >
            {course.level}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          {course.title}
        </h1>


        {/* ===== IMAGE ===== */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={
              course?.pic
                ? `${import.meta.env.VITE_API_URL}/uploads/${course.pic}`
                : "https://i.pravatar.cc/150"
            }
            alt={course.title}
            className="w-full h-full object-cover"
          />
        
        </div>

        <p className="text-xl text-slate-600 max-w-2xl">
          {course.disc}
        </p>
      </section>

    </div>
  );
};

export default CourseDisc;

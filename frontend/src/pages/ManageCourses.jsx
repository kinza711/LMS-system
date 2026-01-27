
import React, { useEffect, useState } from "react";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import CourseStats from "../components/admin/CourseStats";
import AllCoursesTable from "../components/admin/AllCoursesTable";
import api from "../services/api";

import { MdLibraryBooks } from "react-icons/md";
import { MdRebaseEdit } from "react-icons/md";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function App() {
  const [courses, setCourses] = useState([]);
  const [basic, setBasic] = useState([]);
  const [pro, setPro] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchCourses();
    fetchBasics();
    fetchPro();
    
  }, []);


  useEffect(() => {
    setStats([
      {
        title: "Total Courses",
        value: courses.length,
        change: "Live data",
        icon: <MdLibraryBooks size={40} />,
        color: "text-primary",
        changeColor: "text-green-600",
        changeBg: "bg-green-50",
      },
      {
        title: "Basic Courses",
        value: basic.length,
        change: "Live data",
        icon: <MdRebaseEdit  size={40} />,
        color: "text-blue-500",
        changeColor: "text-blue-600",
        changeBg: "bg-blue-50",
      },
      {
        title: "Pro Courses",
        value: pro.length,
        change: "Live data",
        icon: <GiLevelFourAdvanced size={40} />,
        color: "text-purple-500",
        changeColor: "text-white-600",
        changeBg: "bg-yellow-50",
      },
    ]);
  }, [courses, basic, pro]);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/course");
      setCourses(res.data.data);
    } catch (err) {
      console.log("courses not found", err);
    }
  };

  const fetchBasics = async () => {
    try {
      const res = await api.get("/basic");
      setBasic(res.data.data); // ✅ FIXED
    } catch (err) {
      console.log("basic courses not found", err);
    }
  };

  const fetchPro = async () => {
    try {
      const res = await api.get("/pro");
      setPro(res.data.data); // ✅ FIXED
    } catch (err) {
      console.log("pro courses not found", err);
    }
  };

  
   const handleDelete = async (courseId) => {
        console.log("Delete course:" );
        try {
             await api.delete(`/course/${courseId}`);
            // setCourses(res.data.data)
            fetchCourses();
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <CourseStats stats={stats} />
            <AllCoursesTable courses={courses}  onDelete={handleDelete} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


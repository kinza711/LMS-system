import { GrAnnounce } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import api from "../../../services/api"
import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const AnnouncementStats = () => {

  const [formData, setFormData] = useState([]);
 const [all, setAll] = useState([]);
 const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);

 const[stats, setStats] = useState([])
  useEffect(()=>{
fetchPost();
  },[])

  useEffect(()=>{
    setStats([
      {
    label: "Total Announcements",
    value: all.length,
    icon: <GrAnnounce size={20} />,
    color: "text-red-800",
    bg: "bg-red-600/10",
  },
  {
    label: "Instructors",
    value: instructors.length,
    icon: <FaChalkboardTeacher size={20}/>,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    label: "Students",
    value: students.length,
    icon: <PiStudentFill size={20}/>,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  }
    ])

  },[all, instructors, students])




 const fetchPost = async() =>{
  try{
 const res = await api.get("/post", formData);
  setAll(res.data.data);
 setInstructors(res.data.data.filter(a => a.target === "instructors" || a.target === "all"));
setStudents(res.data.data.filter(a => a.target === "students" || a.target === "all"));
  // fetchPost();
  }catch(err){
    console.log("post not found", err)
  }
 }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`rounded-xl p-5 shadow-sm ${
            s.gradient
              ? "bg-gradient-to-br from-blue-50 to-blue-400 text-white"
              : "bg-white border border-[#e7edf3]"
          }`}
        >
          <div className="flex justify-between items-start">
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">
              {s.label}
            </p>
            <span
              className={`material-symbols-outlined p-1.5 rounded-lg ${
                s.bg || "bg-white/20"
              } ${s.color || "text-white"}`}
            >
              {s.icon}
            </span>
          </div>
          <p className="text-3xl font-bold mt-2">{s.value}</p>
        </div>
      ))}
        <Link
        to="/postannouncement"
        className="flex items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 transition-all"
      >
        <IoIosAddCircle size={40} className="text-blue-600" />
      </Link>
    </div>
  );
};

export default AnnouncementStats;

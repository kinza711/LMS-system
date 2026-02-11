import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosHelpCircle } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";


const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {

    try {
      await api.post("/logout");
      localStorage.removeItem("token");

      alert(" logout successfully");
      navigate("/login");

    } catch (err) {
      console.log("not logedout", err);
      alert("not logout");

    }
  }

  return (
    <aside className="w-64 hidden lg:flex flex-col bg-white dark:bg-[#15202b] border-r border-slate-200 dark:border-slate-800 h-full shrink-0 transition-all duration-300">
      <div className="flex items-center gap-1 px-6 py-6 border-b border-slate-100 dark:border-slate-800/50">
        <div className="size-18 text-primary flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <img src="/lms logo.png" alt="logo" height={40} width={70} />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">EduLearn</h2>
      </div>

      <div className="flex flex-col justify-between flex-1 overflow-y-auto px-4 py-6">
        <nav className="flex flex-col gap-2">
          <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Menu</p>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group transition-colors">
            <span className="material-symbols-outlined icon-fill"><MdDashboard /></span>
            <span className="text-sm font-medium">
              <Link to="/UserDashboard">
                Dashboard
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined"><MdLibraryBooks /></span>
            <span className="text-sm font-medium">
              <Link to="/courses">
                Courses
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined"><MdLibraryBooks /></span>
            <span className="text-sm font-medium">
              <Link to="/result">
                Result
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined"><FaUser /></span>
            <span className="text-sm font-medium">
              <Link to="/UserProfile">
                Profile
              </Link>
            </span>
          </div>
        </nav>

        <nav className="flex flex-col gap-2 mt-6">
          <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">System</p>
          {/* <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined"><HiSpeakerWave /></span>
            <span className="text-sm font-medium">Announcements</span>
            <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
          </a> */}
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined"><IoIosHelpCircle /></span>
            <span className="text-sm font-medium">Support</span>
          </div>
          <button onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-slate-800 hover:text-red-900 dark:hover:text-white transition-colors mt-4">

            <span className="material-symbols-outlined"><FiLogOut /></span>
            <span className="text-sm font-medium">Logout</span>
          </button>



        </nav>
      </div>

      {/* <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-9 shrink-0"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuANmhgx232R0b_wNlnPKuOYT8CUO4bt6Vmq5HpQh9mb71aJCRPK1eI-yfIfXrjWvZ3dWkotNxAo_RpR4bt7gflu4XzAZYJO0PRpba5WQYVBK0v9Cu4QjFCG5yTZZ3VwBVjT-EZ6yZ-9qUgrLbuISkmU-9MRGlnxol0eG8KnBC2rOJgdnnTeN3DH_SDyNi7T6DKult-v9gFvqnoGq8HpjWunafO0tRSjus_TInInFm0ZfKNS7kvCpldxF7EGU2-6wjhxDjTeZk8jzfc")` }}
          ></div>
          <div className="flex flex-col overflow-hidden">
            <h3 className="text-slate-900 dark:text-white text-sm font-bold truncate">Alex Johnson</h3>
            <p className="text-slate-500 text-xs truncate">ID: 8839201</p>
          </div>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { MdLibraryBooks } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="w-72 flex-none bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col justify-between h-full z-20 shadow-sm">
      <div className="flex flex-col h-full">
        {/* Branding */}
        <div className="p-6 pb-2">
          <div className="flex items-center  mb-8">
            <img src="/lms logo.png" alt="logo" height={40} width={70} />
            <div className="flex flex-col">

              <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
                EduMaster
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide">
                Instructor Panel
              </p>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-1.5">
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary dark:text-blue-400 group transition-all duration-200" href="#">
              <span className="material-symbols-outlined icon-filled"><MdDashboard /></span>
              <p className="text-sm font-bold leading-normal">
                <Link to="/instrctorDashbord">
                  Dashboard
                </Link>
              </p>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200" href="#">
              <span className="material-symbols-outlined"><HiUsers /></span>
              <p className="text-sm font-medium leading-normal">
                <Link to="/usermanagement">
                  Users Management
                </Link>
              </p>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200" href="#">
              <span className="material-symbols-outlined"><MdLibraryBooks /></span>
              <p className="text-sm font-medium leading-normal">
                <Link to="/managecourse">
                  Courses Management
                </Link>
              </p>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200" href="#">
              <span className="material-symbols-outlined"><FaClipboardCheck /></span>
              <p className="text-sm font-medium leading-normal">
                <Link to="/tests">
                  Tests Management
                </Link>
              </p>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200" href="#">
              <span className="material-symbols-outlined"><HiDocumentReport /></span>
              <p className="text-sm font-medium leading-normal">Results & Reports</p>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200" href="#">
              <span className="material-symbols-outlined"><HiMiniSpeakerWave /></span>
              <p className="text-sm font-medium leading-normal">
                <Link to="/announcement">
                  Announcements
                </Link>
              </p>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200" href="#">
              <span className="material-symbols-outlined"><MdMessage /></span>
              <p className="text-sm font-medium leading-normal">Messages</p>
              <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </a>
          </nav>
        </div>
        {/* Footer / Logout */}
        <div className="p-6 mt-auto border-t border-slate-100 dark:border-slate-800">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200" href="#">
            <span className="material-symbols-outlined"><MdLogout /></span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

// responsive header with profile img and sidebar menu
import React from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ setIsSidebarOpen }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-30">
      {/* Left */}
      <h2 className="text-lg font-bold">
        Welcome{" "}
        <span className="text-[#44A4BB] capitalize">
          {user?.name || "Guest"}
        </span>
      </h2>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Profile */}
        <Link to="/UserProfile" className="flex items-center gap-2">
          <img
            src={user?.pic || "https://i.pravatar.cc/150"}
            className="w-10 h-10 rounded-full object-cover"
            alt="profile"
          />

          <div className="hidden md:block">
            <p className="text-sm font-bold">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>
        </Link>

        {/* ✅ Menu Button (Mobile Only) */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-3xl"
        >
          <HiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;

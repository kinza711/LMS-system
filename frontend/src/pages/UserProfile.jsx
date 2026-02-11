
import React, { useState, useEffect } from "react";
import ProfileCard from "../components/userProfile/ProfileCard";
import Header from "../components/admin/Header";
import UserSidebar from "../components/user/UserSidebar";
import api from "../services/api";
import Sidebar from "../components/admin/Sidebar";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const res = await api.get("/profile", {
          headers: { Authorization: `Bearer ${token}`, },
        });
        setCurrentUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user", err.response?.data || err.message);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">

      <div className="layout-container flex h-full max-w-full mx-auto w-full">

        {role === "Student" ? <UserSidebar /> : <Sidebar />}

        {/* Yellow Grid Section */}
        <div className="grid h-full grid-cols-1 lg:grid-cols-12 w-full gap-8">

          {/* Header */}
          <div className="lg:col-span-12 w-full">
            <Header />
          </div>

          {/* ✅ Center Profile Card */}
          <div className="lg:col-span-12 w-full flex justify-center">

            <div className="w-full max-w-xl">
              {currentUser ? (
                <ProfileCard user={currentUser} setUser={setCurrentUser} />
              ) : (
                <p className="text-center text-gray-500">Loading profile...</p>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>


  );
};

export default ProfilePage;



// import React from "react";
// import ProfileCard from "../components/userProfile/ProfileCard";
// import Header from "../components/admin/Header";
// import UserSidebar from "../components/user/UserSidebar";

// const ProfilePage = () => {
//   const user = JSON.parse(localStorage.getItem("user") || "{}");

//   return (
//     <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
//       <Header />
//       <div className="layout-container flex h-full max-w-full mx-auto w-full">
//         <UserSidebar />
//         <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 p-5">
//           <div className="lg:col-span-6 w-full">
//             <ProfileCard user={user} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



import React, { useState, useEffect } from "react";
import ProfileCard from "../components/userProfile/ProfileCard";
import Header from "../components/admin/Header";
import UserSidebar from "../components/user/UserSidebar";
import api from "../services/api";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const res = await api.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCurrentUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user", err.response?.data || err.message);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      <Header />
      <div className="layout-container flex h-full max-w-full mx-auto w-full">
        <UserSidebar />
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 p-5">
          <div className="lg:col-span-6 w-full">
            {currentUser ? (
              <ProfileCard user={currentUser} setUser={setCurrentUser} />
            ) : (
              <p className="text-center text-gray-500">Loading profile...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

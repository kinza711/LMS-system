// import React from "react";
// import StatsCard from "../components/userProfile/StatsCard";
// import RecentActivityTable from "../components/userProfile/RecentActivityTable";
// import Header from "../components/admin/Header"
// import UserSidebar from "../components/user/UserSidebar"
// import { BsStars } from "react-icons/bs";
// import { FaCirclePlay } from "react-icons/fa6";
// import { useEffect } from "react";
// import { useState } from "react";
// import api from "../services/api"


// const ProfilePage = () => {

//   const [results, setResults] = useState([]);

//   const token = localStorage.getItem("token");
//   const userId = localStorage.getItem("id");

//   useEffect(() => {
//     if (!token || !userId) {
//       console.error("Missing token or user ID", { token, userId });
//       return;
//     }

//     fetchResults();
//   }, [token, userId]);

//      const fetchResults = async () => {
//       try {
//         const res = await api.get(`/result/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setResults(res.data.data);
//       } catch (err) {
//         console.log("Results not found", err.response?.data || err.message);
//       }
//     };

//   // delete resylt
//   const handleDelete = async (id) => {
//     const token = localStorage.getItem("token");
//     try {
//       await api.delete(`/submit/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchResults();
//     } catch (err) {
//       console.log("Delete failed", err);
//     }
//   };

//   return (
//     <div className="h-screen w-full bg-background-light dark:bg-background-dark">

//       {/* Header */}
//       <Header />

//       {/* Main Layout */}
//       <div className="flex w-full h-full">

//         {/* Sidebar */}
//         <UserSidebar />

//         {/* Page Content */}
//         <main className="flex-1 p-6 flex justify-center">

//           {/* Center Container */}
//           <div className="w-full max-w-6xl flex flex-col gap-8">

//             {/* Banner Card */}
            // <div
            //   className="flex flex-col md:flex-row h-[320px] w-full gap-6 
            //            bg-cover bg-center bg-no-repeat rounded-2xl 
            //            items-center md:items-end justify-between 
            //            p-8 md:p-12 relative overflow-hidden shadow-lg"
            //   style={{
            //     backgroundImage:
            //       'linear-gradient(135deg, rgba(19, 127, 236, 0.9) 0%, rgba(26, 47, 85, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5yTE1VjHLJmT0j2lk2eV_xyjfI8L02h-y7bvnh7snB-m2ualZwQsJb8UUXQ5oGnwif0cGDAb4enoJzjQvRyv6uxWDEhiOh9rqFLvHOQsevekhLHJMjQV0WGiYTzUMTHC5VeqhxsHGS5i0hJTdvN-pqUMBV5mhw3ZErbJ_3RX8SAzGpYlZ50AujeGD62RLnQQmkwtx2yY1gAL2D4zVIZK46_3zB-TIjUEskiZYSmeUsp_ou_d-Vp1F1Ava7iFXhaVgO2Qn-5V3eF8")',
            //   }}
            // >
            //   {/* Overlay */}
            //   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            //   {/* Text */}
            //   <div className="flex flex-col gap-4 relative z-10 max-w-xl">
            //     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 w-fit">
            //       <BsStars className="text-white text-sm" />
            //       <span className="text-white text-xs font-medium uppercase tracking-wider">
            //         Top Pick for You
            //       </span>
            //     </div>

            //     <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
            //       Ready to master Web Development?
            //     </h1>

            //     <p className="text-white/90 text-lg leading-relaxed">
            //       You're 80% through 'Web Development 101'. Pick up right where you left off.
            //     </p>
            //   </div>

            //   {/* Button */}
            //   <button className="relative z-10 flex items-center gap-2 px-6 h-12 rounded-xl bg-white font-bold shadow-xl hover:scale-105 transition">
            //     <FaCirclePlay />
            //     Resume Learning
            //   </button>
            // </div>

//             {/* Table */}
//             <RecentActivityTable
//               tests={results}
//               onDelete={handleDelete} />
//             {/* tests is an map array name while results is a state  */}

//           </div>
//         </main>
//       </div>
//     </div>
//   );

// };

// export default ProfilePage;



import React from "react";
import StatsCard from "../components/userProfile/StatsCard";
import RecentActivityTable from "../components/userProfile/RecentActivityTable";
import Header from "../components/admin/Header"
import UserSidebar from "../components/user/UserSidebar"
import { BsStars } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api"


const ProfilePage = () => {

  const [results, setResults] = useState([]);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (!token || !userId) {
      console.error("Missing token or user ID", { token, userId });
      return;
    }

    fetchResults();
  }, [token, userId]);

     const fetchResults = async () => {
      try {
        const res = await api.get(`/result/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResults(res.data.data);
      } catch (err) {
        console.log("Results not found", err.response?.data || err.message);
      }
    };

  // delete resylt
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await api.delete(`/submit/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchResults();
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

 return (
  <div className="w-full min-h-screen ">

    {/* Full Dashboard Wrapper */}
    <div className="flex w-full min-h-screen">

      {/* ✅ Sidebar Fixed */}
      <aside className="w-64 fixed left-0 top-0 h-screen bg-white z-50">
        <UserSidebar />
      </aside>

      {/* ✅ Right Side Wrapper */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        {/* ✅ Header Fixed */}
        <header className="fixed top-0 left-64 right-0 z-40 bg-white shadow">
          <Header />
        </header>

        {/* ✅ Scrollable Content */}
        <main className="pt-20 px-6 flex justify-center">

          <div className="w-full max-w-6xl flex flex-col gap-8">

            {/* Banner */}
            <div
              className="flex flex-col md:flex-row h-[320px] w-full gap-6 
                       bg-cover bg-center bg-no-repeat rounded-2xl 
                       items-center md:items-end justify-between 
                       p-8 md:p-12 relative overflow-hidden shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(19, 127, 236, 0.9) 0%, rgba(26, 47, 85, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5yTE1VjHLJmT0j2lk2eV_xyjfI8L02h-y7bvnh7snB-m2ualZwQsJb8UUXQ5oGnwif0cGDAb4enoJzjQvRyv6uxWDEhiOh9rqFLvHOQsevekhLHJMjQV0WGiYTzUMTHC5VeqhxsHGS5i0hJTdvN-pqUMBV5mhw3ZErbJ_3RX8SAzGpYlZ50AujeGD62RLnQQmkwtx2yY1gAL2D4zVIZK46_3zB-TIjUEskiZYSmeUsp_ou_d-Vp1F1Ava7iFXhaVgO2Qn-5V3eF8")',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Text */}
              <div className="flex flex-col gap-4 relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 w-fit">
                  <BsStars className="text-white text-sm" />
                  <span className="text-white text-xs font-medium uppercase tracking-wider">
                    Top Pick for You
                  </span>
                </div>

                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
                  Ready to master Web Development?
                </h1>

                <p className="text-white/90 text-lg leading-relaxed">
                  You're 80% through 'Web Development 101'. Pick up right where you left off.
                </p>
              </div>

              {/* Button */}
              <button className="relative z-10 flex items-center gap-2 px-6 h-12 rounded-xl bg-white font-bold shadow-xl hover:scale-105 transition">
                <FaCirclePlay />
                Resume Learning
              </button>
            </div>
            {/* Results Table */}
            <RecentActivityTable tests={results} onDelete={handleDelete} />

          </div>
        </main>
      </div>
    </div>
  </div>
);


};

export default ProfilePage;

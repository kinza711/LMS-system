import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import api from "../../services/api";

const Header = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);

        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        console.log("Profile fetch error:", err.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-10">
      {/* LEFT */}
      <h2 className="text-xl font-bold">
        Welcome back{" "}
        <span className="text-[#44A4BB] capitalize">
          {user?.name || "Guest"}
        </span>
      </h2>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">
          <IoMdSearch className="text-slate-400" />
          <input
            className="bg-transparent ml-2 w-full text-sm outline-none"
            placeholder="Search..."
          />
        </div>

        {/* ICONS */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border">
          <FaBell />
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full border">
          <IoMdSettings />
        </button>

        {/* USER */}
        <div className="flex items-center gap-3">
 {/* <img
  src={
    user?.pic?.startsWith("http")
      ? user.pic
      : `https://res.cloudinary.com/dtxu7aar9/image/upload/${user.pic}.jpg`
  }
/> */}

 <img
  src={
    user?.pic?.startsWith("http")
      ?  `https://res.cloudinary.com/dtxu7aar9/image/upload/${user.pic}.jpg`
      : user.pic 
  }
/>



          <div className="hidden md:block">
            <p className="text-sm font-bold capitalize">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-slate-500 capitalize">
              {user?.role || "Role"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// import React, { useEffect, useState } from "react";
// import { IoMdSettings } from "react-icons/io";
// import { FaBell } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import api from "../../services/api";

// const Header = () => {
//   const [user, setUser] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!token) return;

//       try {
//         const res = await api.get("/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser(res.data.user);

//         // Optional: update localStorage for fast reloads
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//       } catch (err) {
//         console.error("Failed to fetch user:", err.response?.data || err.message);
//         setUser(null);
//       }
//     };

//     fetchUser();
//   }, [token]);

//   // Optional loader while user info is being fetched
//   if (!user) {
//     return (
//       <header className="flex-none flex items-center justify-between px-8 py-4 bg-[#FFFFFF] backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
//         <div>Loading user...</div>
//       </header>
//     );
//   }

//   return (
//     <header className="flex-none flex items-center justify-between px-8 py-4 bg-[#FFFFFF] backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
      
//       {/* LEFT */}
//       <div className="flex flex-col items-center gap-4">
//         <h2 className="text-xl font-bold">
//           Welcome back{" "}
//           <span className="text-[#44A4BB] font-bold font-sans capitalize">
//             {user.name}
//           </span>
//         </h2>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-2">
//         {/* SEARCH */}
//         <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">
//           <IoMdSearch className="text-slate-400" />
//           <input
//             className="bg-transparent ml-2 w-full text-sm outline-none"
//             placeholder="Search..."
//           />
//         </div>

//         {/* NOTIFICATION */}
//         <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-gray-200 border-[0.25px]">
//           <FaBell />
//         </button>

//         {/* SETTINGS */}
//         <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-gray-200 border-[0.25px]">
//           <IoMdSettings />
//         </button>

//         {/* USER INFO */}
//         <div className="flex items-center gap-3">
//           <img
//             src={user.pic || "https://i.pravatar.cc/150"}
//             className="w-10 h-10 rounded-full object-cover"
//             alt="profile"
//           />
//           <div className="hidden md:block">
//             <p className="text-sm font-bold capitalize">{user.name}</p>
//             <p className="text-xs text-slate-500 capitalize">{user.role}</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

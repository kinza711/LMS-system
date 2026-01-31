// import React from "react";
// import { IoMdSettings } from "react-icons/io";
// import { FaBell } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";

// const Header = () => {
//   return (
//     <header className="flex-none flex items-center justify-between px-8 py-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-10 sticky top-0">
//       <div className="flex items-center gap-4">
//         <button className="md:hidden text-slate-500 hover:text-blue-500">
//           <span className="material-symbols-outlined">menu</span>
//         </button>
//         <div>
//           <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Dashboard Overview</h2>
//           <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back, Admin</p>
//         </div>
//       </div>
//       <div className="flex items-center gap-6">
//         <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2.5 w-72 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
//           <span className="material-symbols-outlined text-slate-400 text-[20px]"><IoMdSearch /></span>
//           <input
//             className="bg-transparent border-none text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:ring-0 w-full ml-2"
//             placeholder="Search anything..."
//             type="text"
//           />
//         </div>
//         <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
//           <span className="material-symbols-outlined text-[20px]"><FaBell /></span>
//           <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></span>
//         </button>
//         <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
//           <span className="material-symbols-outlined text-[20px]"><IoMdSettings /></span>
//         </button>
//         <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
//         <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
//          <div
//   className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm"
//   style={{
//     backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAafyVJPwKTDBWOqAwRueiogzJZ0PyUSo-bCIKakaD55ElfSBWqjEJ7Q1E_UjO6KMU1X_Sym5tkJI6oqJp0bzKUAF3Pr7hpMRBJQ2UCBDNOEmTzN2oOzffoAh5YMHSpkJ6yLlvZBDAmoWiexKblDnTsJuJLH5JT-fBmuFvxr-kJxkqa5zL_-r3xf3iakz9uK7FbLnXWtek9k7vmHvjLusD_yXT2WDv_F5Na0wi0PQObckak6IVrU93z_fWXM8NJFJ8wRc-xA8SXxfk")`,
//   }}
// ></div>

//           <div className="hidden xl:block">
//             <p className="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
//             <p className="text-xs text-slate-500 dark:text-slate-400">Super Admin</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useEffect, useState } from "react";
import api from "../../services/api"

const Header = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      const res = await api.get(`/users/${userId}`);
      setUser(res.data); // ✅ DIRECT OBJECT
    };

    fetchUser();
  }, [userId]);

  return (
    <header className="px-8 py-5 bg-white border-b flex justify-between">

      <div>
        <h2 className="text-xl font-bold">
          Dashboard Overview
        </h2>
        <p className="text-sm text-slate-500">
          Welcome back, {user?.name || "kinza guest"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-cover"
          style={{
            backgroundImage: `url(${user?.pic || "https://i.pravatar.cc/150"})`
          }}
        />
        <div>
          <p className="font-bold">{user?.name}</p>
          <p className="text-xs text-slate-500 capitalize">
            {user?.role}
          </p>
        </div>
      </div>

    </header>
  );
};

export default Header;

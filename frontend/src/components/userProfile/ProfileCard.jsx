
// import React, { useEffect, useState } from "react";
// import { FaPencil } from "react-icons/fa6";
// import { TbPasswordFingerprint } from "react-icons/tb";
// import { IoMdMailUnread } from "react-icons/io";
// import { FaUser } from "react-icons/fa";
// import { MdOutlineSaveAlt } from "react-icons/md";
// import api from "../../services/api";

// const ProfileCard = ({ user }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState(""); // optional new password
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token");

//   // ✅ Reset form fields whenever user changes
//   useEffect(() => {
//     if (user) {
//       setName(user.name || "");
//       setEmail(user.email || "");
//       setPassword(""); // clear password for security
//     }
//   }, [user]);

//   const handleSave = async () => {
//     if (!token) return alert("User not authenticated");

//     try {
//       setLoading(true);
//       const res = await api.put(
//         "/profile",
//         { name, email, password },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Profile updated successfully!");
//       setPassword(""); // clear password
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert(err.response?.data?.message || "Failed to update profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center relative overflow-hidden">
//       {/* Header Background Decoration */}
//       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500/10 to-primary/10"></div>

//       <div className="relative z-10 flex flex-col items-center w-full">
//         {/* Avatar */}
//         <div className="relative group">
//           <div
//             className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 border-4 border-white dark:border-slate-900 shadow-md"
//             style={{ backgroundImage: `url(${user.avatar})` }}
//           ></div>
//           <button className="absolute bottom-1 right-1 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md text-primary hover:text-blue-600 transition-colors border border-slate-100 dark:border-slate-700 group-hover:scale-110 duration-200">
//             <span className="material-symbols-outlined !text-xl"><FaPencil /></span>
//           </button>
//         </div>

//         {/* Name and Role */}
//         <div className="mt-4 text-center bg-amber-400 font-bold text-lg">
//           <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">{user.name}</h2>
//           <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
//             {user.role}
//           </div>
//         </div>

//         {/* Form */}
//         <form className="w-full mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
//           {/* Full Name */}
//           <label className="flex flex-col w-full">
//             <span className="text-slate-700 dark:text-slate-300 text-sm font-medium pb-1.5 ml-1">
//               Full Name
//             </span>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
//                 <span className="material-symbols-outlined !text-lg"><FaUser /></span>
//               </div>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 pl-10 h-11 text-sm transition-all"
//               />
//             </div>
//           </label>

//           {/* Email */}
//           <label className="flex flex-col w-full">
//             <span className="text-slate-700 dark:text-slate-300 text-sm font-medium pb-1.5 ml-1">
//               Email Address
//             </span>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
//                 <span className="material-symbols-outlined !text-lg"><IoMdMailUnread /></span>
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 pl-10 h-11 text-sm transition-all"
//               />
//             </div>
//           </label>

//           {/* Password */}
//           <label className="flex flex-col w-full">
//             <span className="text-slate-700 dark:text-slate-300 text-sm font-medium pb-1.5 ml-1">
//               Password
//             </span>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
//                 <span className="material-symbols-outlined !text-lg"><TbPasswordFingerprint /></span>
//               </div>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 pl-10 h-11 text-sm transition-all"
//               />
//             </div>
//           </label>

//           {/* Save Button */}
//           <button
//             type="button"
//             onClick={handleSave}
//             disabled={loading}

//             className="mt-2 w-full bg-red-900 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
//           >

//             <span className="material-symbols-outlined !text-xl"><MdOutlineSaveAlt /></span>
//             {loading ? "Saving..." : "Save Changes"}
//           </button>


//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;



import React, { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { TbPasswordFingerprint } from "react-icons/tb";
import { IoMdMailUnread } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import api from "../../services/api";

const ProfileCard = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // optional new password
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // Whenever user prop changes, update form fields
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPassword(""); // always reset password
    }
  }, [user]);

  const handleSave = async () => {
    if (!token) return alert("User not authenticated");

    try {
      setLoading(true);
      const res = await api.put(
        "/profile",
        { name, email, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Profile updated successfully!");
      setPassword(""); // reset password field
      setUser(res.data.user); // update parent state so UI refreshes
    } catch (err) {
      console.error("Profile update error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center relative overflow-hidden">
      {/* Header Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500/10 to-primary/10"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Avatar */}
        <div className="relative group">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 border-4 border-white dark:border-slate-900 shadow-md"
            style={{ backgroundImage: `url(${user.avatar})` }}
          ></div>
          <button className="absolute bottom-1 right-1 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md text-primary hover:text-blue-600 transition-colors border border-slate-100 dark:border-slate-700 group-hover:scale-110 duration-200">
            <FaPencil />
          </button>
        </div>

        {/* Name and Role */}
        <div className="mt-4 text-center">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">{user.name}</h2>
          <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {user.role}
          </div>
        </div>

        {/* Form */}
        <form className="w-full mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <label className="flex flex-col w-full">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium pb-1.5 ml-1">
              Full Name
            </span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FaUser className="text-lg" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 pl-10 h-11 text-sm transition-all"
              />
            </div>
          </label>

          {/* Email */}
          <label className="flex flex-col w-full">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium pb-1.5 ml-1">
              Email Address
            </span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <IoMdMailUnread className="text-lg" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 pl-10 h-11 text-sm transition-all"
              />
            </div>
          </label>

          {/* Password */}
          <label className="flex flex-col w-full">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium pb-1.5 ml-1">
              Password
            </span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <TbPasswordFingerprint className="text-lg" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 pl-10 h-11 text-sm transition-all"
              />
            </div>
          </label>

          {/* Save Button */}
          <button
            type="button"
            onClick={handleSave}
            disabled={loading}
            className="mt-2 w-full bg-red-900 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;

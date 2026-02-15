// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import api from "../services/api.js"


// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "Student"
//   })
//   // 2️⃣ Input change handler
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // 3️⃣ Form submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ❗ page reload stop

//     try {
//       const res = await api.post("/register", formData)

//       console.log("Register response:", res.data);

//       // simple redirect
//       navigate("/login");
//     } catch (error) {
//       console.log("Register error:", error.response?.data);
//     }
//   };


//   return (
//     <div className="flex min-h-screen w-full overflow-hidden font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

//       {/* LEFT SIDE */}
//       <div className="hidden lg:flex w-1/2 relative bg-primary/5 flex-col justify-between p-12 border-r border-slate-200 dark:border-slate-800">
//         <div className="absolute inset-0 opacity-40 bg-[radial-gradient(at_0%_0%,hsla(212,83%,68%,1)_0,transparent_50%),radial-gradient(at_100%_100%,hsla(212,83%,48%,0.5)_0,transparent_50%)]" />

//         <div className="relative z-10">
//           <div className="flex items-center gap-3 mb-8">
//             <div className="size-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white">
//               <span className="material-symbols-outlined">school</span>
//             </div>
//             <span className="text-2xl font-bold">LMS Platform</span>
//           </div>

//           <img
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6xUTQnT5ljPNW9GDrVL28Vw93AxJYDo-x1T_vLVyuZE39VklFlOttRgwHo6MPeIf3idpdYlMztQPpNsiRq4uxquo9_parVov9-B8nq7Xq6vPfOuoq6wXXCIXKibaAfi1CzFh1ANPHYPujrcih-daEWgjiieu66M2WCgUuGataikhiCOUDmAvjEYUTDWPcDSNMRhmO222EkprqT-twTmCqXE8289OybLVa_2Txipi12ZkHkfK0ZyLO0k0RmrSpm4V253cC7Dx8Qs"
//             alt="Students"
//             className="rounded-2xl shadow-xl h-64 w-full object-cover mb-8"
//           />

//           <h2 className="text-4xl font-extrabold mb-4">
//             Empower your <span className="text-primary">learning journey</span>
//           </h2>
//           <p className="text-slate-600 dark:text-slate-300">
//             Join thousands of students and instructors in the world’s leading LMS.
//           </p>
//         </div>


//       </div>

//       {/* RIGHT SIDE */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-24">
//         <div className="max-w-md w-full space-y-8">

//           {/* Header */}
//           <form onSubmit={handleSubmit}>
//             <div>
//               <h1 className="text-3xl font-extrabold">Create your Account</h1>
//               <p className="text-slate-600 dark:text-slate-400 mt-2">
//                 Join our learning community today
//               </p>
//             </div>

//             {/* Role */}
//             <div className="grid grid-cols-2 gap-2 bg-slate-200/60 dark:bg-slate-800/60 p-1.5 my-5 rounded-xl">
//               {["Student", "Instructor"].map((role) => (
//                 <label key={role} className="cursor-pointer">
//                   <input type="radio" name="role" className="sr-only peer"
//                     value={role}
//                     checked={formData.role === role}
//                     onChange={handleChange} />
//                   <div className="py-2.5 text-center font-bold rounded-lg peer-checked:bg-white peer-checked:text-primary dark:peer-checked:bg-slate-700">
//                     {role}
//                   </div>
//                 </label>
//               ))}
//             </div>
//             {/* Inputs */}
//             <div className="space-y-5">
//               <input name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" placeholder="Full Name"
//               />
//               <input name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" placeholder="Email" />
//               <input name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" placeholder="Password" type="password" />

//             </div>
//             {/* Terms */}
//             <label className="flex items-start gap-3 my-5 text-sm">
//               <input type="checkbox" className="mt-1" />
//               <span>
//                 I agree to the <a href="#" className="text-primary font-bold">Terms</a> and <a href="#" className="text-primary font-bold">Privacy</a>
//               </span>
//             </label>
//             {/* Button */}
//             <button
//               className="w-full py-4 rounded-xl bg-[#44A4BB] text-white font-bold hover:bg-[#185564] transition">
//               Create Account
//             </button>
//             {/* Footer */}
//             <p className="text-center text-sm text-slate-600 dark:text-slate-400">
//               Already have an account?
//               <Link to="/login"
//                 className="text-primary font-bold ml-1">
//                 Sign In
//               </Link>
//             </p>
//           </form>



//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api.js"


const Register = () => {
  const navigate = useNavigate();
  const [profileImageFile, setProfileImageFile] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student"
  })
  // 2️⃣ Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // for imag handling 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file); // real file
    }
  };


  // 3️⃣ Form submit handler
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // ❗ page reload stop

  //   try {
  //     const res = await api.post("/register", formData)

  //     console.log("Register response:", res.data);

  //     // simple redirect
  //     navigate("/login");
  //   } catch (error) {
  //     console.log("Register error:", error.response?.data);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("role", formData.role);

      // ✅ append the actual file object
      if (profileImageFile) {
        data.append("profile", profileImageFile); // 'pic' = multer key
      }

      // const res = await api.post(`${import.meta.env.VITE_API_URL}/register`, data,
      const res = await api.post("/register", data,
         {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Register response:", res.data);
      alert("User registered successfully!");
      navigate("/login");

    } catch (error) {
      console.error("Register error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };


  return (
    <div className="flex min-h-screen w-full overflow-hidden font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative bg-primary/5 flex-col justify-between p-12 border-r border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(at_0%_0%,hsla(212,83%,68%,1)_0,transparent_50%),radial-gradient(at_100%_100%,hsla(212,83%,48%,0.5)_0,transparent_50%)]" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="text-2xl font-bold">LMS Platform</span>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6xUTQnT5ljPNW9GDrVL28Vw93AxJYDo-x1T_vLVyuZE39VklFlOttRgwHo6MPeIf3idpdYlMztQPpNsiRq4uxquo9_parVov9-B8nq7Xq6vPfOuoq6wXXCIXKibaAfi1CzFh1ANPHYPujrcih-daEWgjiieu66M2WCgUuGataikhiCOUDmAvjEYUTDWPcDSNMRhmO222EkprqT-twTmCqXE8289OybLVa_2Txipi12ZkHkfK0ZyLO0k0RmrSpm4V253cC7Dx8Qs"
            alt="Students"
            className="rounded-2xl shadow-xl h-64 w-full object-cover mb-8"
          />

          <h2 className="text-4xl font-extrabold mb-4">
            Empower your <span className="text-primary">learning journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Join thousands of students and instructors in the world’s leading LMS.
          </p>
        </div>


      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-md w-full space-y-8">

          {/* Header */}
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="text-3xl font-extrabold">Create your Account</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Join our learning community today
              </p>
            </div>

            {/* Role */}
            <div className="grid grid-cols-2 gap-2 bg-slate-200/60 dark:bg-slate-800/60 p-1.5 my-5 rounded-xl">
              {["Student", "Instructor"].map((role) => (
                <label key={role} className="cursor-pointer">
                  <input type="radio" name="role" className="sr-only peer"
                    value={role}
                    checked={formData.role === role}
                    onChange={handleChange} />
                  <div className="py-2.5 text-center font-bold rounded-lg peer-checked:bg-white peer-checked:text-primary dark:peer-checked:bg-slate-700">
                    {role}
                  </div>
                </label>
              ))}
            </div>
            {/* Inputs */}
            <div className="space-y-5">
              <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" placeholder="Full Name"
              />
              <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" placeholder="Email" />
              <input name="password"  value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border bg-transparent" placeholder="Password" type="password" />
              <input
                type="file"
                name="profile"
                onChange={handleImageChange}
                className="w-full px-4 py-3 rounded-xl border bg-transparent"
                placeholder="Upload profile Image"
              />

            </div>
            {/* Terms */}
            <label className="flex items-start gap-3 my-5 text-sm">
              <input type="checkbox" className="mt-1" />
              <span>
                I agree to the <a href="#" className="text-primary font-bold">Terms</a> and <a href="#" className="text-primary font-bold">Privacy</a>
              </span>
            </label>
            {/* Button */}
            <button
              className="w-full py-4 rounded-xl bg-[#44A4BB] text-white font-bold hover:bg-[#185564] transition">
              Create Account
            </button>
            {/* Footer */}
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?
              <Link to="/login"
                className="text-primary font-bold ml-1">
                Sign In
              </Link>
            </p>
          </form>



        </div>
      </div>
    </div>
  );
};

export default Register;






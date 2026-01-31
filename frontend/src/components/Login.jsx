
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api"
import { TbMailFilled } from "react-icons/tb";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  });

  // 🔹 handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", formData);
      localStorage.setItem("token", res.data.token); // ✅ store jwt token

      const role = res.data.role;

      if(!role){
        alert("role is missing");
        return
      }

      // 🔁 Role based dashboard
      if (role === "Student") {
        navigate("/userDashboard");
      }
      else if (role === "Instructor") {
        navigate("/instrctorDashbord");
      }
      else if (role === "admin") {
        navigate("/adminDashboard");
      } else {
        alert("uswr not found");
      }

    } catch (err) {
      console.log(err.response?.data);
    }
  }
  return (

    <div className="flex min-h-screen w-full overflow-hidden font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

      {/* LEFT SIDE (same branding as Register) */}
      <div className="hidden lg:flex w-1/2 relative bg-primary/5 flex-col justify-between p-12 border-r border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(at_0%_0%,hsla(212,83%,68%,1)_0,transparent_50%),radial-gradient(at_100%_100%,hsla(212,83%,48%,0.5)_0,transparent_50%)]" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="text-2xl font-bold">LMS Platform</span>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6xUTQnT5ljPNW9GDrVL28Vw93AxJYDo-x1T_vLVyuZE39VklFlOttRgwHo6MPeIf3idpdYlMztQPpNsiRq4uxquo9_parVov9-B8nq7Xq6vPfOuoq6wXXCIXKibaAfi1CzFh1ANPHYPujrcih-daEWgjiieu66M2WCgUuGataikhiCOUDmAvjEYUTDWPcDSNMRhmO222EkprqT-twTmCqXE8289OybLVa_2Txipi12ZkHkfK0ZyLO0k0RmrSpm4V253cC7Dx8Qs"
            alt="Students learning"
            className="rounded-2xl shadow-2xl h-64 w-full object-cover mb-8"
          />

          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Welcome back to <br />
            <span className="text-primary">smart learning</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Sign in to access your courses, assessments, and dashboard.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (LOGIN FORM) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-md w-full space-y-8">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-extrabold">Sign in to your account</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Continue your learning journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Role */}

              <div className="grid grid-cols-3  gap-2 bg-slate-200/60 dark:bg-slate-800/60 p-1.5 my-5 rounded-xl">
                {["Student", "Instructor", "admin"].map((role) => (
                  <label key={role} className="cursor-pointer">
                    <input type="radio" name="role" className="sr-only peer"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange} />
                    <div className="p-2 text-center flex font-bold rounded-lg peer-checked:bg-white peer-checked:text-primary dark:peer-checked:bg-slate-700">
                      {role}
                    </div>
                  </label>
                ))}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-primary focus:outline-none"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <TbMailFilled />
                </span>
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-primary focus:outline-none"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <FaLock />
                </span>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-primary" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-primary font-semibold hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button type="submit" className="w-full py-4 rounded-xl bg-[#44A4BB] text-white font-bold shadow-lg shadow-primary/30 hover:bg-[#185564] transition">
              Sign In
            </button>
          </form>


          {/* Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background-light dark:bg-background-dark text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 rounded-xl border font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Google
            </button>
            <button className="py-3 rounded-xl border font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Microsoft
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Don’t have an account?
            <Link to="/register"
              className="text-primary font-extrabold ml-1">
              Create one

            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};


export default Login;


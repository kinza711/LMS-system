
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

import api from "../services/api";

import { HiPencil } from "react-icons/hi2";
import { RiUpload2Line } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { LuUpload } from "react-icons/lu";
import BackButton from "../components/BackButton";


const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  // ================= FETCH USER =================
  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const res = await api.get(`/allusers/${id}`);
        const user = res.data?.data || res.data;

        if (!user) return;

        setForm({
          name: user.name,
          email: user.email,
          role: user.role, // default empty so placeholder shows
        });
      } catch (err) {
        console.error("Fetch user failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/allusers/${id}`, form);
      navigate(-1);
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">Loading user...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />

        <div className="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-40">
          <main className="layout-content-container flex flex-col max-w-[800px] flex-1">


            {/* Headline */}
            <div className="mb-5">
              <h1 className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-extrabold leading-tight">
                Edit User Profile
              </h1>
              <p className="text-[#4c739a] dark:text-slate-400 mt-1">
                Update personal information and access permissions for this account.
              </p>
            </div>

            {/* Main Form Card */}
            <div className="glass-morphism rounded-xl shadow-2xl p-8 mb-12">
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                {/* Profile Header / Picture */}
                <div className="flex flex-col @[480px]:flex-row items-center gap-6 pb-3 border-b border-white/20 dark:border-slate-700/50">
                  <div className="relative group">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 shadow-lg border-4 border-white dark:border-slate-800 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQDvfu9Q2lDc4bDicLl2KVcAfgYqJa2Li2vc51fSvSNIIBa0VgJPRzmgLa4-fepVbD1eWeFjjPMZajuUVw-sH4O-szr6SJbgbLezJ93Xztka8vO9GsxxFq9yAf5dgI24ktOmjXboYRcFfny9zhsvOQYzptpqf-fmZ8m7sBeJxeqo4LgwwPf4kNLMF0TrDqJt6EIx-i0ze5LlCyoRm38WysyvnlPoPH345vj98FtML91V0L1k5OR-_LFBPGd7C_za5BZVK48X_-JAM")` }}
                    ></div>
                    <button
                      className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg   transition-all flex items-center justify-center"
                      type="button"
                    >
                      <label for="avatarInput"
                        class="absolute bottom-0 right-0 bg-green-600 text-black p-1.5 rounded-full shadow-lg cursor-pointer hover:bg-green-500 transition-colors">
                        <span class="material-symbols-outlined text-xl"><HiPencil /></span>
                      </label>
                      {/* <!-- Hidden file input --> */}
                      <input type="file" name="pic" id="avatarInput" class="hidden" />

                    </button>
                  </div>
                  <div className="flex flex-col text-center @[480px]:text-left">


                    <div className="flex  justify-center @[480px]:justify-start">
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-gray-200 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-all" type="button">
                        <span className="material-symbols-outlined text-lg"><RiUpload2Line /></span> Update Photo
                      </button>

                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0d141b] dark:text-slate-200 ml-1">Full Name</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" ><FaUserAlt /></span>
                      <input
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"

                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0d141b] dark:text-slate-200 ml-1">Email Address</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><IoMailSharp /></span>
                      <input
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"

                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-[#0d141b] dark:text-slate-200 ml-1">User Role</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><RiShieldUserFill /></span>
                      <select
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>

                      </select>
                    </div>
                    <p className="text-xs text-[#4c739a] dark:text-slate-400 mt-1 ml-1">
                      Admins can create quizzes and manage all system users.
                    </p>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 mt-4 border-t border-white/20 dark:border-slate-700/50">
                  
                  <BackButton/>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 rounded-xl bg-green-700 text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg"><LuUpload /></span>
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
};

export default EditUserPage;


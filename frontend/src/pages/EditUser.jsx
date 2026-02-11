
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
  //const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState(""); // optional new password
  const [pic, setPic] = useState("");
  const [user, setUser] = useState([])
  const [role, setRole] = useState([])

  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  // ================= FETCH USER =================
  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get(`/allusers/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = res.data.data;

        console.log("Current User ID:", id);
        console.log("Fetched User:", user);

        setUser({
          name: user?.name || "",
          email: user?.email || "",
          role: user?.role || "",
          pic: user?.pic || ""
        });

      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // Whenever user prop changes, update form fields
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      //setPassword(""); // always reset password
      setPic(user.pic || "");
      setRole(user.role || "")
    }

  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      // add text fields
      formData.append("name", name);
      formData.append("email", email);

      // add image only if selected
      if (selectedFile) {
        formData.append("profile", selectedFile);
      }
      const res = await api.put(`/allusers/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully!");

      setUser(res.data.user);

      // reset password + selected file
      //setPassword("");
      setSelectedFile(null);
    } catch (err) {
      console.log(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // store file for later upload
    setSelectedFile(file);

    // show preview
    setPreview(URL.createObjectURL(file));
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

            </div>

            {/* Main Form Card */}
            <div className="glass-morphism rounded-xl shadow-2xl p-8 mb-12">
              <form className="flex flex-col gap-8" onSubmit={handleSave}>
                {/* Profile Header / Picture */}
                <div className="flex flex-col @[480px]:flex-row items-center gap-6 pb-3 border-b border-white/20 dark:border-slate-700/50">
                  <div className="relative group">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 shadow-lg border-4 border-white dark:border-slate-800 transition-transform duration-300 group-hover:scale-105"
                    //style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQDvfu9Q2lDc4bDicLl2KVcAfgYqJa2Li2vc51fSvSNIIBa0VgJPRzmgLa4-fepVbD1eWeFjjPMZajuUVw-sH4O-szr6SJbgbLezJ93Xztka8vO9GsxxFq9yAf5dgI24ktOmjXboYRcFfny9zhsvOQYzptpqf-fmZ8m7sBeJxeqo4LgwwPf4kNLMF0TrDqJt6EIx-i0ze5LlCyoRm38WysyvnlPoPH345vj98FtML91V0L1k5OR-_LFBPGd7C_za5BZVK48X_-JAM")` }}
                    >
                      <img
                        src={
                          preview
                            ? preview
                            : user?.pic
                              ? `${import.meta.env.VITE_API_URL}/uploads/${user.pic}`
                              : "https://i.pravatar.cc/150"
                        }
                        className="w-full h-full rounded-full object-cover"
                      />

                    </div>
                    <button
                      className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg   transition-all flex items-center justify-center"
                      type="button"
                    >
                      <label htmlFor="avatarInput"
                        className="absolute bottom-0 right-0 bg-white text-black p-1.5 rounded-full shadow-lg cursor-pointer  transition-colors">
                        <span className="material-symbols-outlined text-xl"><HiPencil />
                          <input type="file" id="avatarInput" className="hidden" onChange={handleFileChange} />
                        </span>
                      </label>


                    </button>
                  </div>
                  <div className="flex flex-col text-center @[480px]:text-left">

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        className="w-full overflow-hidden pl-10 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
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

                  <BackButton />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 rounded-xl bg-[#44A4BB] text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-[#3891a8] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
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



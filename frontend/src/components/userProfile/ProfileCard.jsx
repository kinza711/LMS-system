
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
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  const token = localStorage.getItem("token");

  // Whenever user prop changes, update form fields
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPassword(""); // always reset password
      setPic(user.pic || "");
    }

  }, [user]);

  const handleSave = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      // add text fields
      formData.append("name", name);
      formData.append("email", email);

      if (password) {
        formData.append("password", password);
      }

      // add image only if selected
      if (selectedFile) {
        formData.append("profile", selectedFile);
      }

      const res = await api.put("/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully!");

      setUser(res.data.user);

      // reset password + selected file
      setPassword("");
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

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center relative overflow-hidden">
      {/* Header Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500/10 to-primary/10"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Avatar */}
        <div className="relative group">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 border-4 border-[#44A4BB] dark:border-slate-900 shadow-md"
          // style={{ backgroundImage: `url(${user.avatar})` }}
          >   <img
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
          {/* Upload Button */}
          <label className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md cursor-pointer border border-slate-100 hover:scale-110 transition-transform">
            <FaPencil />
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
        </div>

        {/* Name and Role */}
        <div className="mt-4 text-center">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight capitalize">{user.name}</h2>
          <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {user.role}
          </div>
        </div>

        {/* Form */}
        <form encType="multipart/form-data" className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
            className="mt-2 w-full bg-[#44A4BB] hover:bg-[#348ca2] text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;

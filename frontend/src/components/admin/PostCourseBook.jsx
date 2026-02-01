
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { IoMdSend } from "react-icons/io";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton"

const AdminPostCourse = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const isEditMode = Boolean(id); // id is from useParams
  const [formData, setFormData] = useState({
    title: "",
    disc: "",
    level: ""
  });

  // +++++++++++ must use when use JWT++++++++++=
  // useEffect(() => {
  //       if (id) {
  //           // edit mode: course data fetch karo
  //           const fetchCourse = async () => {
  //               const res = await api.get(`/course/${id}`);
  //               setFormData(res.data.data);
  //           };
  //           fetchCourse();
  //       }
  //   }, [id]);

  const [courseImage, setCourseImage] = useState(null);

  const { title, disc, level } = formData;

  // 🔹 handle text input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseImage(URL.createObjectURL(file));
    }
  };

  // 🔹 submit
  const handleSubmit = async (e) => {
    e.preventDefault();
     const token = localStorage.getItem("token")
    if (isEditMode) {
     
      try {
        const res = await api.put(`/course/${id}`, formData ,{
          headers: {Authorization: `Bearer ${token}`}
        });
        console.log("updated Posted:", res.data);
        alert("Course update successfully 🎉")

        // reset form
        setFormData({ title: "", disc: "" });
        setCourseImage(null);
        navigate("/managecourse");

      } catch (err) {
        console.error(err);
        alert("Course not updated..", err);
      }
    }else{
      try {
        const res = await api.post("/course", formData  ,{
          headers: {Authorization: `Bearer ${token}`}

      });
        console.log("Course Posted:", res.data);
        alert("Course posted successfully 🎉")

        // reset form
        setFormData({ title: "", disc: "" });
        setCourseImage(null);
        navigate("/managecourse");

      } catch (err) {
        console.error(err);
        alert("Course not posted..", err);
      }
    }

  };

  return (
    <div className="flex h-screen bg-background-light font-display">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 flex flex-col w-0">
        <Header />

        <div className="p-8 max-w-5xl mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl border border-[#e7edf3] shadow-sm p-8 space-y-8"
          >
            {/* Course Name */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Course Name
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Advanced UI Design Systems"
                className="w-full px-4 py-3 rounded-xl border border-[#cfdbe7] focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>

            {/* Course Image */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Course Thumbnail
              </label>

              <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#cfdbe7] rounded-xl p-6">
                {courseImage ? (
                  <img
                    src={courseImage}
                    alt="Preview"
                    className="w-full max-w-sm h-52 object-cover rounded-lg mb-2"
                  />
                ) : (
                  <p className="text-sm text-slate-500 mb-2">
                    Drag & drop or click to browse
                  </p>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="courseImage"
                />
                <label
                  htmlFor="courseImage"
                  className="px-4 py-2 border rounded-lg text-xs font-bold cursor-pointer hover:bg-slate-100"
                >
                  Browse Files
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Course Description
              </label>
              <textarea
                name="disc"
                value={formData.disc}
                onChange={handleChange}
                rows="6"
                placeholder="Provide a detailed overview of the course..."
                className="w-full px-4 py-3 rounded-xl border border-[#cfdbe7] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
              />
            </div>

            {/* Type basic or pro */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Select Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}

                placeholder="Provide a detailed overview of the course..."
                className="w-full px-4 py-3 rounded-xl border border-[#cfdbe7] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
              >
                <option value="" >Select Level</option>
                <option value="basic" onChange={handleChange} >Basic Level</option>
                <option value="pro" onChange={handleChange}>Pro Level</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
             <BackButton/>

              <button type="submit" className="px-8 py-2.5 bg-[#4c739a] text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-600 active:scale-95">
                {isEditMode ? "Update Course" : "Create Course"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminPostCourse;

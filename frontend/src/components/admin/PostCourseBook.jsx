

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton";

const AdminPostCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = Boolean(id);

  // ===========================
  // FORM STATE
  // ===========================
  const [formData, setFormData] = useState({
    title: "",
    disc: "",
    level: "",
    pic: ""
  });

  // ===========================
  // IMAGE STATE (IMPORTANT FIX)
  // ===========================
  const [courseImageFile, setCourseImageFile] = useState(null); // real file
  const [previewImage, setPreviewImage] = useState(""); // preview url

  const [loading, setLoading] = useState(false);

  // ===========================
  // FETCH COURSE (EDIT MODE)
  // ===========================
  useEffect(() => {
    if (!id) return;

    const fetchCourse = async () => {
      setLoading(true);

      try {
        const token = localStorage.getItem("token");

        const res = await api.get(`/course/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const course = res.data.data;

        // ✅ Fill inputs
        setFormData({
          title: course?.title || "",
          disc: course?.disc || "",
          level: course?.level || "",
          pic: course?.pic || ""
        });

        // ✅ Show old image preview
        if (course?.pic) {
          setPreviewImage(
            `http://localhost:3000/uploads/${course.pic}`
          );
        }
      } catch (err) {
        console.error("Course fetch failed:", err);
        alert("Course load nahi ho raha!");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // ===========================
  // INPUT CHANGE
  // ===========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===========================
  // IMAGE CHANGE
  // ===========================
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCourseImageFile(file); // real file store
      setPreviewImage(URL.createObjectURL(file)); // preview show
    }
  };

  // ===========================
  // SUBMIT FORM
  // ===========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      // ✅ FormData for multer
      const data = new FormData();
      data.append("title", formData.title);
      data.append("disc", formData.disc);
      data.append("level", formData.level);
      

      // ✅ only append if user selected new file
      if (courseImageFile) {
        data.append("courseImage", courseImageFile);
      }

      // ======================
      // EDIT MODE (UPDATE)
      // ======================
      if (isEditMode) {
        await api.put(`/course/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        alert("✅ Course Updated Successfully 🎉");
      }

      // ======================
      // CREATE MODE
      // ======================
      else {
        await api.post("/course", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        alert("✅ Course Created Successfully 🎉");
      }

      // Reset
      setFormData({ title: "", disc: "", level: "", pic: "" });
      setCourseImageFile(null);
      setPreviewImage("");

      navigate("/managecourse");
    } catch (err) {
      console.error("Course submit error:", err.response?.data || err.message);
      alert("❌ Course save nahi ho raha!");
    }
  };

  // ===========================
  // LOADING SCREEN
  // ===========================
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-bold">Loading Course Data...</p>
      </div>
    );
  }

  // ===========================
  // UI
  // ===========================
  return (
    <div className="flex h-screen bg-background-light font-display">
      <Sidebar />

      <main className="flex-1 flex flex-col w-0">
        <Header />

        <div className="p-8 max-w-5xl mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-white rounded-xl border shadow-sm p-8 space-y-8"
          >
            {/* Title */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Course Name
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="e.g. English Course"
                className="w-full px-4 py-3 rounded-xl border"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Course Thumbnail
              </label>

              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full max-w-sm h-52 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <p className="text-sm text-slate-500 mb-3">
                    Upload Course Image
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
                rows="5"
                placeholder="Write course details..."
                className="w-full px-4 py-3 rounded-xl border"
                required
              />
            </div>

            {/* Level */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Select Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border"
                required
              >
                <option value="">Select Level</option>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <BackButton />

              <button
                type="submit"
                className="px-8 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
              >
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

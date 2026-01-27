
import { useState, useEffect } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import api from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../BackButton";

const AnnouncementForm = () => {
  const { id } = useParams(); // 👈 edit id
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    target: "",
    message: "",
  });

  // ✅ kinza remember to FETCH data WHEN editing
  useEffect(() => {
    if (id) {
      fetchSinglePost();
    }
  }, [id]);

  const fetchSinglePost = async () => {
    try {
      const res = await api.get(`/post/${id}`);
      setFormData({
        title: res.data.data.title,
        target: res.data.data.target,
        message: res.data.data.message,
      });
    } catch (err) {
      console.log("Error fetching post", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // ✅ UPDATE
        await api.put(`/post/${id}`, formData);
        alert("Announcement updated");
      } else {
        // ✅ CREATE
        await api.post("/post", formData);
        alert("Announcement posted");
      }

      navigate("/announcement");
    } catch (err) {
      console.log("Error saving announcement:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="rounded-2xl bg-white  shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <LuNotebookPen />
          {id ? "Edit Announcement" : "Draft New Announcement"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
        <label className="font-bold">Subject</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="input bg-gray-100 rounded-xl px-2 py-2"
          required
        />

        <label className="font-bold">Audience</label>
        <select
          name="target"
          value={formData.target}
          onChange={handleChange}
          className="input bg-gray-100 rounded-xl px-2 py-2"
          required
        >
          <option value="">Select</option>
          <option value="all">All</option>
          <option value="students">Students</option>
          <option value="instructors">Instructors</option>
        </select>

        <label className="font-bold">Content</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input bg-gray-100 rounded-xl px-2 py-2"
          required
        />

        <div className="btns flex items-center justify-end gap-5">


          <BackButton />
          <button className="bg-blue-500 text-white rounded-xl py-2 px-2 self-end flex items-center gap-2">
            <BsFillSendFill />
            {id ? "Update Announcement" : "Post Announcement"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AnnouncementForm;



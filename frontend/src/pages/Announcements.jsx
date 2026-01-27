import AdminLayout from "../components/admin/announcement/AdminLayout";
import AnnouncementStats from "../components/admin/announcement/AnnouncementStats";
import AnnouncementList from "../components/admin/announcement/AnnouncementList";
import AnnouncementTable from "../components/admin/announcement/AnnouncementTable";
import { useEffect, useState } from "react";
import api from "../services/api";

const Announcements = ({ stats }) => {
  const [allPosts, setAllPosts] = useState([]);
  

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await api.get("/post");
      setAllPosts(res.data.data);
    } catch (err) {
      console.log("post not found", err);
    }
  };

  // ✅ DELETE LOGIC BELONGS HERE
  const handleDelete = async (id) => {
    try {
      await api.delete(`/post/${id}`);
      // setAllPosts((prev) => prev.filter((p) => p._id !== id));
    fetchPost();
    } catch (err) {
      console.log("delete failed", err);
      alert("Delete failed");
    }
  };

  return (
    <AdminLayout>
      <AnnouncementStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
           <h1 className="text-balck font-bold text-2xl p-1">All Announcements</h1>
          <AnnouncementTable
            Announcement={allPosts}
            onDelete={handleDelete}
          />
        </div>

        <div className="lg:col-span-5">
           <h1 className="text-balck font-bold text-2xl p-1">Recent Posts</h1>
          <AnnouncementList />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Announcements;

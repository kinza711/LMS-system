import { useEffect, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

import AnnouncementStats from "../components/admin/announcement/AnnouncementStats";
import AnnouncementList from "../components/admin/announcement/AnnouncementList";
import AnnouncementTable from "../components/admin/announcement/AnnouncementTable";

const Announcements = ({ stats }) => {
  const [allPosts, setAllPosts] = useState([]);

  // ✅ Sidebar Toggle State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await api.get("/post", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAllPosts(res.data.data);
    } catch (err) {
      console.log("post not found", err);
    }
  };

  // ✅ DELETE LOGIC
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await api.delete(`/post/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchPost();
      alert("Post deleted successfully");
    } catch (err) {
      console.log("delete failed", err);
      alert("you are not allowed to delete this post");
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* ✅ Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* ✅ Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Stats */}
          <AnnouncementStats stats={stats} />

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Table */}
            <div className="lg:col-span-7">
              <h1 className="font-bold text-2xl mb-4">All Announcements</h1>

              <AnnouncementTable
                Announcement={allPosts}
                onDelete={handleDelete}
              />
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-5">
              <h1 className="font-bold text-2xl mb-4">Recent Posts</h1>

              <AnnouncementList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Announcements;

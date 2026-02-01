import { useEffect, useState } from "react";
import api from "../../../services/api";
import AnnouncementCard from "../announcement/AnnouncementCard";

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
      const token = localStorage.getItem("token")
    try {
      const res = await api.get("/post", {
        headers:{Authorization: `Bearer ${token}`}
      }

      );
      setAnnouncements(res.data.data);
    } catch (err) {
      console.log("error fetching announcements", err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {announcements.length === 0 ? (
        <p className="text-center text-gray-400">
          No announcements available
        </p>
      ) : (
        announcements.slice(0, 3).map((a) => (
          
          <AnnouncementCard key={a._id} data={a} />
        ))
      )}
    </div>
  );
};

export default AnnouncementList;

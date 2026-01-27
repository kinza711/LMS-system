import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AnnouncementTable = ({ Announcement = [], onDelete }) => {
  const navigate = useNavigate();

  return (
    
    <div className="bg-white p-2 rounded-xl border border-[#E1E3E1] shadow-md overflow-x-auto">
     
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="font-bold text-slate-600 text-left">
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Audience</th>
            <th className="px-4 py-3">Message</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Announcement.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-6 py-6 text-center text-slate-500">
                No announcements found
              </td>
            </tr>
          ) : (
            Announcement.map((post) => (
              <tr key={post._id} className="border-t border-[#E1E3E1] hover:bg-slate-50">
                <td className="px-4 py-3">{post.title}</td>
                <td className="px-4 py-3">{post.target}</td>
                <td className="px-4 py-3">{post.message}</td>

                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => navigate(`/postannouncement/${post._id}`)}
                    className="p-2 bg-gray-500 rounded"
                  >
                    <MdModeEditOutline size={15} color="white" />
                  </button>

                  {/* Delete announcement */}
                  <button
                    onClick={() => onDelete(post._id)}
                    className="p-2 bg-red-500 rounded hover:bg-red-600"
                  >
                    <RiDeleteBin5Fill size={15} color="white" />
                  </button>


                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AnnouncementTable;

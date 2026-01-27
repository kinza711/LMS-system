
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";


const UserTable = ({ users = [],  onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl border border-[#E1E3E1] overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left w-[30%]">User</th>
            <th className="px-6 py-4 text-left w-[25%]">Email</th>
            <th className="px-6 py-4 text-left w-[15%]">Role</th>
            <th className="px-6 py-4 text-left w-[15%]">Status</th>
            <th className="px-6 py-4 text-right w-[15%]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center text-sm text-[#4c739a]">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id} className="border-t border-[#E1E3E1] hover:bg-slate-50 dark:hover:bg-[#23303e]/20 transition-colors">
                {/* USER */}
                <td className="px-6 py-4 w-[30%]">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 flex items-center justify-center">
                      {user.pic ? (
                        <img src={user.pic} alt={user.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <span className="material-symbols-outlined text-slate-400"> {user.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{user.name}</p>

                    </div>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="px-6 py-4 w-[25%] text-sm text-[#4c739a]">{user.email}</td>

                {/* ROLE */}
                <td className="px-6 py-4 w-[15%]">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td className="px-6 py-4 w-[15%]">
                  <span className={`text-xs font-medium ${user.isActive ? "text-green-500" : "text-red-500"}`}>
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-6 py-4 w-[15%] text-right">

                  <button
                    onClick={() => navigate(`/edituser/${user._id}`)}
                    className="p-2 hover:text-primary"
                  >
                    <MdModeEditOutline size={20} />
                  </button>
                  
                  <button
                    className="p-2 hover:text-red-500"
                    onClick={() => onDelete && onDelete(user._id)}
                  >
                    <RiDeleteBin5Fill size={20} />
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

export default UserTable;

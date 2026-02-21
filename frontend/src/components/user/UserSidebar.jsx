import { MdDashboard, MdLibraryBooks } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/lmslogo.png";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");

      alert(" logout successfully");
      navigate("/login");
    } catch (err) {
      console.log("not logedout", err);
      alert("not logout");
    }
  };

  return (
    <>
      {/* ✅ Overlay (Mobile Only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 flex flex-col bg-white dark:bg-[#15202b] border-r border-slate-200 dark:border-slate-800 shadow-lg
    z-50 transform transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
      >
        <div className="flex items-center gap-1 px-6 py-6 border-b border-slate-100 dark:border-slate-800/50">
          <div className="size-18 text-primary flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <img src={Logo} alt="logo" height={40} width={70} />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            EduLearn
          </h2>
        </div>

        <div className="flex flex-col justify-between flex-1 overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-2">
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Menu
            </p>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined icon-fill">
                <MdDashboard />
              </span>
              <span className="text-sm font-medium">
                <Link to="/UserDashboard">Dashboard</Link>
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">
                <MdLibraryBooks />
              </span>
              <span className="text-sm font-medium">
                <Link to="/courses">Courses</Link>
              </span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">
                <MdLibraryBooks />
              </span>
              <span className="text-sm font-medium">
                <Link to="/result">Result</Link>
              </span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">
                <FaUser />
              </span>
              <span className="text-sm font-medium">
                <Link to="/UserProfile">Profile</Link>
              </span>
            </div>
          </nav>

          <nav className="flex flex-col gap-2 mt-6">
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              System
            </p>

            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">
                <IoIosHelpCircle />
              </span>
              <span className="text-sm font-medium">
                Support
                {/* <iframe
                  src="https://www.chatbase.co/chatbot-iframe/6Vd37-p_2Wj87684pamps"
                  width="100%"
                  style="height: 100%; min-height: 700px"
                  frameborder="0"
                ></iframe> */}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 bg-red-50  hover:bg-red-100 dark:hover:bg-slate-800 hover:text-red-900 dark:hover:text-white transition-colors mt-4"
            >
              <span className="material-symbols-outlined">
                <FiLogOut />
              </span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

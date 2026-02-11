import Sidebar from "../../admin/Sidebar";
import Header from "../../admin/Header";
const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background-light">

      {/* Sidebar fixed on left */}
      <div className="w-64 fixed top-0 left-0 h-screen">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex   overflow-hidden flex-col ml-72 p-5">
        {/* Header stays on top */}
        <div className="sticky top-0  z-50">
          <Header />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 px-7 md:px-8 py-6 max-w-[1280px] mx-auto w-full overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};


export default AdminLayout;

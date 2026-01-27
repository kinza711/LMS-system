import Sidebar from "../../admin/Sidebar";
import Header from "../../admin/Header";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background-light">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 px-4 md:px-8 py-6 max-w-[1280px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

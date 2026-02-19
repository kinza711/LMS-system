import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import CreateQuiz from "../components/admin/CreateQuiz ";
import { useState } from "react";
const PostAllQuestions = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {children}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <CreateQuiz />
        </main>
      </div>
    </div>
  );
};

export default PostAllQuestions;

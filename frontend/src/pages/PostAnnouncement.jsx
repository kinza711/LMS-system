import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import CreateQuiz from "../components/admin/CreateQuiz ";
import AnnouncementForm from "../components/admin/announcement/AnnouncementForm";

const PostAllQuestions = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <AnnouncementForm />
        </main>
      </div>
    </div>
  );
};

export default PostAllQuestions;

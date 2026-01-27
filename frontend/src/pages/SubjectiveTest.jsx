import Header from "../components/user/Header";
import ActionBar from "../components/user/ObjandSubTests/ActionBar"
import SubQuestionCard from "../components/user/ObjandSubTests/SubQuestionCard";
import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator";


const SubjectiveTest = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto">
          <SubQuestionCard />
        
          <ActionBar />
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:flex w-80 shadow border-gray-300 bg-white">
          <div className="flex flex-col h-full w-full">
            <QuestionNavigator />

          </div>
        </aside>
      </div>
    </div>
  );
};

export default SubjectiveTest;

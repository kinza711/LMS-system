import TestHeader from "../components/user/Header";
import TestSidebar from "../components/admin/Demopages/TestSidebar";
import QuestionCard from "../components/admin/Demopages/QuestionCard";

const TestAttempt = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#0d141b] dark:text-white overflow-x-hidden">
      
      <TestHeader />

      <div className="flex-1 flex justify-center py-6 px-4 md:px-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Question Area */}
          <main className="lg:col-span-8">
            <QuestionCard />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 sticky top-28">
            <TestSidebar />
          </aside>

        </div>
      </div>
    </div>
  );
};

export default TestAttempt;

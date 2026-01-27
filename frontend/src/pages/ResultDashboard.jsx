import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import StatsGrid from "../components/admin/ResultPages/StatsGrid";
import ChartsSection from "../components/admin/ResultPages/ChartsSection";
import ResultTable from "../components/admin/ResultPages/ResultTable";

const AdminResults = () => {
  return (
    <div className="bg-background-light min-h-screen font-display">

      {/* ===== Header (Top) ===== */}
      <Header />

      {/* ===== Layout Wrapper ===== */}
      <div className="flex">

        {/* ===== Sidebar (Left) ===== */}
        <aside className="w-64 min-h-[calc(100vh-72px)]  bg-white sticky top-[72px]">
          <Sidebar />
        </aside>

        {/* ===== Main Content (Right) ===== */}
        <main className="flex-1 py-8 px-4 md:px-10">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">

            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black">
                  Results & Performance
                </h1>
                <p className="text-slate-500">
                  Overview of student assessment data and cohort analytics.
                </p>
              </div>
            </div>

            {/* Stats */}
            <StatsGrid />

            {/* Charts */}
            <ChartsSection />

            {/* Table */}
            <ResultTable />

          </div>
        </main>

      </div>
    </div>
  );
};

export default AdminResults;

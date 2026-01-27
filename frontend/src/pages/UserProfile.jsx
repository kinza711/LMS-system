import React from "react";
import ProfileHeader from "../components/userProfile/ProfileHeader";
import ProfileCard from "../components/userProfile/ProfileCard";
import StatsCard from "../components/userProfile/StatsCard";
import RecentActivityTable from "../components/userProfile/RecentActivityTable";

const ProfilePage = () => {
  const user = {
    name: "Alex Johnson",
    role: "Undergraduate Student",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAynHIRzdJWDlgtg3O0QCKWY6wHGstZkid6feiSH_BwYR1TRkGy48Ss6CThv9jIBMWJVdMAnselja_au5tnL2uVZFiemf6bv8a7FX9PT4dJwukH2JNiRkE_Mjob5S5C5ds0IcmySJFHwb5SJo13Sxvh0oKMuXtyI9ZwNyIlVf3S2xmRH8K2OKcWgVD-4hbRHNeT_d244e5xeGe0v2bzSI3_zad_xE7qJ8AbxTTw3Z146dd9_QYljXxluHP2G4m4yGAiAr1aLF048uQ"
  };

  const tests = [
    {
      name: "Mathematics Final",
      teacher: "Dr. Smith",
      code: "MATH-101",
      date: "Oct 12, 2023",
      status: "Completed",
      statusBg: "bg-emerald-50 dark:bg-emerald-900/30",
      statusText: "text-emerald-700 dark:text-emerald-400",
      statusBorder: "border-emerald-100 dark:border-emerald-800",
      statusDotColor: "#10b981",
      score: "92/100",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "blue-600 dark:text-blue-400",
      icon: "functions"
    },
    // Add other tests
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200">
      <ProfileHeader user={user} />
      <div className="layout-container flex h-full grow flex-col px-4 sm:px-6 lg:px-10 py-6 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
            <ProfileCard user={user} />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatsCard icon="analytics" iconColor="bg-blue-50 dark:bg-blue-900/20 text-primary" title="Average Score" value="85%" change="2.5%" changeColor="text-emerald-500"/>
              <StatsCard icon="assignment_turned_in" iconColor="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600" title="Tests Taken" value="12" />
              <StatsCard icon="leaderboard" iconColor="bg-purple-50 dark:bg-purple-900/20 text-purple-600" title="Class Rank" value="92nd" change="Top 10%" changeColor="text-emerald-500"/>
            </div>
            <RecentActivityTable tests={tests} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

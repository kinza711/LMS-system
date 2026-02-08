import React from "react";
import ProfileCard from "../components/userProfile/ProfileCard";
import Header from "../components/admin/Header"
import UserSidebar from "../components/user/UserSidebar"

const ProfilePage = () => {
  const user = {
    name: "",
    role: "Undergraduate Student",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAynHIRzdJWDlgtg3O0QCKWY6wHGstZkid6feiSH_BwYR1TRkGy48Ss6CThv9jIBMWJVdMAnselja_au5tnL2uVZFiemf6bv8a7FX9PT4dJwukH2JNiRkE_Mjob5S5C5ds0IcmySJFHwb5SJo13Sxvh0oKMuXtyI9ZwNyIlVf3S2xmRH8K2OKcWgVD-4hbRHNeT_d244e5xeGe0v2bzSI3_zad_xE7qJ8AbxTTw3Z146dd9_QYljXxluHP2G4m4yGAiAr1aLF048uQ"
  };

  return (
    <div className="relative  flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200">

      <Header user={user} />
      <div className="layout-container  flex h-full grow max-w-full mx-auto w-full">
        <UserSidebar />
        
        <div className="grid grid-cols-1 bg-blue-500 lg:grid-cols-12 w-full gap-8 p-5 justify-center items-center">

          {/* Profile Card Full Width */}
          <div className="lg:col-span-6 bg-purple-500 w-full flex flex-col gap-6 ">
            <ProfileCard user={user} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;



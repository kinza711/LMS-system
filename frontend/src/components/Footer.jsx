import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
               <span className="material-symbols-outlined text-xl w-20 items-center">
                <img src="/lms logo.png" alt="logo" />
              </span>
              <span className="text-slate-900 dark:text-white text-xl font-bold">
                EduAssess
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of learners through innovative
              assessment technology and detailed analytics.
            </p>
          </div>

          {/* Links */}
          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Community", "Help Center"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          ].map((col, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4 className="text-slate-900 dark:text-white font-bold">{col.title}</h4>
              {col.links.map((link) => (
                <a key={link} href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2026 EduAssess Inc. All rights reserved by kinza.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

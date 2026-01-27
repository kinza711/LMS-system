import React from "react";

const features = [
  {
    icon: "analytics",
    title: "Deep Analytics",
    description:
      "Gain real-time insights into student performance with detailed charts and AI-driven recommendations.",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    color: "text-primary",
  },
  {
    icon: "security",
    title: "Secure Browser",
    description:
      "Ensure academic integrity with our locked-down browser technology that prevents cheating.",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    color: "text-purple-600",
  },
  {
    icon: "bolt",
    title: "Instant Feedback",
    description:
      "Automate grading for quizzes and exams to provide students with immediate results and feedback.",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    color: "text-orange-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900/50 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">
            Why Choose EduAssess
          </h2>
          <h3 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight">
            Core Capabilities for Modern Education
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Everything you need to manage education at scale, from creation to
            detailed analysis.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className={`w-auto h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h4 className="text-slate-900 dark:text-white text-xl font-bold mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import React from "react";
import { useNavigate } from "react-router-dom"

const CourseCards = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {data.map((course) => (
                <div
                    key={course._id}
                    className="flex flex-col rounded-2xl bg-white dark:bg-[#1a2634] shadow-sm border border-slate-100 dark:border-gray-800 overflow-hidden group"
                >
                    {/* IMAGE */}
                    <div className="relative w-full aspect-video overflow-hidden">
                        <div
                            className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${course.thumbnail ||
                                    "https://picsum.photos/400/300?random=1"
                                    })`,
                            }}
                        ></div>

                        {/* LEVEL TAG */}
                        <div
                            className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold uppercase
                ${course.level === "basic"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                                    : "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                                }`}
                        >
                            {course.level}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2">
                            {course.title}
                        </h3>

                        <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-2">
                            {course.disc}
                        </p>

                        <div className="mt-auto pt-4">
                            <button type="button"
                                onClick={() => navigate(`/coursedetails/${course._id}`)}
                                className="w-full py-2 bg-blue-200 hover:bg-primary hover:text-blue-700 text-primary rounded-3xl text-sm font-semibold transition">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseCards;

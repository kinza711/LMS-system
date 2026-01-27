import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";

const AllCoursesTable = ({ courses = [], onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl border border-[#e7edf3] shadow-soft overflow-hidden flex-1">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-[#e7edf3]">
                            <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-[40%]">
                                Course Title
                            </th>
                            <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-[40%]">
                                Course Details
                            </th>
                            <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Level</th>
                            {/* <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th> */}
                            <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {courses.map((course, i) => (
                            <tr key={i} className="group hover:bg-slate-50 transition-colors">

                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold `}>
                                        <span className="size-1.5 rounded-full" ></span>
                                        {course.title}
                                    </span>
                                </td>

                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold">
                                        <span className="size-1.5 rounded-full"></span>
                                        {course.disc.split(" ").slice(0, 25).join(" ")}{course.disc.split(" ").length > 50 && "..."}
                                    </span>
                                </td>


                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold `}>
                                        <span className="size-1.5 rounded-full" ></span>
                                        {course.level}
                                    </span>
                                </td>

                                <td className="py-4 px-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        {/* <Link
                                            // to="/postquestions"
                                            to={`/postquestions?courseId=${course._id}&title=${encodeURIComponent(course.title)}`}
                                            className="rounded-full w-10 h-10 flex items-center justify-center self-center"
                                        >
                                            <MdLibraryAdd size={20} color="green" />
                                        </Link> */}

                                        <Link
                                            to={`/postquestions?courseId=${course._id}&title=${encodeURIComponent(course.title)}`}
                                            className="p-2 bg-green-100 text-green-600 rounded hover:bg-green-200"
                                        >
                                             <MdLibraryAdd size={20} color="green" />
                                        </Link>


                                        <button onClick={() => navigate(`/postcourses/${course._id}`)}>
                                            <MdEdit size={20} />
                                        </button>


                                        <button
                                            className="p-2 hover:text-red-500"
                                            onClick={() => onDelete && onDelete(course._id)}
                                        >
                                            <RiDeleteBin5Fill size={20} color="red" />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCoursesTable;

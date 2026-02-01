
//-------- working perfectly with craete , edit and delete button -------

// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import { useNavigate, useParams } from "react-router-dom";
// import BackButton from "../BackButton"
// const PostQuestions = () => {
//   const { id } = useParams();
//   const isEditMode = Boolean(id);
//   const navigate = useNavigate();

//   const [questionType, setQuestionType] = useState("objective");

//   const [formData, setFormData] = useState({
//     title: "",
//     disc: "",
//     questionType: "objective",
//     Difficulty: "easy",
//     marks: "",
//     options: ["", "", "", ""],
//     keywords: "",
//     correctAnswer: "",
//     isPublic: false
//   });

//   /* ---------------- Handlers ---------------- */

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOptionChange = (index, value) => {
//     setFormData((prev) => {
//       const updatedOptions = [...prev.options];
//       updatedOptions[index] = value;
//       return { ...prev, options: updatedOptions };
//     });
//   };

//   const toggleQuestionType = (type) => {
//     setQuestionType(type);
//     setFormData((prev) => ({ ...prev, questionType: type }));
//   };

//   /* ---------------- Fetch Question (EDIT MODE) ---------------- */

//   useEffect(() => {
//     if (isEditMode) fetchQuestion();
//   }, [id]);

//   const fetchQuestion = async () => {
//     try {
//       const res = await api.get(`/questions/${id}`);
//       const data = res.data;

//       setFormData({
//         title: data?.title || "",
//         disc: data?.disc || "",
//         questionType: data?.questionType || "objective",
//         Difficulty: data?.Difficulty || "easy",
//         marks: data?.marks || "",
//         options: Array.isArray(data?.options)
//           ? data.options
//           : ["", "", "", ""],
//         keywords: data?.keywords || "",
//         correctAnswer: data?.correctAnswer || "",
//         isPublic: data?.isPublic ?? false
//       });

//       setQuestionType(data?.questionType || "objective");
//     } catch (err) {
//       console.error("Error fetching question:", err);
//       alert("Failed to load question");
//     }
//   };

//   /* ---------------- Submit ---------------- */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (isEditMode) {
//         await api.put(`/questions/${id}`, formData);
//         alert("Question updated successfully 🎉");
//       } else {
//         await api.post("/questions", formData);
//         alert("Question created successfully 🎉");

//         // Reset form
//         setFormData({
//           title: "",
//           disc: "",
//           questionType: "objective",
//           Difficulty: "easy",
//           marks: "",
//           options: ["", "", "", ""],
//           keywords: "",
//           correctAnswer: "",
//           isPublic: false
//         });

//         setQuestionType("objective");
//       }

//       navigate("/tests");
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting question");
//     }
//   };

//   /* ---------------- UI ---------------- */

//   return (
//     <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-10 max-w-3xl mx-auto mt-10">
//       <div>
//         <h2 className="text-2xl font-extrabold text-slate-900">
//           {isEditMode ? "Edit Question" : "Add Question"}
//         </h2>
//         <p className="text-sm text-slate-500">
//           Configure question details based on type
//         </p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {/* Toggle */}
//         <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-6">
//           <button
//             type="button"
//             onClick={() => toggleQuestionType("objective")}
//             className={`px-6 py-2 rounded-lg text-sm font-bold ${
//               questionType === "objective"
//                 ? "bg-blue-600 text-white"
//                 : "text-slate-500"
//             }`}
//           >
//             Objective
//           </button>
//           <button
//             type="button"
//             onClick={() => toggleQuestionType("subjective")}
//             className={`px-6 py-2 rounded-lg text-sm font-bold ${
//               questionType === "subjective"
//                 ? "bg-blue-600 text-white"
//                 : "text-slate-500"
//             }`}
//           >
//             Subjective
//           </button>
//         </div>

//         {/* Common Fields */}
//         <div className="space-y-6">
//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Question Title"
//             className="w-full rounded-lg border px-4 py-3"
//           />

//           <textarea
//             name="disc"
//             value={formData.disc}
//             onChange={handleChange}
//             placeholder="Question Description"
//             className="w-full rounded-lg border px-4 py-3"
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <select
//               name="Difficulty"
//               value={formData.Difficulty}
//               onChange={handleChange}
//               className="rounded-lg border px-4 py-3"
//             >
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>

//             <input
//               type="number"
//               name="marks"
//               value={formData.marks}
//               onChange={handleChange}
//               placeholder="Marks"
//               className="rounded-lg border px-4 py-3"
//             />
//           </div>
//         </div>

//         {/* Objective */}
//         {questionType === "objective" && (
//           <div className="space-y-4 mt-6">
//             {formData.options.map((opt, i) => (
//               <input
//                 key={i}
//                 value={opt}
//                 onChange={(e) => handleOptionChange(i, e.target.value)}
//                 placeholder={`Option ${i + 1}`}
//                 className="w-full rounded-lg border px-4 py-3"
//               />
//             ))}

//             <input
//               name="correctAnswer"
//               value={formData.correctAnswer}
//               onChange={handleChange}
//               placeholder="Correct Answer"
//               className="w-full rounded-lg border px-4 py-3"
//             />

//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={formData.isPublic}
//                 onChange={() =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     isPublic: !prev.isPublic
//                   }))
//                 }
//               />
//               Public Question
//             </label>
//           </div>
//         )}

//         {/* Subjective */}
//         {questionType === "subjective" && (
//           <div className="space-y-4 mt-6">
//             <input
//               name="keywords"
//               value={formData.keywords}
//               onChange={handleChange}
//               placeholder="Keywords"
//               className="w-full rounded-lg border px-4 py-3"
//             />

//             <textarea
//               name="correctAnswer"
//               value={formData.correctAnswer}
//               onChange={handleChange}
//               placeholder="Sample Answer"
//               className="w-full rounded-lg border px-4 py-3"
//             />
//           </div>
//         )}

//         <div className="flex justify-end mt-6 gap-3">
//           <BackButton/>
//           <button
//             type="submit"
//             className="px-8 py-2 bg-blue-600 text-white rounded-xl"
//           >
//             {isEditMode ? "Update Question" : "Create Question"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PostQuestions;



// working but edir route not working correctly -------
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import api from "../../services/api";
import { MdArrowBack } from "react-icons/md";

const PostAllQuestions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  /* ================= MODES ================= */
  const isEditMode = Boolean(params.id);

  // 🔑 SINGLE SOURCE OF TRUTH
  const courseId = isEditMode
    ? params.courseId
    : new URLSearchParams(location.search).get("courseId");

  const questionId = params.id || null;

  console.log("MODE:", isEditMode ? "EDIT" : "POST");
  console.log("courseId:", courseId);
  console.log("questionId:", questionId);

  /* ================= STATE ================= */
  const [questionType, setQuestionType] = useState("objective");
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    disc: "",
    course: "",
    questionType: "objective",
    Difficulty: "easy",
    marks: "",
    options: ["", "", "", ""],
    keywords: "",
    correctAnswer: "",
    isPublic: false
  });

  /* ================= SYNC COURSE ================= */
  useEffect(() => {
    if (courseId) {
      setFormData(prev => ({
        ...prev,
        course: courseId
      }));
      fetchCourse(courseId);
    }
  }, [courseId]);

  /* ================= FETCH COURSE ================= */
  const fetchCourse = async (id) => {
     const token = localStorage.getItem("token")
    try {
      const res = await api.get(`/course/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
      });
      setCourseTitle(res.data.data.title);
    } catch (err) {
      console.error("Course fetch error", err);
    }
  };

  /* ================= FETCH QUESTION (EDIT) ================= */
  useEffect(() => {
    if (isEditMode && questionId) {
      fetchQuestion(questionId);
    }
  }, [isEditMode, questionId]);

  const fetchQuestion = async (id) => {
    setLoading(true);
     const token = localStorage.getItem("token")
    try {
      const res = await api.get(`/questions/${id}` , {
        headers: {Authorization: `Bearer ${token}`}
      });
      const q = res.data.data;

      setFormData({
        title: q.title || "",
        disc: q.disc || "",
        course: q.course,
        questionType: q.questionType,
        Difficulty: q.Difficulty,
        marks: q.marks,
        options: q.options?.length ? q.options : ["", "", "", ""],
        keywords: Array.isArray(q.keywords) ? q.keywords.join(", ") : "",
        correctAnswer: q.correctAnswer || "",
        isPublic: q.isPublic || false
      });

      setQuestionType(q.questionType);
    } catch (err) {
      console.error("Question fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleQuestionType = (type) => {
    setQuestionType(type);
    setFormData(prev => ({
      ...prev,
      questionType: type
    }));
  };

  const handleOptionChange = (index, value) => {
    const updated = [...formData.options];
    updated[index] = value;
    setFormData(prev => ({ ...prev, options: updated }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

     const token = localStorage.getItem("token")
    if (!formData.course) {
      alert("❌ Course ID missing");
      return;
    }

    setSaving(true);

    const payload = {
      ...formData,
      keywords: formData.keywords
        ? formData.keywords.split(",").map(k => k.trim())
        : [],
      marks: Number(formData.marks || 1)
    };

    try {
      if (isEditMode) {
        await api.put(`/questions/${courseId}/${questionId}`, payload, {
          headers: {Authorization: `Bearer ${token}`}
        });
        alert("✅ Question Updated");
      } else {
        await api.post("/questions", payload,{
           headers: {Authorization: `Bearer ${token}`}
        });
        alert("✅ Question Created");
      }
      navigate(-1);
    } catch (err) {
      console.error(err);
      alert("❌ Error saving question");
    } finally {
      setSaving(false);
    }
  };

  /* ================= UI ================= */
  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-4"
        >
          <MdArrowBack /> Back
        </button>

        <h1 className="text-2xl font-bold mb-2">
          {isEditMode ? "Edit Question" : "Add Question"}
        </h1>

        {courseTitle && (
          <p className="mb-6 text-blue-600">
            📘 Course: <b>{courseTitle}</b>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Question Title"
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="disc"
            value={formData.disc}
            onChange={handleChange}
            placeholder="Question Description"
            className="w-full border p-2 rounded"
            required
          />

          <select
            name="Difficulty"
            value={formData.Difficulty}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => toggleQuestionType("objective")}
              className={`px-4 py-2 rounded ${
                questionType === "objective" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Objective
            </button>

            <button
              type="button"
              onClick={() => toggleQuestionType("subjective")}
              className={`px-4 py-2 rounded ${
                questionType === "subjective" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Subjective
            </button>
          </div>

          {questionType === "objective" && (
            formData.options.map((opt, i) => (
              <input
                key={i}
                value={opt}
                onChange={(e) => handleOptionChange(i, e.target.value)}
                placeholder={`Option ${i + 1}`}
                className="w-full border p-2 rounded"
              />
            ))
          )}

          {questionType === "subjective" && (
            <input
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Keywords (comma separated)"
              className="w-full border p-2 rounded"
            />
          )}

          <textarea
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleChange}
            placeholder="Correct Answer"
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            {saving ? "Saving..." : isEditMode ? "Update" : "Save"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default PostAllQuestions;
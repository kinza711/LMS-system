// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../components/admin/Header";
// import QuestionCard from "../components/user/ObjandSubTests/QuestionCard";
// import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator";
// import api from "../services/api";

// const ObjectiveTest = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [loading, setLoading] = useState(true);

//   const query = new URLSearchParams(location.search);

//   const courseId = query.get("courseId");
//   const title = query.get("title");
//   const type = query.get("type");
//   const difficulty = query.get("difficulty");

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const res = await api.get(
//         `/questions/course/${courseId}?title=${title}&type=${type}&difficulty=${difficulty}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );
//       setQuestions(res.data.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelect = (questionId, option) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [questionId]: option,
//     }));
//   };

//   const handleTimeUp = () => {
//     // 🔹 agar next question exist karta hai
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//     // 🔹 warna exam khatam
//     else {
//       navigate(
//         "/result",
//         //    {
//         //   state: { questions, answers }
//         // }
//       );
//     }
//   };

//   if (loading)
//     return (
//       <p className="p-10 text-center text-[#3191A6] text-4xl animate-pulse font-bold">
//         Loading questions...
//       </p>
//     );

//   if (!questions.length)
//     return (
//       <p className="p-10 text-center animate-pulse text-red-500 text-3xl font-bold">
//         Questions not posted yet
//       </p>
//     );

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">
//       <Header />

//       <div className="flex flex-1 overflow-hidden">
//         <main className="flex-1 p-6 max-w-5xl mx-auto overflow-y-auto">
//           <QuestionCard
//             question={questions[currentIndex]}
//             selectedAnswer={answers[questions[currentIndex]._id]}
//             onSelect={handleSelect}
//           />

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
//               className="btn"
//             >
//               Previous
//             </button>

//             <button
//               onClick={() =>
//                 setCurrentIndex((i) => Math.min(i + 1, questions.length - 1))
//               }
//               className="btn"
//             >
//               Next
//             </button>
//           </div>
//         </main>

//         <aside className="hidden lg:flex w-80 bg-white shadow flex-col">
//           <QuestionNavigator
//             questions={questions}
//             currentIndex={currentIndex}
//             setCurrentIndex={setCurrentIndex}
//             onTimeUp={handleTimeUp}
//             duration={60}
//             resetKey={currentIndex}
//             // ✅ VERY IMPORTANT
//             courseId={courseId}
//             questionType={type}
//             difficulty={difficulty}
//             answers={answers}
//           />
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default ObjectiveTest;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/admin/Header";
import QuestionCard from "../components/user/ObjandSubTests/QuestionCard";
import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator";
import api from "../services/api";

const ObjectiveTest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [showNavigator, setShowNavigator] = useState(false); // mobile toggle

  const query = new URLSearchParams(location.search);
  const courseId = query.get("courseId");
  const title = query.get("title");
  const type = query.get("type");
  const difficulty = query.get("difficulty");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get(
        `/questions/course/${courseId}?title=${title}&type=${type}&difficulty=${difficulty}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setQuestions(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleTimeUp = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  if (loading)
    return (
      <p className="p-10 text-center text-[#3191A6] text-4xl animate-pulse font-bold">
        Loading questions...
      </p>
    );

  if (!questions.length)
    return (
      <p className="p-10 text-center animate-pulse text-red-500 text-3xl font-bold">
        Questions not posted yet
      </p>
    );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 max-w-5xl mx-auto overflow-y-auto">
          <QuestionCard
            question={questions[currentIndex]}
            selectedAnswer={answers[questions[currentIndex]._id]}
            onSelect={handleSelect}
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 space-x-2">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
              className="btn w-full md:w-auto"
            >
              Previous
            </button>

            <button
              onClick={() =>
                setCurrentIndex((i) => Math.min(i + 1, questions.length - 1))
              }
              className="btn w-full md:w-auto"
            >
              Next
            </button>
          </div>

          {/* Mobile Toggle for Question Navigator */}
          <div className="lg:hidden mt-6 text-center">
            <button
              onClick={() => setShowNavigator((prev) => !prev)}
              className="btn px-4 py-2"
            >
              {showNavigator ? "Hide Navigator" : "Show Navigator"}
            </button>

            {showNavigator && (
              <div className="mt-4 bg-white p-4 shadow rounded-lg">
                <QuestionNavigator
                  questions={questions}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  onTimeUp={handleTimeUp}
                  duration={60}
                  resetKey={currentIndex}
                  courseId={courseId}
                  questionType={type}
                  difficulty={difficulty}
                  answers={answers}
                />
              </div>
            )}
          </div>
        </main>

        {/* Sidebar for large screens */}
        <aside className="hidden lg:flex lg:w-80 bg-white shadow flex-col overflow-y-auto">
          <QuestionNavigator
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onTimeUp={handleTimeUp}
            duration={60}
            resetKey={currentIndex}
            courseId={courseId}
            questionType={type}
            difficulty={difficulty}
            answers={answers}
          />
        </aside>
      </div>
    </div>
  );
};

export default ObjectiveTest;

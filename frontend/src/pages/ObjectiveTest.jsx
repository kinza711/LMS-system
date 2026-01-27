// import Header from "../components/user/Header";
// import ActionBar from "../components/user/ObjandSubTests/ActionBar"
// import QuestionCard from "../components/user/ObjandSubTests/QuestionCard";
// import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator";



// const ObjectiveTest = () => {
//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">
//       <Header />

//       <div className="flex flex-1 overflow-hidden">
//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto">
//           <QuestionCard />
//           <ActionBar />
//         </main>

//         {/* Sidebar */}
//         <aside className="hidden lg:flex w-80 shadow bg-white">
//           <div className="flex flex-col h-full w-full">
//             <QuestionNavigator />
       
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default ObjectiveTest;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/user/Header";
import QuestionCard from "../components/user/ObjandSubTests/QuestionCard";
import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator";
import api from "../services/api";

const ObjectiveTest = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get query params
  const query = new URLSearchParams(location.search);
const courseId = query.get("courseId")
const title = query.get("title"); // this must be defined now
const type = query.get("type")?.toLowerCase(); // objective/subjective
const difficulty = query.get("difficulty")?.toLowerCase(); // easy/medium/hard

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
  try {
    const res = await api.get(
      `/questions/course/${courseId}?title=${title}&type=${type}&difficulty=${difficulty}`
    );
    setQuestions(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  if (!questions.length) return <p className="p-10 text-center text-green-600 text-5xl animate-pulse font-bold ">Questions not posted yet ...</p>;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto">
          <QuestionCard question={questions[currentIndex]} />
          <div className="flex justify-between mt-6">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="btn">
              Previous
            </button>
            <button onClick={handleNext} disabled={currentIndex === questions.length - 1} className="btn">
              Next
            </button>
          </div>
        </main>

        <aside className="hidden lg:flex w-80 shadow bg-white">
          <QuestionNavigator questions={questions} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </aside>
      </div>
    </div>
  );
};

export default ObjectiveTest;

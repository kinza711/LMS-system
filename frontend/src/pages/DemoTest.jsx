// import TestHeader from "../components/admin/Header";
// import TestSidebar from "../components/admin/Demopages/TestSidebar";
// import QuestionCard from "../components/admin/Demopages/QuestionCard";

// const TestAttempt = () => {
//   return (
//     <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#0d141b] dark:text-white overflow-x-hidden">
      
//       <TestHeader />

//       <div className="flex-1 flex justify-center py-6 px-4 md:px-8">
//         <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* Main Question Area */}
//           <main className="lg:col-span-8">
//             <QuestionCard />
//           </main>

//           {/* Sidebar */}
//           <aside className="lg:col-span-4 sticky top-28">
//             <TestSidebar />
//           </aside>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestAttempt;












import TestHeader from "../components/admin/Header";
import TestSidebar from "../components/admin/Demopages/TestSidebar";
import QuestionCard from "../components/admin/Demopages/QuestionCard";
import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator"

import api from "../services/api"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TestAttempt = () => {   

  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search);

  //const courseId = query.get("courseId");
  const title = query.get("title");
  const type = query.get("type");
  const difficulty = query.get("difficulty");
                                                                                                                                                                                                                                                                                                                                                                                                                                                          

    useEffect(() => {    
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    //const token = localStorage.getItem("token")
    try {
      const res = await api.get(
        `/demotest/?title=${title}&type=${type}&difficulty=${difficulty}&isPublic=${true}`,
        //  {
        //   headers:{Authorization: `Bearer ${token}`}
        // }
      );
      setQuestions(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

 const handleTimeUp = () => {
  // 🔹 agar next question exist karta hai
  if (currentIndex < questions.length - 1) {
    setCurrentIndex(prev => prev + 1);
  } 
  // 🔹 warna exam khatam
  else {
    navigate("/result"
    //    {
    //   state: { questions, answers }
    // }
  );
  }
};

  if (loading)
    return (
      <p className="p-10 text-center text-blue-600 text-4xl animate-pulse font-bold">
        Loading questions...
      </p>
    );

  if (!questions.length)
    return (
      <p className="p-10 text-center text-red-500 text-3xl font-bold">
        Questions not posted yet
      </p>
    );

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#0d141b] dark:text-white overflow-x-hidden">

      <TestHeader />

      <div className="flex-1 flex justify-center py-6 px-4 md:px-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Main Question Area */}
          <main className="lg:col-span-8">
            <QuestionCard
              question={questions[currentIndex]}
              selectedAnswer={answers[questions[currentIndex]._id]}
              onSelect={handleSelect} />
          </main>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
              className="btn"
            >
              Previous
            </button>

            <button
              onClick={() => setCurrentIndex(i => Math.min(i + 1, questions.length - 1))}
              className="btn"
            >
              Next
            </button>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 sticky top-28">
            {/* <TestSidebar /> */}
            <QuestionNavigator
              questions={questions}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              onTimeUp={handleTimeUp}
              duration={60}
              resetKey={currentIndex}

              // ✅ VERY IMPORTANT
              //courseId={courseId}
              questionType={type}
              difficulty={difficulty}
              answers={answers}
            />
          </aside>

        </div>
      </div>
    </div>
  );
};

export default TestAttempt;

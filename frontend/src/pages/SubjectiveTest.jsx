import Header from "../components/admin/Header";
import ActionBar from "../components/user/ObjandSubTests/ActionBar"
import SubQuestionCard from "../components/user/ObjandSubTests/SubQuestionCard";
import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api"

const SubjectiveTest = () => {
 
  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search);

  const courseId = query.get("courseId");
  const title = query.get("title");
  const type = query.get("type");
 const difficulty = query.get("difficulty");


  
useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const token = localStorage.getItem("token")
    try {
      const res = await api.get(
        `/questions/course/${courseId}?title=${title}&type=${type}&difficulty=${difficulty}`, {
          headers:{Authorization: `Bearer ${token}`}
        }
      );
      setQuestions(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto">
          <SubQuestionCard
           question={questions[currentIndex]}
             />
        
          <ActionBar />
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
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:flex w-80 shadow border-gray-300 bg-white">
          <div className="flex flex-col h-full w-full">
            <QuestionNavigator 
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onTimeUp={handleTimeUp}
            duration={60}
            resetKey={currentIndex}

            // ✅ VERY IMPORTANT
            courseId={courseId}
            questionType={type}
            difficulty={difficulty}
            answers={answers}/>

          </div>
        </aside>
      </div>
    </div>
  );
};

export default SubjectiveTest;

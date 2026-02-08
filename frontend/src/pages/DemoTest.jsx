
import TestHeader from "../components/admin/Header";

import QuestionCard from "../components/admin/Demopages/QuestionCard";
import QuestionNavigator from "../components/user/ObjandSubTests/QuestionNavigator"
import Navbar from "../components/Navbar"
import api from "../services/api"
import { useEffect, useState } from "react";
import DemoTestResultPopup from "../components/admin/Demopages/DemoTestResultPopup"

const DemoTest = () => {
  const token = localStorage.getItem("token")

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);


  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    //const token = localStorage.getItem("token")
    try {
      const res = await api.get("/demotest"
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

  const calculateResult = () => {
    let correct = 0;
    let wrong = 0;
    let notAttempted = 0;

    questions.forEach((q) => {
      const userAnswer = answers[q._id];

      if (!userAnswer) {
        notAttempted++;
      }
      else if (userAnswer === q.correctAnswer) {
        correct++;
      }
      else {
        wrong++;
      }
    });

    const totalQuestions = questions.length;

    const totalMarks = questions.reduce((sum, q) => sum + Number(q.marks || 1), 0);

    const obtainedMarks = questions.reduce((sum, q) => {
      const userAnswer = answers[q._id];
      if (userAnswer === q.correctAnswer) {
        return sum + Number(q.marks || 1);
      }
      return sum;
    }, 0);

    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

    setResultData({
      totalQuestions,
      correct,
      wrong,
      notAttempted,
      obtainedMarks,
      totalMarks,
      percentage,
    });

    setShowResult(true);
  };


  const handleTimeUp = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      calculateResult(); // ✅ Show popup result
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
    <div className="bg-background-light bg-transparent dark:bg-background-dark min-h-screen font-display text-[#0d141b] dark:text-white overflow-x-hidden">

      {token ? <TestHeader /> : <Navbar />}
      {/* <TestHeader /> */}

      <div className="flex-1 bg-transparent  flex justify-center items-center py-6 px-4 md:px-8">
        <div className="w-full max-w-7xl justify-center bg-transparent grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Main Question Area */}
          <main className="lg:col-span-8 bg-trnasparent">
            <QuestionCard
              question={questions[currentIndex]}
              selectedAnswer={answers[questions[currentIndex]._id]}
              onSelect={handleSelect} />

            <div className="p-3 flex justify-between border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <button
                onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
                className="btn px-6 h-12 rounded-xl border text-sm font-bold flex items-center gap-2"
              >
                Previous
              </button>

              <button
                onClick={() => setCurrentIndex(i => Math.min(i + 1, questions.length - 1))}
                className="btn px-8 h-12 rounded-xl bg-blue-500 text-white font-bold flex items-center gap-2"
              >
                Next
              </button>
            </div>

          </main>



          {/* Sidebar */}
          <aside className="lg:col-span-4 sticky top-28 items-center justify-center bg-transparent">
            {/* <TestSidebar /> */}
            <QuestionNavigator
              questions={questions}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              onTimeUp={handleTimeUp}
              calculateResult={calculateResult}

              duration={60}
              resetKey={currentIndex}
              answers={answers}
            />
          </aside>

          {showResult && (
            <DemoTestResultPopup
              resultData={resultData}
              onClose={() => setShowResult(false)}
              onRestart={() => {
                setShowResult(false);
                setCurrentIndex(0);
                setAnswers({});
              }}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default DemoTest;

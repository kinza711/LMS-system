import { useEffect, useState } from "react";
import SubmitSection from "./SubmitSection";

const TimerSidebar = ({
  duration = 60,
  onTimeUp,
  resetKey,

  // ✅ incoming props
  //questions,
  answers,
  courseId,
  type,
  difficulty,
  calculateResult
}) => {

  const [timeLeft, setTimeLeft] = useState(duration);

  // 🔁 reset timer when question changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [resetKey, duration]);

  // ⏱ countdown
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="flex flex-col h-full">

      {/* TIMER */}
      <div className="p-6 border-b">
        <p className="text-xs uppercase text-slate-500 font-bold text-center">
          Time Remaining
        </p>

        <div className="flex justify-center mt-4">
          <div
            className={`size-32 rounded-full flex items-center justify-center
            font-bold text-3xl shadow-2xl
            ${timeLeft <= 10 ? "text-red-600 animate-pulse" : "text-black"}`}
          >
            {minutes}:{seconds}
          </div>
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <SubmitSection
        //questions={questions}
        answers={answers}
        calculateResult={calculateResult}
        meta={{
          courseId,
          questionType: type,
          difficulty
        }}
      />
    </div>
  );
};

export default TimerSidebar;


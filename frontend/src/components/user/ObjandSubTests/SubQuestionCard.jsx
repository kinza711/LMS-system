import { useState } from "react";
import Editor from "./Editor";
import { FaFlag } from "react-icons/fa";

const SubQuestionCard = ({ question }) => {
  const [answers, setAnswers] = useState({});

  if (!question) return null;

  return (
    <div className="bg-white mb-5 rounded-xl shadow-soft p-2 border-[0.25px] border-gray-300">
      <div className="flex justify-between mb-2">
        {/* <span className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded-full">
          Question 4 of 20
        </span> */}

        <div className="flex items-center gap-1 text-slate-600 hover:text-primary cursor-pointer">
          <span className="material-symbols-outlined text-sm">
            <FaFlag />
          </span>
          <span className="text-md font-semibold">
            Titel: {question.title}{" "}
          </span>
          <span className="text-md font-semibold">
            {" "}
            Type: {question.questionType}
          </span>
        </div>
      </div>

      <div className="text-xl font-bold mb-2">
        {/* Discuss the socio-economic impacts of the Industrial Revolution in the
        19th century. */}

        <h1>{question.disc}</h1>
        <div className="text-sm text-slate-500 italic">
          {/* (10 Marks) */}
          <h3>Marks:{question.marks}</h3>
        </div>
      </div>

      <Editor
        key={question._id}
        questionId={question._id}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
};

export default SubQuestionCard;

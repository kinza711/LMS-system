

// const SubmitSection = () => {
//   return (
//     <div className="p-10 border-gray-300 shadow bg-slate-50">
//       <button className="w-full py-4 bg-green-800 text-white rounded-4xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 transition">
//         Submit Test
       
//       </button>
//     </div>
//   );
// };

// export default SubmitSection;


import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const SubmitSection = ({ questions, answers, meta }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await api.post("/results/submit", {
        courseId: meta.courseId,
        questionType: meta.type,
        difficulty: meta.difficulty,
        answers
      });

      // ✅ redirect to result page
      navigate("/result", {
        state: {
          result: res.data.data,
          questions
        }
      });

    } catch (err) {
      alert("Failed to submit test");
      console.error(err);
    }
  };

  return (
    <div className="p-10 border-gray-300 shadow bg-slate-50">
      <button
        onClick={handleSubmit}
        className="w-full py-4 bg-green-800 text-white rounded-4xl font-bold
        flex items-center justify-center gap-2 hover:-translate-y-1 transition"
      >
        Submit Test
      </button>
    </div>
  );
};

export default SubmitSection;
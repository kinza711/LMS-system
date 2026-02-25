import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const SubmitSection = ({ calculateResult, meta, answers }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { courseId, questionType, difficulty } = meta;

  //console.log("META:", meta);

  const handleSubmit = async () => {
    try {
      const res = await api.post(
        "/submit",
        {
          courseId,
          questionType: questionType?.toLowerCase(), // ✅ NO DEFAULT
          difficulty: difficulty?.toLowerCase(),
          answers,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      alert("Test submitted successfully");

      navigate("/result", {
        state: { result: res.data.data },
      });
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to submit test");
    }
  };

  return (
    <div className="p-10 gap-6 border-gray-300 shadow bg-slate-50">
      {token ? (
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-[#3191A6] text-white rounded-4xl font-bold"
        >
          Submit Test
        </button>
      ) : (
        <button
          onClick={calculateResult}
          className="w-full py-4 bg-[#298397] text-white rounded-4xl font-bold"
        >
          Finish Test
        </button>
      )}
    </div>
  );
};

export default SubmitSection;


import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const SubmitSection = ({ calculateResult, meta, answers }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  // ✅ destructure meta
  const { courseId, type, difficulty } = meta;

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {

      const res = await api.post("/submit", {
        courseId,
        questionType: type ? type.toLowerCase() : "objective",// default  if select objective then use objective 
        difficulty: difficulty ? difficulty.toLowerCase() : "easy", // default
        answers
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("test submitted successfully")


      navigate("/result", {
        state: { result: res.data.data }
      });

    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to submit test");
    }
  };

  return (
    <div className="p-10 gap-6 border-gray-300 shadow bg-slate-50">
      {token ? 
      
       (<button
          onClick={handleSubmit}
          className="w-full py-4 bg-green-800 text-white rounded-4xl font-bold
        flex items-center justify-center gap-2 hover:-translate-y-1 transition"
        >
          Submit Test
        </button>)
       :(
        <button
        onClick={calculateResult}
        className="w-full py-4 bg-green-800 text-white rounded-4xl font-bold
        flex items-center justify-center gap-2 hover:-translate-y-1 transition"
      >
        Finish Test
      </button>)
        }
    </div>
  );
};

export default SubmitSection;
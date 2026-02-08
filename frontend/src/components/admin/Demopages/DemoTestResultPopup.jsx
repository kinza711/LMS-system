

const DemoTestResultPopup = ({ resultData, onClose, onRestart }) => {
 
 
 // const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   const token = localStorage.getItem("token");

  //   try {
  //     const res = await api.post(
  //       "/submit",
  //       {
  //         courseId: meta.courseId,
  //         questionType: meta.type,
  //         difficulty: meta.difficulty,
  //         answers
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${token}` }
  //       }
  //     );

  //     alert("Test submitted successfully!");

  //     navigate("/result", {
  //       state: { result: res.data.data }
  //     });

  //   } catch (err) {
  //     console.log(err);
  //     alert("Submit Failed!");
  //   }
  // };

  if (!resultData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-[420px] p-8 relative">

        {/* ❌ Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-slate-500 hover:text-red-500"
        >
          ✖
        </button>

        <h2 className="text-2xl font-extrabold text-center mb-6">
          Demo Test Result 🎉
        </h2>

        <div className="space-y-3 text-lg">
          <p>Total Questions: <b>{resultData.totalQuestions}</b></p>
          <p>Correct: <b>{resultData.correct}</b></p>
          <p>Wrong: <b>{resultData.wrong}</b></p>
          <p>Not Attempted: <b>{resultData.notAttempted}</b></p>

          <hr />

          <p>Marks Obtained: <b>{resultData.obtainedMarks}</b></p>
          <p>Total Marks: <b>{resultData.totalMarks}</b></p>

          <p className="text-blue-600 font-bold text-xl text-center">
            Percentage: {resultData.percentage}%
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onRestart}
            className="px-6 py-2 rounded-xl bg-blue-500 text-white font-bold"
          >
            Restart
          </button>

          {/* <button
            onClick={handleSubmit}
            className="w-full py-4 bg-green-800 text-white rounded-4xl font-bold
        flex items-center justify-center gap-2 hover:-translate-y-1 transition"
          >
            Submit Test
          </button> */}

        </div>

      </div>
    </div>
  );
};

export default DemoTestResultPopup;

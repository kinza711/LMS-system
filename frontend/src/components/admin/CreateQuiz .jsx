import PostQuestions from "./PostQuestions";

const CreateQuiz = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Create New Quistion</h2>
        <p className="text-slate-500">
          Configure quiz details and questions
        </p>
      </div>

      <PostQuestions />

      
    </div>
  );
};

export default CreateQuiz;

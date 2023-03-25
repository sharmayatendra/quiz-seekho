import RadioInput from "./RadioInput";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuesIdx, saveAnswer } from "../features/quizSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const SingleQuestion = () => {
  const { mcqs } = useSelector((store) => store.quiz.quiz);
  const currQuesIdx = useSelector((store) => store.quiz.currQuesIdx);
  const [resp, setResp] = useState("");

  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(saveAnswer({ id: mcqs[currQuesIdx].id, value: resp }));
    if (currQuesIdx !== mcqs.length - 1) dispatch(incrementQuesIdx());
  };

  const handler = (value) => {
    setResp(value);
  };
  return (
    <article className="mt-8">
      <p className="text-sm sm:text-xl font-bold text-slate-600 ">
        {mcqs[currQuesIdx]?.question}
      </p>

      {mcqs[currQuesIdx].options.map((option) => (
        <RadioInput key={option.id} {...option} checkAns={handler} />
      ))}
      <div className="flex justify-center mt-8">
        {currQuesIdx === mcqs.length - 1 ? (
          <button
            className="px-4 py-2 w-28 bg-purple-800 text-white rounded-full"
            onClick={handleNext}
          >
            <Link to="/result">Submit</Link>
          </button>
        ) : (
          <button
            className="px-4 py-2 w-28 bg-purple-800 text-white rounded-full"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </article>
  );
};

export default SingleQuestion;

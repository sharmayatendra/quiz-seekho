import React from "react";
import { useSelector } from "react-redux";

const RadioInput = ({ id, option, checkAns }) => {
  const { mcqs } = useSelector((store) => store.quiz.quiz);

  return (
    <div className="flex justify-between items-center px-8 py-3 mt-8 border border-gray-300 rounded-md ">
      <label
        htmlFor={id}
        className="font-bold text-slate-500 grow cursor-pointer"
      >
        {option}
      </label>
      <input
        type="radio"
        id={id}
        name="radio"
        value={option}
        onChange={(e) => checkAns(e.target.value)}
      />
    </div>
  );
};

export default RadioInput;

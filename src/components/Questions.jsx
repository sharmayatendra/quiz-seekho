import React, { useEffect, useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTimer } from "../features/quizSlice";

const Questions = () => {
  const currQuesIdx = useSelector((store) => store.quiz.currQuesIdx);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    dispatch(updateTimer(timer));
  }, [timer]);

  if (timer === 0) navigate("/result");

  return (
    <div className="flex flex-col p-6 border border-red-400">
      <div className="flex justify-between border border-green-400">
        <div className="bg-green-400 px-4 py-2 rounded-full text-white w-16 text-center">
          {currQuesIdx + 1}/5
        </div>
        <div className="bg-purple-500 px-4 py-2 rounded-full text-white w-16 text-center">
          {timer}
        </div>
      </div>
      <SingleQuestion />
    </div>
  );
};

export default Questions;

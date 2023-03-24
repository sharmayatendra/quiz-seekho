import React from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "../data";

const Questions = () => {
  return (
    <div className="flex flex-col p-6 border border-red-400">
      <div className="flex justify-between border border-green-400">
        <div className="bg-green-400 px-4 py-2 rounded-full">01/05</div>
        <div className="bg-purple-500 px-4 py-2 rounded-full">09:59</div>
      </div>
      {data.mcqs.map((mcq) => (
        <SingleQuestion {...mcq} />
      ))}
    </div>
  );
};

export default Questions;

import React from "react";
import { QUIZ_HEADING, QUIZ_INFO } from "../constants";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 border border-red-400 ">
      <h1 className="text-3xl font-bold">{QUIZ_HEADING}</h1>
      <p className="mt-4 text-slate-500">{QUIZ_INFO}</p>
    </div>
  );
};

export default Info;

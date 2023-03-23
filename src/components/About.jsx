import React from "react";
import { QUIZ_INFO } from "../constants";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <article className="p-4 sm:max-w-6xl">
        <h1 className="text-3xl text-slate-600 font-bold">About this Quiz</h1>
        <p>{QUIZ_INFO}</p>
      </article>
      <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-32 shadow-md border text-white px-2 py-1 rounded-md">
        Take Quiz
      </button>
    </div>
  );
};

export default About;

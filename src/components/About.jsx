import React from "react";
import { Link } from "react-router-dom";
import { QUIZ_INFO } from "../constants";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <article className="p-4 sm:max-w-6xl">
        <h1 className="text-3xl text-slate-600 font-bold">About this Quiz</h1>
        <p>{QUIZ_INFO}</p>
      </article>
      <button className="bg-gradient-to-r from-purple-500 to-purple-800 w-32 mb:8 shadow-md border text-white px-2 py-1 rounded-md">
        <Link to="/question">Take Quiz</Link>
      </button>
    </div>
  );
};

export default About;

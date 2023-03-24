import React from "react";
import RadioInput from "./RadioInput";
import { data } from "../data";

const SingleQuestion = ({ question, options }) => {
  return (
    <article className="mt-8">
      <p className="text-sm sm:text-xl font-bold text-slate-600 ">{question}</p>

      {options.map((option) => (
        <RadioInput key={option.id} {...option} />
      ))}
    </article>
  );
};

export default SingleQuestion;

import React from "react";
import { QUIZ_HEADING, QUIZ_INCLUDES } from "../constants";

const Info = () => {
  return (
    <div className="flex flex-col gap-2 p-4 border md:max-w-xl">
      <h1 className="text-3xl font-bold text-slate-600">{QUIZ_HEADING}</h1>
      <h2 className="text-xl font-semibold text-slate-600">{QUIZ_INCLUDES}</h2>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2 font-medium text-slate-600 whitespace-nowrap">
          <div className="w-6">
            <img
              src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1664012272662-Group%208310.png"
              alt=""
              className="w-full"
            />
          </div>
          5 Questions
        </li>

        <li className="flex items-center gap-2 font-medium text-slate-600">
          <div className="w-6">
            <img
              src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1664012293444-Group%208311.png"
              alt=""
              className="w-full"
            />
          </div>
          1 Minute
        </li>

        <li className="flex items-center gap-2 font-medium text-slate-600">
          <div className="w-6">
            <img
              src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1674128706840-Group%208418.png"
              alt=""
              className="w-full"
            />
          </div>
          60% passing percentage
        </li>
      </ul>
    </div>
  );
};

export default Info;

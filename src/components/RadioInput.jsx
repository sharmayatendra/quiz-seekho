import React from "react";

const RadioInput = ({ id, option }) => {
  return (
    <div className="flex justify-between items-center px-8 py-3 mt-8 border border-gray-300 rounded-md ">
      <label
        htmlFor={id}
        className="font-bold text-slate-500 grow cursor-pointer"
      >
        {option}
      </label>
      <input type="radio" id={id} name="radio" />{" "}
    </div>
  );
};

export default RadioInput;

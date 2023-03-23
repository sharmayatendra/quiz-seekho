import React from "react";

const Header = () => {
  return (
    <header className="w-full shadow-md p-4 ">
      <a
        href="/"
        className="flex text-purple-600 font-medium items-center justify-center gap-1"
      >
        <img
          src="https://dntsgn6vvw8wj.cloudfront.net/resources/1663836897587-seekho%20logo%20for%20white%20bg.png"
          alt="logo"
          className="w-24"
        />
        <span className="text-2xl">Quiz</span>
      </a>
    </header>
  );
};

export default Header;

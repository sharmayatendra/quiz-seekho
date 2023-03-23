import React from "react";
import About from "./About";
import Info from "./Info";

const Body = () => {
  return (
    <>
      <section className="p-4 flex flex-col gap-16 mt-8 justify-center sm:flex-row">
        <div className="max-w-72 sm:max-w-lg shadow-md rounded-md p-4">
          <img
            src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1667221299750-Quiz%20Layout%20Seekho%20new035.webp"
            alt=""
            className="w-full"
          />
        </div>

        <Info />
      </section>
      <About />
    </>
  );
};

export default Body;

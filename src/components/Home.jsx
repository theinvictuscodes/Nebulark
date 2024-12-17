import React from "react";
import E from "./Elements/E";
import { getElements } from "./Util";

const Home = () => {
  const data = getElements();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-6 ">
        <div className="mt-6 text-2xl text-neutral-700">
          by the invictus
        </div>

        <div className="md:text-5xl text-2xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
          portfolio and website templates
        </div>

        <div className="text-xl text-white">
          browse, clone and customize your websites
        </div>

        <div className="w-[80%] mt-10 h-[1px] bg-red-800 "></div>

        <div className="md:mt-20 mt-14 p-10 md:text-2xl text-xl  text-neutral-300 text-center" >
        Create stunning websites with our high-quality, customizable components, including headers, buttons, forms, and more. Whether you need individual elements or a fully personalized portfolio website, we deliver fast, affordable solutions using modern technologies like React and TailwindCSS. Build your dream site today with our expert designs!
        </div>

      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 mt-[4px] ml-[2%]  w-[96%] bg-neutral-700 border border-neutral-600  rounded-lg flex md:flex-row flex-col md justify-evenly items-center text-xl  font-semibold ">
      <div className="md:text-4xl  md:mb-0  mb-4 font-bold text-red-700">Nebulark</div>
      <div className=" flex justify-center items-center gap-x-8 md:gap-x-14 text-lg md:text-2xl ">
        
        <div className="hover:text-red-500 hover:cursor-pointer bg-neutral-600 rounded-md px-4  ">
          <Link to="/">Home</Link>
        </div>
        
        <div>
          <Link to="/portfolio">
            <button class="flex  cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-2 md:px-7 py-2 md:py-3 rounded-full border border-gray-600 hover:scale-105 duration-200  hover:border-gray-800 hover:from-red-600 hover:to-red-300">
              Portfolio Templates
            </button>
          </Link>
        </div>
      
        <div className="hover:text-red-500 hover:cursor-pointer bg-neutral-600 rounded-md px-4">
          <Link to="/element">Elements</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

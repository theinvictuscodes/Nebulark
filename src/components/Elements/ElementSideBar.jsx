import React from "react";
import { FaBorderAll } from "react-icons/fa";
import { CgPlayButtonR } from "react-icons/cg";
import { MdOutlineSdCard } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";
import { BsInputCursorText } from "react-icons/bs";
import { TbLoader3 } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

const ElementSideBar = ({ onSidebarItemClick }) => {

  return (
    
    <div className="">
      <div className="md:mt-0 md:ml-[2%] md:w-[15%] font-semibold text-lg md:gap-y-4 flex md:flex-col flex-row flex-wrap  justify-start items-start p-4">
      {[
        { label: "All", icon: FaBorderAll },
        { label: "Header", icon: CiMenuFries },
        { label: "Button", icon: CgPlayButtonR },
        { label: "Input", icon: BsInputCursorText },
        { label: "Card", icon: MdOutlineSdCard },
        { label: "Check Box", icon: FaCheckCircle },
        { label: "Form", icon: FaWpforms },
        { label: "Loader", icon: TbLoader3 },
      ].map((item, index) => (
        <div
          onClick={() => onSidebarItemClick(item.label)}
          key={index}
          className="bg-neutral-800 md:w-[180px] w-[100px]  rounded-lg text-white pl-2 p-1 cursor-pointer hover:bg-neutral-700 flex  flex-wrap items-center gap-x-2"
        >
          <div>
            <item.icon className="text-xl" />
          </div>
          <div>{item.label}</div>

        </div>
      ))}
    </div>
    </div>
  );
};

export default ElementSideBar;

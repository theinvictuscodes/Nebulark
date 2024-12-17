import React, { useState } from "react";
import { getElements } from "../Util";
import E from "./E";
import ElementSideBar from "./ElementSideBar";

const Elements = () => {
  // Fetch the data
  const data = getElements();

  const [components, setComponents] = useState(data);
  const [heading, setHeading] = useState("Browse All Components");

  const sidebarItemClickHandle = (item) => {
    if (item === "All") {
      setComponents(data);
      setHeading("All Components");
    } else {
      setComponents(
        data.filter((d) => d.category.toLowerCase() === item.toLowerCase())
      );
      setHeading(`${item}s`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <ElementSideBar
        onSidebarItemClick={sidebarItemClickHandle}
      />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4 text-neutral-300">{heading}</h1>
        <div>
          {components.length === 0 ? (
            <p className="">No components found for this category.</p>
          ) : (
            components.map((d, index) => (
              <div key={index} className="p-4 ">
                <E data={d} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Elements;

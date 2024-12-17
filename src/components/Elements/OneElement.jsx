import { useParams, useNavigate } from "react-router-dom";
import { getElements } from "../Util";
import jsxToString from "react-element-to-jsx-string";


const OneElement = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = getElements();
  const component = data.find((item) => item.id === id);

  // Check if the component exists
  if (!component) {
    return (
      <div className="text-white text-center mt-10">
        <h1>Component Not Found</h1>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate("/element");
  };

  return (
    <div className="mt-5 pb-10">
      <div className="md:ml-[20%] ml-10">
        <button 
      className="bg-neutral-400 p-3 rounded-md" 
      onClick={handleBackClick}> get back to all elements </button>
      </div>
    <div className="flex justify-start items-center flex-col  min-h-screen  ">



      {/* Component Preview */}
     <div className="flex justify-center items-center md:flex-row flex-col mt-20  gap-x-6 gap-y-3 ">
     <div className="">
        {/* component preview */}
        
        <div className="bg-neutral-400 md:w-[350px]  md:h-[350px] w-[300px] h-[300px] rounded-lg flex justify-center items-center border border-neutral-500 p-2">
          {component.code}
        </div>

      </div>

      {/* Component Code */}
      <div className="">
        <div className="overflow-y-scroll  w-[300px] md:w-[520px] h-[350px] rounded-lg border border-neutral-500 p-4 bg-neutral-800 text-white overflow-auto">
          <div className="bg-neutral-400  p-3 text-xl font-bold text-black mb-11">Component Code</div>
          <code>{jsxToString(component.code, { useBooleanShorthandSyntax: false })}</code>
          
        </div>
      </div>
      
     </div>
    </div>
    </div>
  );
};

export default OneElement;

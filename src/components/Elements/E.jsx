import { useNavigate } from "react-router-dom";

const E = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/element/${data.id}`);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <div className="w-[250px] min-h-[200px] rounded-lg flex justify-center items-center border border-neutral-500 p-2">
          {data.code}
        </div>
      </button>
    </div>
  );
};

export default E;

import { FaRightLeft } from "react-icons/fa6";

const SwapButton = ({swap}) => {
  return (
    <button
      onClick={swap}
      className="bg-white flex  items-center justify-center text-gray-400 text-xs border border-gray-200 -top-1 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full "
    >
      <FaRightLeft />
    </button>
  );
};

export default SwapButton;

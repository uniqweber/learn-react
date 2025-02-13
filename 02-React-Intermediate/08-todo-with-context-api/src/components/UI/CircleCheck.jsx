import { FaCheck } from "react-icons/fa";
import { useTodo } from "../../context/TodoContext";

const CircleCheck = ({ id, isCompleted }) => {
  const { completeTodo } = useTodo();
  
  return (
    <div>
      <div
        onClick={() => completeTodo(id)}
        className={`h-5 w-5 border flex-shrink-0  rounded smooth-transition text-[10px] flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white hover:border-white ${
          isCompleted ? "border-transparent bg-green-600 text-white" : "border-zinc-700 text-zinc-600 bg-zinc-900 "
        }`}
      >
        <FaCheck />
      </div>
    </div>
  );
};

export default CircleCheck;

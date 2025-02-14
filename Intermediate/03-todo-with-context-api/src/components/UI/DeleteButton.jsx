import { FaTrashAlt } from "react-icons/fa";
import { useTodo } from "../../context/TodoContext";

const DeleteButton = ({ id, isCompleted }) => {
  const { deleteTodo } = useTodo();
  const handleDeleteTodo = () => {
    if (!isCompleted) {
      const isConfirmed = confirm("This is task is not Completed Are you sure you want to delete This");
      if (isConfirmed) deleteTodo(id);
    } else {
      deleteTodo(id);
    }
  };
  return (
    <button
      type="button"
      onClick={handleDeleteTodo}
      className="border rounded flex-shrink-0  bg-red-600/10 text-sm w-7 h-7 flex items-center justify-center border-red-600/20 text-red-600/60 hover:bg-red-600/30 hover:border-red-600/50 hover:text-white smooth-transition"
    >
      <FaTrashAlt />
    </button>
  );
};

export default DeleteButton;

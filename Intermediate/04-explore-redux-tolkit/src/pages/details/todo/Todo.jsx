import { useState } from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, updateTodo } from "../../../features/todoSlice/todoSlice";

const Todo = ({ id, text, isComplete, editable, setEditable }) => {
  const [updatedText, setUpdatedText] = useState(text);
  const dispatch = useDispatch();

  return (
    <div
      className={`h-12 border-t first:border-t-0 border-gray-300 text-gray-700 text-lg font-medium flex items-center px-4 gap-3  ${
        isComplete ? "bg-blue-300" : "bg-white"
      }`}
    >
      <input type="checkbox" checked={isComplete} onChange={() => dispatch(completeTodo(id))} />
      <input
        type="text"
        value={updatedText}
        readOnly={!editable}
        onChange={(e) => setUpdatedText(e.target.value)}
        className={`${editable ? "bg-gray-200 h-8 px-2" : "bg-transparent"} border-none outline-none w-full`}
      />
      {editable ? (
        <FaSave
          className="text-xl"
          onClick={() => {
            setEditable(null);
            dispatch(updateTodo({ id, text: updatedText }));
          }}
        />
      ) : (
        !isComplete && <FaEdit className="text-2xl" onClick={() => setEditable(id)} />
      )}
      <FaTrash onClick={() => dispatch(deleteTodo(id))} />
    </div>
  );
};

export default Todo;

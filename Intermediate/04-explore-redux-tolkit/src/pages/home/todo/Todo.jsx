import { FaBackspace, FaEdit, FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useTodo } from "../../../context/TodoContext";
import { useEffect, useState } from "react";
import DeleteConfirmation from "../../../components/UI/DeleteConfirmation";

const Todo = ({ id, todo, completed, isEditable, setIsEditable }) => {
  const { completeTodo, deleteTodo, updateTodo } = useTodo();
  const [inputValue, setInputValue] = useState(todo);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editable = isEditable === id;

  const handleDelete = () => {
    setShowDeleteModal(false);
    deleteTodo(id);
  };
  const handleUpdateTodo = () => {
    updateTodo(id, inputValue);
    setIsEditable(null);
  };

  const handleEditCancel = () => {
    setInputValue(todo);
    setIsEditable(null);
  };

  useEffect(() => {
    if (!editable) {
      setInputValue(todo);
    }
  }, [todo, setInputValue, editable]);

  return (
    <div
      className={`h-13 ${
        completed ? "bg-green-300" : "bg-white"
      } w-full rounded-lg flex items-center gap-3 px-4 text-gray-800 border border-gray-300`}
    >
      <input
        onChange={() => {
          completeTodo(id);
          setIsEditable(null);
        }}
        hidden={editable}
        checked={completed}
        type="checkbox"
        className="h-6 accent-orange-500  w-6  rounded-md cursor-pointer"
      />
      <input
        readOnly={!editable}
        type="text"
        className={`h-full  w-full border-none outline-none ${editable ? "text-orange-500 font-semibold" : ""} ${completed ? "line-through" : ""}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!completed && (
        <button className="flex-shrink-0 cursor-pointer">
          {editable ? (
            <div className="flex items-center gap-3">
              <FaBackspace onClick={handleEditCancel} className="text-xl" />
              <FaSave className="text-xl text-orange-400 hover:text-orange-700" onClick={handleUpdateTodo} />
            </div>
          ) : (
            <FaEdit className="text-2xl flex-shrink-0 hover:text-orange-400" onClick={() => setIsEditable(id)} />
          )}
        </button>
      )}

      {!editable && <FaTrash onClick={() => setShowDeleteModal(true)} className="text-lg hover:text-red-600 flex-shrink-0 cursor-pointer" />}
      {showDeleteModal && <DeleteConfirmation showModal={() => setShowDeleteModal(false)} onDelete={handleDelete} />}
    </div>
  );
};

export default Todo;

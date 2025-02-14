import { useEditable } from "../../context/isEditableContext";
import { BiEdit, BiSave } from "react-icons/bi";
import { useTodo } from "../../context/TodoContext";

const EditButton = ({ id, todo, isCompleted }) => {
  const { editableId, toggleEditable } = useEditable();
  const { editTodo } = useTodo();
  return (
    <button
      disabled={isCompleted}
      type="button"
      onClick={() => {
        if (editableId === id) {
          editTodo(id, todo);
          toggleEditable(null);
        } else {
          toggleEditable(id);
        }
      }}
      className={`border disabled:!cursor-not-allowed rounded flex-shrink-0  text-sm w-7 h-7  items-center justify-center  hover:bg-yellow-600/30  hover:text-white smooth-transition ${
        editableId === id ? "border-yellow-600/20 text-yellow-600/80 bg-yellow-600/10" : "bg-gray-800 border-gray-700 hover:border-yellow-600/50"
      } ${isCompleted ? "hidden" : "flex"}`}
    >
      {editableId === id ? <BiSave onClick={() => editTodo(id, todo)} /> : <BiEdit />}
    </button>
  );
};

export default EditButton;

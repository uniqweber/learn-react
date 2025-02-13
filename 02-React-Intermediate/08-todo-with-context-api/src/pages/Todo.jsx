import { useEffect, useState } from "react";
import { CircleCheck, DeleteButton, EditButton } from "../components/UI";
import { useEditable } from "../context/isEditableContext";
import TodoInput from "../components/UI/TodoInput";

const Todo = ({ id, todo, isCompleted }) => {
  const { editableId } = useEditable();
  const [updatedValue, setUpdatedValue] = useState(todo);
  useEffect(() => {
    if (editableId !== id) {
      setUpdatedValue(todo);
    }
  }, [editableId, id, todo]);

  return (
    <div
      className={`min-h-12 py-2.5 rounded border smooth-transition  flex  items-center justify-between px-4 gap-3 ${
        isCompleted ? "bg-gray-900 border-gray-800" : "bg-zinc-900 border-zinc-700"
      }`}
    >
      <CircleCheck id={id} isCompleted={isCompleted} />
      <TodoInput id={id} isChecked={isCompleted} updatedValue={updatedValue} setUpdatedValue={setUpdatedValue} editableId={editableId} />
      <EditButton id={id} isCompleted={isCompleted} todo={updatedValue} />
      <DeleteButton id={id} isCompleted={isCompleted} />
    </div>
  );
};

export default Todo;

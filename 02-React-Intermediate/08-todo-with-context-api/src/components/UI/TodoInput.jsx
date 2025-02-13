const TodoInput = ({ updatedValue, setUpdatedValue, editableId, id, isChecked }) => {
  return (
    <input
      type="text"
      value={updatedValue}
      onChange={(e) => setUpdatedValue(e.target.value)}
      readOnly={editableId !== id}
      className={`font-light border-none pt-1 outline-none w-full ${editableId === id && !isChecked ? "text-yellow-600" : ""} ${
        isChecked ? "line-through" : ""
      }`}
    />
  );
};

export default TodoInput;

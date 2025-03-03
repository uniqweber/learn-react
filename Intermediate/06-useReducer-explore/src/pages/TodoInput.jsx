import React, {useState} from "react";

const TodoInput = ({setTodos}) => {
  const [todo, setTodo] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 h-13">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="bg-white px-4 rounded-lg w-full h-full text-gray-700"
        placeholder="What needs to be done"
      />
      <button className="flex-shrink-0 bg-green-600 rounded-lg w-32 h-full text-white">Add</button>
    </form>
  );
};

export default TodoInput;

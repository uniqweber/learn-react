import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todoSlice/todoSlice";
import Todo from "./todo/Todo";
import { useState } from "react";

const ReduxTodo = () => {
  const todos = useSelector((state) => state.todos);
  const [isEditable, setIsEditable] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.todo.value.trim();
    if (newTodo) {
      dispatch(addTodo(newTodo));
      e.target.todo.value = "";
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="p-6 w-full max-w-xl ">
        <div>
          <h2 className="text-2xl  font-medium tracking-wide border-b pb-4 border-gray-700">Todo List 📋</h2>
          <div className="mt-6 asdfadsf adslfjaldsf asfdlakdfj adfslkjaldsf adsfkjalksdf a adkfjalsdf aldskfjalkdsfj alkdfsjal;ksdfj aakdjfaklds f">
            {
              todos.length > 0 ? (
                todos.map((todo) => <Todo key={todo.id} {...todo} isEditable={isEditable} setIsEditable={setIsEditable} />)
              ) : (
                <p className="text-gray-400 h-50 flex items-center justify-center text-2xl font-medium ">No todos found 😩</p>
              )
            }
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center min-h-50">
          <input
            name="todo"
            type="text"
            className="bg-white h-12  w-full text-gray-800 px-4 border-none outline-none"
            placeholder="Write something here.."
          />
          <button className="bg-blue-500 px-10 cursor-pointer h-12 flex-shrink-0">Add Todos</button>
        </form>
      </div>
    </div>
  );
};

export default ReduxTodo;

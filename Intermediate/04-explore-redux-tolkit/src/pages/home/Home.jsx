import { useRef, useState } from "react";
import Todo from "./todo/Todo";
import { useTodo } from "../../context/TodoContext";

const Home = () => {
  const todoInput = useRef();
  const { todos, addTodo } = useTodo();
  const [isEditable, setIsEditable] = useState(null);
  const handleTodo = (e) => {
    e.preventDefault();
    const todo = todoInput.current.value;
    if (todo) {
      addTodo(todo);
      e.target.reset();
    }
  };
  return (
    <div className=" min-h-screen bg-gray-950 text-white">
      <div className=" max-w-3xl mx-auto p-6">
        <div className="flex items-center gap-2 text-2xl font-medium tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" className="fill-orange-500 h-10">
            <path d="m404.1 185.3-54.7 18.2a57.4 57.4 0 0 1-27.1 2.4c5.1-7 12-13 20.9-17.5l51.5-25.8a57.7 57.7 0 1 0-77.4-77.4l-25.7 51.6a57.4 57.4 0 0 1-17.5 21 57.4 57.4 0 0 1 2.4-27.2l18.2-54.7a57.7 57.7 0 1 0-109.4 0l18.2 54.7a57.4 57.4 0 0 1 2.4 27.1 57.3 57.3 0 0 1-17.5-20.8l-25.8-51.6a57.7 57.7 0 1 0-77.4 77.4l51.6 25.7a57.4 57.4 0 0 1 21 17.5c-8.7 1.4-18 .7-27.2-2.4l-54.7-18.2a57.7 57.7 0 1 0 0 109.4l54.7-18.2a57.4 57.4 0 0 1 27.1-2.4 57.3 57.3 0 0 1-20.8 17.5l-51.6 25.8a57.7 57.7 0 1 0 77.4 77.4l25.7-51.6a57.4 57.4 0 0 1 17.5-21c1.4 8.7.7 18-2.4 27.2l-18.2 54.7a57.7 57.7 0 1 0 109.4 0l-18.2-54.7a57.4 57.4 0 0 1-2.4-27.1c7 5.1 13 12 17.5 20.9l25.8 51.5a57.7 57.7 0 1 0 77.4-77.4l-51.6-25.7a57.4 57.4 0 0 1-21-17.5c8.7-1.4 18-.7 27.2 2.4l54.7 18.2a57.7 57.7 0 1 0 0-109.4Z"></path>
          </svg>
          <h5 className="">Todos</h5>
        </div>
        <div className="">
          <div className=" w-full space-y-3  mt-20  p-5 min-h-[65vh] rounded-2xl ">
            {todos?.map((todo) => (
              <Todo key={todo.id} {...todo} isEditable={isEditable} setIsEditable={setIsEditable} />
            ))}
          </div>
          <form onSubmit={handleTodo} className="flex items-center mt-20 gap-4">
            <input
              ref={todoInput}
              type="text"
              className="bg-white text-gray-800 px-4 w-full h-12 outline-none focus:border-orange-500 border border-transparent rounded-xl"
              placeholder="Write something here..."
            />
            <button className="h-12 cursor-pointer px-20 flex-shrink-0 bg-orange-500 rounded-xl  ">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

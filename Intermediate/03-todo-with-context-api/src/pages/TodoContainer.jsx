import Todo from "./Todo";
import AddTaskButton from "../components/UI/AddTaskButton";
import { useTodo } from "../context/TodoContext";
import { useRef } from "react";

const TodoContainer = () => {
  const { addTodo, todos } = useTodo();
  const todoRef = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    if (todoRef.current.value) {
      const todo = {
        id: Date.now(),
        todo: todoRef.current?.value?.trim(),
        isCompleted: false,
      };
      addTodo(todo);
      e.target.reset();
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {todos
          .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
          .map((item) => (
            <Todo key={item.id} {...item} />
          ))}
      </div>
      <form onSubmit={handleForm} className={`${todos.length === 0 ? "h-20" : "h-60"} flex items-end  gap-4   mt-4 smooth-transition`}>
        <div className="w-full border font-light border-zinc-700 bg-zinc-900 rounded-md h-12 flex items-center  ">
          <input
            autoComplete="off"
            ref={todoRef}
            type="text"
            name="todo"
            placeholder="What do you need to do?"
            className="w-full pt-1 px-4 border-none outline-none"
          />
        </div>
        <AddTaskButton />
      </form>
    </div>
  );
};

export default TodoContainer;

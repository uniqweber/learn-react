import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  /* -------------------------- add todo to the state ------------------------- */
  const addTodo = (task) => setTodos((prev) => [...prev, task]);
  const completeTodo = (id) => setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  const editTodo = (id, updatedTodo) => setTodos(todos.map((prev) => (prev.id === id ? { ...prev, todo: updatedTodo } : prev)));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodoContext.Provider value={{ addTodo, completeTodo, deleteTodo, editTodo, todos }}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("something is wrong");
  return context;
};

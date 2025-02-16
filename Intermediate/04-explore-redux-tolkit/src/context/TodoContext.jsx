import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);
const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => setTodos((prev) => [...prev, { id: Date.now(), todo, completed: false }]);
  const completeTodo = (id) => setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  const deleteTodo = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));
  const updateTodo = (id, newTodo) => setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, todo: newTodo } : todo)));

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todos"));
    if (storedTodo && storedTodo.length > 0) {
      setTodos(storedTodo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodoContext.Provider value={{ todos, addTodo, completeTodo, deleteTodo, updateTodo }}> {children}</TodoContext.Provider>;
};

export default TodoContextProvider;

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("Something is wrong");
  return context;
};

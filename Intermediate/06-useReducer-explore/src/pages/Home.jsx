import {useReducer, useState} from "react";
import TodoInput from "./TodoInput";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {count: state.count + 1};
      case "DECREMENT":
        return {count: state.count - 1};
      default:
        return state;
    }
  };

  function Counter() {
    const [state, dispatch] = useReducer(counterReducer, {count: 0});
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-slate-950 h-screen font-medium text-white text-xl tracking-wide">
      <div className="w-full max-w-xl" typeof="form">
        <TodoInput todos={todos} setTodos={setTodos} />
        <div>
          {todos.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        
        <Counter />
      </div>
    </div>
  );
};

export default Home;

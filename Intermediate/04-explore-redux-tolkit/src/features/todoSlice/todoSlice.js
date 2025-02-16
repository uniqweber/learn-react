import { createSlice, nanoid } from "@reduxjs/toolkit";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const initialState = loadState();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, isComplete: false };
      state.push(todo);
      saveState(state);
    },

    completeTodo: (state, action) => {
      const todoId = action.payload;
      const todoItem = state.find((item) => item.id === todoId);
      if (todoItem) {
        todoItem.isComplete = !todoItem.isComplete;
        saveState(state);
      }
    },

    updateTodo: (state, action) => {
      const { id, text: updatedText } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = updatedText;
        saveState(state);
      }
    },

    deleteTodo: (state, action) => {
      const todoId = action.payload;
      const newState = state.filter((todo) => todo.id !== todoId);
      saveState(newState);
      return newState;
    },
  },
});

export const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const { addTodo, completeTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

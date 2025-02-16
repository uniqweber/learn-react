import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /**
     * Add new todo item to the state.
     * @param {{ text: string }} action.payload - The text of the new todo item.
     */
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, isComplete: false };
      return [...state, todo];
    },

    /**
     * Toggle completion status of a todo item.
     * @param {{ id: string }} action.payload - The id of the todo item to be toggled.
     */
    completeTodo: (state, action) => {
      const todoId = action.payload;
      const todoItem = state.find((item) => item.id === todoId);
      if (todoItem) {
        // Toggle the completion status of the todo item
        todoItem.isComplete = !todoItem.isComplete;
      }
    },

    /**
     * Update the text of a todo item.
     * @param {{ id: string, text: string }} action.payload - The id and new text of the todo item to be updated.
     */
    updateTodo: (state, action) => {
      const { id, text: updatedText } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        // Update the text of the todo item
        todo.text = updatedText;
      }
    },

    /**
     * Delete a todo item from the state based on the provided id.
     * @param {{ id: string }} action.payload - The id of the todo item to be deleted.
     */
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      // Return a new array that does not include the todo item with the given id
      return state.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { addTodo, completeTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


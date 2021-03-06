import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: new Date() + 1,
        title: action.payload.todos,
        completed: false,
      };
      state.push(newTodo);
    },

    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    toggleCompleted: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },

    editTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

export default TodoSlice.reducer;
export const { add, remove, toggleCompleted, editTodo } = TodoSlice.actions;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import { loginReducer } from "../features/LoginSlice";

const store = configureStore({
  reducer: { todos: todoSlice, login: loginReducer },
});

export default store;

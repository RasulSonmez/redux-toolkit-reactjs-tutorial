import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import TodoSlice from "../features/TodoSlice";
import { loginReducer } from "../features/LoginSlice";
import { themeReducer } from "../features/ThemeSlice";
import UserSlice from "../features/UserSlice";
import counterSlice from "../features/CounterSlice";
import SiteSlice from "../features/SiteSlice";

const rootReducer = combineReducers({
  loginReducer,
  themeReducer,
  todos: TodoSlice,
  user: UserSlice,
  counter: counterSlice,
  site: SiteSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

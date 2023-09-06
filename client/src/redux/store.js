import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

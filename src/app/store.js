import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/expenseApp/expenseAppSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

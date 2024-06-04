import { configureStore } from "@reduxjs/toolkit";
import expenseAppReducer from "../features/expenseApp/expenseAppSlice";

export const store = configureStore({
  reducer: {
    expenseApp: expenseAppReducer,
  },
});

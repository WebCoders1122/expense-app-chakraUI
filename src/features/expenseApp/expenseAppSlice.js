import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseData: [
    {
      detail: "1st income",
      amount: "1000",
      type: "income",
    },
    {
      detail: "2nd income",
      amount: "1500",
      type: "income",
    },
    {
      detail: "2nd expense",
      amount: "500",
      type: "expense",
    },
    {
      detail: "1st expense",
      amount: "200",
      type: "expense",
    },
  ],
};

export const expenseAppSlice = createSlice({
  name: "expenseApp",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenseData.push(action.payload);
      console.log(state.expenseData, action.payload);
    },
  },
  // extraReducers: (builder) => {},
});

export const { addExpense } = expenseAppSlice.actions;

export default expenseAppSlice.reducer;

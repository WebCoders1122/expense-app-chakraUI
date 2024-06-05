import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeData: [
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
  ],
  expenseData: [
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
  totalIncome: 2500,
  totalExpense: 700,
};

export const expenseAppSlice = createSlice({
  name: "expenseApp",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      if (action.payload.type === "income") {
        state.incomeData.push(action.payload);
        state.totalIncome =
          state.totalIncome + parseFloat(action.payload.amount);
      } else {
        state.expenseData.push(action.payload);
        state.totalExpense =
          state.totalExpense + parseFloat(action.payload.amount);
      }
      // console.log(state.expenseData, action.payload);
    },
  },
  // extraReducers: (builder) => {},
});

export const { addExpense } = expenseAppSlice.actions;

export default expenseAppSlice.reducer;

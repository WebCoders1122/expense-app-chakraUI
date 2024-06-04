import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const expenseAppSlice = createSlice({
  name: "expenseApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = expenseAppSlice.actions;

export default expenseAppSlice.reducer;

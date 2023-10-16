//SLICE FOR REDUSER
import { createSlice } from "@reduxjs/toolkit";
//creat slice for reduser
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },

    reset: (state) => {
      state.count = 0;
    },
  },
});
//we must export the var counterSlic for createSlice =>action
//{}inside this you need to git all action
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
//creat slice 
//we need name for slice and initialState and define all reducers=>action you have 
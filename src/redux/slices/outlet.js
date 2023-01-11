import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateOpen: true,
};

export const outletSlice = createSlice({
  name: "stateOpen",
  initialState,
  reducers: {
    setOpen: (_, action) => {
      return { action };
    },
  },
});

export const { setOpen } = outletSlice.actions;
export default outletSlice.reducer;

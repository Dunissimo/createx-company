import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
  isOpen: boolean;
}

const initialState: IInitial = {
  isOpen: false,
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = alertsSlice.actions;
export const alertsReducer = alertsSlice.reducer;

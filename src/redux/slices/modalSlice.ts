import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
  isOpen: boolean;
}

const initialState: IInitial = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleOpenStatus(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpenStatus } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

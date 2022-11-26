import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  view: string;
}

const initialState: IInitial = {
  view: "list",
};

const eventsViewSlice = createSlice({
  name: "eventsView",
  initialState,
  reducers: {
    setView(state, action: PayloadAction<string>) {
      state.view = action.payload;
    },
  },
});

export const { setView } = eventsViewSlice.actions;
export const eventsViewReducer = eventsViewSlice.reducer;

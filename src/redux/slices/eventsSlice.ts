import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../app/utils/interfaces";

interface IInitial {
  events: IEvent[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  loading: true,
  events: [],
  error: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchEvents(state) {
      state.loading = true;
      state.error = false;
    },
    loadEvents(state, action: PayloadAction<IEvent[]>) {
      state.loading = false;
      state.loading = false;
      state.events = action.payload;
    },
    errorEvents(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchEvents, loadEvents, errorEvents } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;

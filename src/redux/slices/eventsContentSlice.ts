import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEventsContent } from "../../app/utils/interfaces";

interface IInitial {
  content: IEventsContent;
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  content: {
    id: 0,
    data: {
      title: "",
      info: {
        date: "",
        price: "",
      },
      themes: [],
      speaker: {
        name: "",
        job: "",
        text: "",
      },
      listForWhom: [],
    },
  },
  loading: true,
  error: false,
};

const eventContentSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    fetchEventContent(state) {
      state.loading = true;
      state.error = false;
    },
    loadEventContent(state, action: PayloadAction<IEventsContent>) {
      state.loading = false;
      state.loading = false;
      state.content = action.payload; // INFO: Если будет неправильно отображатся контент курса, то проблема может быть тут!
    },
    errorEventContent(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchEventContent, loadEventContent, errorEventContent } =
  eventContentSlice.actions;
export const eventContentReducer = eventContentSlice.reducer;

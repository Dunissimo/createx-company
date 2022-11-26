import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoursesContent } from "../../app/utils/interfaces";

interface IInitial {
  content: ICoursesContent | null;
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  content: null,
  loading: true,
  error: false,
};

const contentSlice = createSlice({
  name: "coursesContent",
  initialState,
  reducers: {
    fetchContent(state) {
      state.loading = true;
      state.error = false;
    },
    loadContent(state, action: PayloadAction<ICoursesContent>) {
      state.loading = false;
      state.loading = false;
      state.content = action.payload; // ! Если будет неправильно отображатся контент курса, то проблема может быть тут!
    },
    errorContent(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchContent, loadContent, errorContent } = contentSlice.actions;
export const contentReducer = contentSlice.reducer;

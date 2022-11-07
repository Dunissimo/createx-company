import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourse } from "../../app/utils/interfaces";

interface IInitial {
  courses: ICourse[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  loading: true,
  courses: [],
  error: false,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    fetchCourses(state) {
      state.loading = true;
      state.error = false;
    },
    loadCourses(state, action: PayloadAction<ICourse[]>) {
      state.loading = false;
      state.loading = false;
      state.courses = action.payload;
    },
    errorCourses(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchCourses, loadCourses, errorCourses } = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoursesContent } from "../../app/utils/interfaces";

interface IInitial {
  content: ICoursesContent;
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  content: {
    id: 0,
    data: {
      title: "",
      discount: "",
      info: {
        date: "",
        duration: "",
        price: 0,
      },
      about: "",
      willLearn: [],
      curator: {
        name: "",
        job: "",
        rating: 0,
        coursesCount: 0,
        studentsCount: 0,
        text: "",
        socialMediaLinks: [],
      },
      steps: {
        first: {
          head: "",
          p: "",
        },
        second: {
          head: "",
          p: "",
        },
        third: {
          head: "",
          p: "",
        },
        fourth: {
          head: "",
          p: "",
        },
      },
      listForWhom: [],
      whatWillULearn: { lessons: [] },
    },
  },
  loading: true,
  error: false,
};

const courseContentSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    fetchCourseContent(state) {
      state.loading = true;
      state.error = false;
    },
    loadCourseContent(state, action: PayloadAction<ICoursesContent>) {
      state.loading = false;
      state.loading = false;
      state.content = action.payload; // INFO: Если будет неправильно отображатся контент курса, то проблема может быть тут!
    },
    errorCourseContent(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchCourseContent, loadCourseContent, errorCourseContent } =
  courseContentSlice.actions;
export const courseContentReducer = courseContentSlice.reducer;

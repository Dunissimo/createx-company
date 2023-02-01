import { combineReducers } from "@reduxjs/toolkit";
import { courseContentReducer } from "./slices/coursesContentSlice";
import { coursesReducer } from "./slices/coursesSlice";
import { eventContentReducer } from "./slices/eventsContentSlice";
import { eventsReducer } from "./slices/eventsSlice";
import { eventsViewReducer } from "./slices/eventsViewSlice";
import { jobsReducer } from "./slices/jobsSlice";
import { postsReducer } from "./slices/postsSlice";
import { teamReducer } from "./slices/teamSlice";
import { modalReducer } from "./slices/modalSlice";
import { alertsReducer } from "./slices/alertsSlice";

export const rootReducer = combineReducers({
  courses: coursesReducer,
  events: eventsReducer,
  team: teamReducer,
  posts: postsReducer,
  jobs: jobsReducer,
  view: eventsViewReducer,
  course: courseContentReducer,
  event: eventContentReducer,
  modal: modalReducer,
  alerts: alertsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from "@reduxjs/toolkit";
import { contentReducer } from "./slices/coursesContentSlice";
import { coursesReducer } from "./slices/coursesSlice";
import { eventsReducer } from "./slices/eventsSlice";
import { eventsViewReducer } from "./slices/eventsViewSlice";
import { jobsReducer } from "./slices/jobsSlice";
import { postsReducer } from "./slices/postsSlice";
import { teamReducer } from "./slices/teamSlice";

export const rootReducer = combineReducers({
  courses: coursesReducer,
  events: eventsReducer,
  team: teamReducer,
  posts: postsReducer,
  jobs: jobsReducer,
  view: eventsViewReducer,
  content: contentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from "@reduxjs/toolkit";
import { coursesReducer } from "./slices/coursesSlice";
import { eventsReducer } from "./slices/eventsSlice";
import { postsReducer } from "./slices/postsSlice";
import { teamReducer } from "./slices/teamSlice";

export const rootReducer = combineReducers({
  courses: coursesReducer,
  events: eventsReducer,
  team: teamReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

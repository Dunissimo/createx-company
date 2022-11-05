import { combineReducers } from "@reduxjs/toolkit";
import { coursesReducer } from "./coursesSlice";

export const rootReducer = combineReducers({ courses: coursesReducer });

export type RootState = ReturnType<typeof rootReducer>;

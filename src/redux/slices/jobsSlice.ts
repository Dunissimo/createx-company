import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  jobs: string[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  jobs: [],
  loading: true,
  error: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobs(state) {
      state.loading = true;
      state.error = false;
    },
    loadJobs(state, action: PayloadAction<string[]>) {
      state.loading = false;
      state.jobs = action.payload;
      state.error = false;
    },
    errrorJobs(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchJobs, loadJobs, errrorJobs } = jobsSlice.actions;
export const jobsReducer = jobsSlice.reducer;

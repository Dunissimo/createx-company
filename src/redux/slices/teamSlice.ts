import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeam } from "../../app/utils/interfaces";

interface IInitial {
  team: ITeam[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  loading: true,
  team: [],
  error: false,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    fetchTeam(state) {
      state.loading = true;
      state.error = false;
    },
    loadTeam(state, action: PayloadAction<ITeam[]>) {
      state.loading = true;
      state.loading = false;
      state.team = action.payload;
    },
    errorTeam(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchTeam, loadTeam, errorTeam } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;

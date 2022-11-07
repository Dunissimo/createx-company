import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../app/utils/interfaces";

interface IInitial {
  posts: IPost[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  loading: true,
  posts: [],
  error: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts(state) {
      state.loading = true;
      state.error = false;
    },
    loadPosts(state, action: PayloadAction<IPost[]>) {
      state.loading = false;
      state.loading = false;
      state.posts = action.payload;
    },
    errorPosts(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchPosts, loadPosts, errorPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

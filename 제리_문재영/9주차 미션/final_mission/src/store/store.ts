// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    showPost: (state, action) => {
      console.log(state, action);
    },
  },
});

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

export const { showPost } = postSlice.actions;
export default store;

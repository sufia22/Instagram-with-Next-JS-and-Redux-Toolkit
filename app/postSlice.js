import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchAllPosts } from "./postApi";

// create post slice
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((data) => data._id != action.payload);
      });
  },
});

// selectors
export const selectPost = (state) => state.post;

// actions
export const {} = postSlice.actions;

// reducer
export default postSlice.reducer;

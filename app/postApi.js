import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all posts
export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllPosts",
  async () => {
    const response = await axios.get("http://localhost:3000/api/posts");

    return response.data.posts;
  }
);

// create a post
export const createPost = createAsyncThunk("post/createPost", async (data) => {
  const response = await axios.post("http://localhost:3000/api/posts", data);

  return response.data.post;
});

// delete post
export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  await axios.delete(`http://localhost:3000/api/posts/?id=${id}`);
  return id;
});

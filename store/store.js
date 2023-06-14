import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/app/postSlice";

// create store
const store = configureStore({
  reducer: {
    post: postReducer,
  },
  devTools: true,
});

// export store
export default store;

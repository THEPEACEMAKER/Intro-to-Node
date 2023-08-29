import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    renderedPosts: [],
    searchTerm: "",
  },
  reducers: {
    setPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    setRenderedPosts: (state, action) => {
      state.renderedPosts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setPosts, setRenderedPosts, setSearchTerm } = postsSlice.actions;

export default postsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    popularVideoState: {
      popularVideoList: [],
      nextPgToken: "",
    },
    selectedVideoState: {
      previous: "",
      current: "",
    },
    suggestedVideoState: {
      suggestedVideoList: [],
      nextPgToken: "",
    },
    searchVideoState: {
      searchString: "",
      searchList: [],
      nextPgToken: "",
    },
  },
  reducers: {
    addVideosList: (state, action) => {
      state.popularVideoState.popularVideoList =
        state.popularVideoState.popularVideoList.concat(...action.payload);
    },
    setNextPageToken: (state, action) => {
      state.popularVideoState.nextPgToken = action.payload;
    },
    addSuggestedVideosToList: (state, action) => {
      state.suggestedVideoState.suggestedVideoList =
        state.suggestedVideoState.suggestedVideoList.concat(...action.payload);
    },
    setNextSuggestedPageToken: (state, action) => {
      state.suggestedVideoState.nextPgToken = action.payload;
    },
    resetVideoData: (state, action) => {
      console.log(action);
      state.suggestedVideoState.suggestedVideoList = [];
      state.suggestedVideoState.nextPgToken = "";
    },
    setPreviousVid: (state, action) => {
      state.selectedVideoState.previous = action.payload;
    },
    setCurrentVid: (state, action) => {
      state.selectedVideoState.current = action.payload;
    },
    addSearchResults: (state, action) => {
      // console.log(action.payload);
      state.searchVideoState.searchList = action.payload;
    },
    setSearchString: (state, action) => {
      state.searchVideoState.searchString = action.payload;
    },
    clearSuggestions: (state, action) => {
      console.log(action);
      state.searchVideoState.searchList = [];
    },
  },
});
export const {
  addVideosList,
  setNextPageToken,
  addSuggestedVideosToList,
  setNextSuggestedPageToken,
  resetVideoData,
  setPreviousVid,
  setCurrentVid,
  addSearchResults,
  setSearchString,
  clearSuggestions,
} = videoSlice.actions;
export default videoSlice.reducer;

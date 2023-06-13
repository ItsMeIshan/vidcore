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
  },
  reducers: {
    addVideosList: (state, action) => {
      state.popularVideoState.popularVideoList =
        state.popularVideoState.popularVideoList.concat(...action.payload);
      //   state.popularVideoState.popularVideoList.push(...action.payload);
      // console.log(state.popularVideoState.popularVideoList);
    },
    setNextPageToken: (state, action) => {
      state.popularVideoState.nextPgToken = action.payload;
    },
    addSuggestedVideosToList: (state, action) => {
      state.suggestedVideoState.suggestedVideoList =
        state.suggestedVideoState.suggestedVideoList.concat(...action.payload);
      // console.log(state.suggestedVideoState.suggestedVideoList);
    },
    setNextSuggestedPageToken: (state, action) => {
      state.suggestedVideoState.nextPgToken = action.payload;
    },
    resetVideoData: (state, action) => {
      console.log(action);
      state.suggestedVideoState.suggestedVideoList = [];
      state.suggestedVideoState.nextPgToken = "";
      console.log(`next pg tokekn::: ${state.suggestedVideoState.nextPgToken}`);
    },
    setPreviousVid: (state, action) => {
      state.selectedVideoState.previous = action.payload;
    },
    setCurrentVid: (state, action) => {
      state.selectedVideoState.current = action.payload;
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
} = videoSlice.actions;
export default videoSlice.reducer;

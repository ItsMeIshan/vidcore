import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    popularVideoState: {
      popularVideoList: [],
      nextPgToken: "",
    },
  },
  reducers: {
    addVideosList: (state, action) => {
      state.popularVideoState.popularVideoList =
        state.popularVideoState.popularVideoList.concat(...action.payload);
      //   state.popularVideoState.popularVideoList.push(...action.payload);
      console.log(state.popularVideoState.popularVideoList);
    },
    setNextPageToken: (state, action) => {
      state.popularVideoState.nextPgToken = action.payload;
    },
  },
});
export const { addVideosList, setNextPageToken } = videoSlice.actions;
export default videoSlice.reducer;

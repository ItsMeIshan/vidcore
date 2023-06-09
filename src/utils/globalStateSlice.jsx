import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: {
    globalState: {
      isSidebarOpen: true,
      screenSize: 1400,
    },
  },
  reducers: {
    changeSidebarState: (state, action) => {
      state.globalState.isSidebarOpen = action.payload;
    },
    changeWindowSize: (state, action) => {
      state.globalState.screenSize = action.payload;
    },
  },
});
export const { changeSidebarState, changeWindowSize } = globalSlice.actions;
export default globalSlice.reducer;

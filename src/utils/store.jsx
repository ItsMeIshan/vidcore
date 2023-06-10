import { configureStore } from "@reduxjs/toolkit";
import globalStateSlice from "./globalStateSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    globalSlice: globalStateSlice,
    videoSlice: videoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

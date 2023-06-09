import { configureStore } from "@reduxjs/toolkit";
import globalStateSlice from "./globalStateSlice";

const store = configureStore({
  reducer: {
    globalSlice: globalStateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

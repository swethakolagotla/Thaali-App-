import { configureStore } from "@reduxjs/toolkit";

import thaaliAppSlice from "./slices/Slice";

export const store = configureStore({
  reducer: {
    thaaliItems: thaaliAppSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-slice/counter-slice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { Keys } from "../keys";
import { reducer as questionReducer } from "../slices/question";

export const store = configureStore({
  reducer: {
    [Keys.question]: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

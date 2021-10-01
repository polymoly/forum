import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Keys } from "../../keys";
import { reducers } from "./actions";
import { questionInitialState } from "./types";

const { reducer, actions } = createSlice({
  name: Keys.question,
  initialState: questionInitialState,
  reducers: reducers,
});

export { reducer, actions };

export const useExplanation = (explanation?: string) => {
  const { addExplanation } = actions;
  const dispatch = useDispatch();
  const dispatchExplanation = () => dispatch(addExplanation(explanation));

  return dispatchExplanation;
};

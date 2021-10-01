import { PayloadAction } from "@reduxjs/toolkit";
import { QuestionInitialStateTypes } from "../types";

const addExplanation = (
  state: QuestionInitialStateTypes,
  {
    payload: explanation,
  }: PayloadAction<QuestionInitialStateTypes["explanation"]>
): QuestionInitialStateTypes => {
  return {
    ...state,
    explanation,
  };
};

export const reducers = { addExplanation };

import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: data,
    answers: {},
    currQuesIdx: 0,
    timeTaken: 0,
  },
  reducers: {
    incrementQuesIdx: (state, action) => {
      state.currQuesIdx += 1;
    },

    saveAnswer: (state, action) => {
      state.answers[action.payload.id] = action.payload;
    },

    updateTimer: (state, action) => {
      state.timeTaken = 60 - action.payload;
    },
  },
});

export const { incrementQuesIdx, saveAnswer, updateTimer } = quizSlice.actions;

export default quizSlice.reducer;

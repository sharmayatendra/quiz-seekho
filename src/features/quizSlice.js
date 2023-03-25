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
    incrementQuesIdx: (state) => {
      state.currQuesIdx += 1;
    },

    saveAnswer: (state, action) => {
      state.answers[action.payload.id] = action.payload;
    },

    updateTimer: (state, action) => {
      state.timeTaken = 60 - action.payload;
    },

    resetQuesIdx: (state) => {
      state.currQuesIdx = 0;
    },
  },
});

export const { incrementQuesIdx, saveAnswer, updateTimer, resetQuesIdx } = quizSlice.actions;

export default quizSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "../features/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
});

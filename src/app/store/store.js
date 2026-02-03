import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "@/entities/note";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@/shared/lib/nanoid";
import { loadNotes, saveNotes } from "../api/localStorage";

const initialState = {
  notes: loadNotes(),
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const now = new Date().toISOString();
      const newNote = {
        id: nanoid(),
        text: action.payload.text,
        createdAt: now,
        updatedAt: now,
      };
      state.notes.unshift(newNote);
      saveNotes(state.notes);
    },

    updateNote: (state, action) => {
      const { id, text } = action.payload;
      const note = state.notes.find((n) => n.id === id);
      if (note) {
        note.text = text;
        note.updatedAt = new Date().toISOString();
        saveNotes(state.notes);
      }
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      saveNotes(state.notes);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;

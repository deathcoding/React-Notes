export const selectAllNotes = (state) => state.notes.notes;

export const selectNoteById = (state, noteId) =>
  state.notes.notes.find((note) => note.id === noteId);

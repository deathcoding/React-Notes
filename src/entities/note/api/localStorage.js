import { STORAGE_KEY, DEFAULT_NOTE } from "@/shared/config/constants";
import { nanoid } from "@/shared/lib/nanoid";

export const getDefaultNote = () => {
  const now = new Date().toISOString();
  return {
    id: nanoid(),
    text: DEFAULT_NOTE.text,
    createdAt: now,
    updatedAt: now,
  };
};

export const loadNotes = () => {
  try {
    const notesJson = localStorage.getItem(STORAGE_KEY);
    if (notesJson) {
      return JSON.parse(notesJson);
    }
    return [getDefaultNote()];
  } catch (error) {
    console.error("Ошибка загрузки заметок:", error);
    return [getDefaultNote()];
  }
};

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Ошибка сохранения заметок:", error);
  }
};

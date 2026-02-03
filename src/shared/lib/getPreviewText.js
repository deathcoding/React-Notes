import { NOTE_TEXT_LIMIT } from "@/shared/config/constants";

export const getPreviewText = (text) => {
  if (text.length <= NOTE_TEXT_LIMIT) return text;
  return text.substring(0, NOTE_TEXT_LIMIT) + "...";
};

import { Card } from "@/shared/ui";
import styles from "./NoteCard.module.css";
import { formatDate } from "@/shared/lib/formatDate";
import { useState } from "react";
import { getPreviewText } from "@/shared/lib/getPreviewText";
import { NOTE_TEXT_LIMIT } from "@/shared/config/constants";

export const NoteCard = ({ note, editButton, deleteButton }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongText = note.text.length > NOTE_TEXT_LIMIT;

  const displayedText = isExpanded ? note.text : getPreviewText(note.text);

  return (
    <Card
      className={styles.card}
      extra={
        <div className={styles.buttonGroup}>
          {editButton}
          {deleteButton}
        </div>
      }
    >
      <div className={styles.content}>
        <p className={styles.text}>{displayedText}</p>

        {isLongText && (
          <button
            className={styles.expandBtn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Скрыть" : "Показать полностью"}
          </button>
        )}
      </div>

      <div className={styles.meta}>
        <p className={styles.date}>Создано: {formatDate(note.createdAt)}</p>
        {note.updatedAt !== note.createdAt && (
          <p className={styles.date}>Обновлено: {formatDate(note.updatedAt)}</p>
        )}
      </div>
    </Card>
  );
};

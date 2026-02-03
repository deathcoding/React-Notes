import { useState } from "react";
import { useSelector } from "react-redux";
import { NoteCard, selectAllNotes } from "@/entities/note";
import { EditNoteModal } from "@/features/edit-note";
import { EditNoteButton } from "@/features/edit-note";
import { DeleteNoteButton } from "@/features/delete-note";
import styles from "./NotesList.module.css";

export const NotesList = () => {
  const notes = useSelector(selectAllNotes);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const handleEdit = (note) => {
    setCurrentNote(note);
    setEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setEditModalOpen(false);
    setCurrentNote(null);
  };

  if (!notes.length) {
    return <div className={styles.empty}>У вас пока нет заметок =(</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.notesList}>
        {notes.map((note) => {
          return (
            <NoteCard
              note={note}
              key={note.id}
              editButton={<EditNoteButton onClick={() => handleEdit(note)} />}
              deleteButton={<DeleteNoteButton noteId={note.id} />}
            />
          );
        })}
      </div>

      <EditNoteModal
        isOpen={editModalOpen}
        onClose={handleCloseEdit}
        note={currentNote}
      />
    </div>
  );
};

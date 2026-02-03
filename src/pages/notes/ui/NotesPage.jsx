import { useState } from "react";
import { NotesList } from "@/widgets/notes-list";
import { Header } from "@/widgets/header";
import { AddNoteModal } from "@/features/add-note";
import { AddNoteButton } from "@/features/add-note";
import styles from "./NotesPage.module.css";

export const NotesPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleOpenAdd = () => {
    setAddModalOpen(true);
  };

  const handleCloseAdd = () => {
    setAddModalOpen(false);
  };

  return (
    <>
      <Header title="Мои заметки">
        <AddNoteButton onClick={handleOpenAdd} />
      </Header>
      <main className={styles.content}>
        <NotesList />
      </main>
      <AddNoteModal isOpen={addModalOpen} onClose={handleCloseAdd} />
    </>
  );
};

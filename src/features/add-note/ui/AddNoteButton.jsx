import { Button } from "@/shared/ui";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./AddNoteButton.module.css";

export const AddNoteButton = ({ onClick }) => {
  return (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={onClick}
      size="large"
      className={styles.addButton}
    >
      Создать заметку
    </Button>
  );
};

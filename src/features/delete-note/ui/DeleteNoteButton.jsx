import { useDispatch } from "react-redux";
import { Button, Popconfirm } from "@/shared/ui";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteNote } from "@/entities/note";

export const DeleteNoteButton = ({ noteId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(noteId));
  };

  return (
    <Popconfirm
      title="Удалить заметку"
      description="Вы уверены, что хотите удалить эту заметку?"
      onConfirm={handleDelete}
      okText="Да"
      cancelText="Нет"
    >
      <Button danger icon={<DeleteOutlined />} size="small">
        Удалить
      </Button>
    </Popconfirm>
  );
};

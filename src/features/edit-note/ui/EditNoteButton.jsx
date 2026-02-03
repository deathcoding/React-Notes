import { EditOutlined } from "@ant-design/icons";
import { Button } from "@/shared/ui";

export const EditNoteButton = ({ onClick }) => {
  return (
    <Button icon={<EditOutlined />} onClick={onClick} size="small">
      Редактировать
    </Button>
  );
};

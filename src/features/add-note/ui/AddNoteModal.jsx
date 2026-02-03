import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Modal, Input } from "@/shared/ui";
import { addNote } from "@/entities/note";
import styles from "./AddNote.module.css";

const { TextArea } = Input;

export const AddNoteModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      text: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset({ text: "" });
    }
  }, [isOpen, reset]);

  const onSubmit = (data) => {
    if (data.text && data.text.trim()) {
      dispatch(addNote({ text: data.text.trim() }));
      reset({ text: "" });
      onClose();
    }
  };

  const handleCancel = () => {
    reset({ text: "" });
    onClose();
  };

  return (
    <Modal
      title="Создать новую заметку"
      open={isOpen}
      onOk={handleSubmit(onSubmit)}
      onCancel={handleCancel}
      okText="Создать"
      cancelText="Отмена"
      width={600}
    >
      <form className={styles.form}>
        <Controller
          name="text"
          control={control}
          rules={{
            required: "Текст заметки не может быть пустым",
            validate: (value) =>
              !value.trim()
                ? "Заметка не может состоять только из пробелов"
                : true,
          }}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Введите текст заметки..."
              rows={8}
              className={errors.text ? styles.inputError : ""}
            />
          )}
        />
        {errors.text && (
          <span className={styles.error}>{errors.text.message}</span>
        )}
      </form>
    </Modal>
  );
};

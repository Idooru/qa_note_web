import { type FC, useRef, useState } from "react";
import style from "./TaskTitleField.module.css";
import "../../../../../app/index.css";
import { modifyTaskTitle } from "../../../../../services/task/modifyTaskTitle.ts";
import { useTaskStore } from "../../../../../hooks/useTasks.ts";

interface TaskTitleFieldProps {
  _taskId: number;
  _taskTitle: string;
}

const TaskTitleField: FC<TaskTitleFieldProps> = ({ _taskId, _taskTitle }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState(_taskTitle);
  const originalTitleRef = useRef(_taskTitle);
  const modifyTaskTitleStore = useTaskStore((state) => state.modifyTaskTitle);

  const handleActiveEdit = () => setIsEditingTitle(true);
  const handleTitleSave = () => {
    modifyTaskTitle({
      taskId: _taskId,
      title: _taskTitle,
      modifyTaskTitleStore,
    });
    setIsEditingTitle(false);
  };
  const handleBlur = () => {
    setTitle(originalTitleRef.current);
    setIsEditingTitle(false);
  };

  return (
    <>
      {isEditingTitle ? (
        <input
          className={`${style.task_title_edit} line_none`}
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === "Enter" && handleTitleSave()}
        />
      ) : (
        <p
          className={style.task_title_display}
          onDoubleClick={handleActiveEdit}
        >
          {title}
        </p>
      )}
    </>
  );
};

export default TaskTitleField;

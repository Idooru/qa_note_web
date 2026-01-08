import { type FC, useRef, useState } from "react";
import style from "./TaskTitleField.module.css";
import "../../../../../app/index.css";
import { useConnectModifyTaskTitle } from "../../../../../hooks/react-query/mutation/task/useConnectModifyTaskTitle.ts";
import { ModifyTaskTitleService } from "../../../../../services/task/modify-task-title-service.ts";

interface TaskTitleFieldProps {
  _taskId: string;
  _taskTitle: string;
}

const TaskTitleField: FC<TaskTitleFieldProps> = ({ _taskId, _taskTitle }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState(_taskTitle);
  const originalTitleRef = useRef(_taskTitle);

  const service = new ModifyTaskTitleService();
  const { mutate: modifyTaskTitle } = useConnectModifyTaskTitle(service);

  const handleActiveEdit = () => setIsEditingTitle(true);
  const handleTitleSave = () => {
    modifyTaskTitle({ id: _taskId, title });
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

import React, { type FC, useState } from "react";
import style from "./TaskTypeField.module.css";
import "../../../../../app/index.css";
import { modifyTaskType } from "../../../../../services/task/modifyTaskType.ts";
import { useTaskStore } from "../../../../../hooks/useTasks.ts";
import { type TaskType } from "../../../../../data/task_data.ts";
import SelectTaskType from "../../../select_task_type/SelectTaskType.tsx";

interface TaskTypeFieldProps {
  _taskId: string;
  _taskType: TaskType;
}

const TaskTypeField: FC<TaskTypeFieldProps> = ({ _taskId, _taskType }) => {
  const [isEditingType, setIsEditingType] = useState(false);
  const [type, setType] = useState(_taskType);
  const modifyTaskTypeStore = useTaskStore((state) => state.modifyTaskType);

  const handleActiveEdit = () => setIsEditingType(true);
  const handleTypeSave = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const taskType = e.target.value as TaskType;
    modifyTaskType({
      taskId: _taskId,
      type: taskType,
      modifyTaskTypeStore,
    });
    setType(taskType);
    setIsEditingType(false);
    ``;
  };

  return (
    <>
      {isEditingType ? (
        <SelectTaskType
          value={_taskType}
          handleChange={handleTypeSave}
          className={`${style.task_type_edit} center`}
        />
      ) : (
        <p className={style.task_type_display} onDoubleClick={handleActiveEdit}>
          {type}
        </p>
      )}
    </>
  );
};

export default TaskTypeField;

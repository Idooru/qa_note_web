import React, { type FC, useState } from "react";
import style from "./TaskTypeField.module.css";
import "../../../../../app/index.css";
import { type TaskType } from "../../../../../data/task_data.ts";
import SelectTaskType from "../../../select_task_type/SelectTaskType.tsx";
import { ModifyTaskTypeService } from "../../../../../services/task/modify-task-type-service.ts";
import { useConnectModifyTaskType } from "../../../../../hooks/react-query/mutation/task/useConnectModifyTaskType.ts";

interface TaskTypeFieldProps {
  _taskId: string;
  _taskType: TaskType;
}

const TaskTypeField: FC<TaskTypeFieldProps> = ({ _taskId, _taskType }) => {
  const [isEditingType, setIsEditingType] = useState(false);
  const [type, setType] = useState(_taskType);

  const service = new ModifyTaskTypeService();
  const { mutate: modifyTaskType } = useConnectModifyTaskType(service);

  const handleActiveEdit = () => setIsEditingType(true);
  const handleTypeSave = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as TaskType;
    modifyTaskType({ id: _taskId, type });

    setType(type);
    setIsEditingType(false);
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

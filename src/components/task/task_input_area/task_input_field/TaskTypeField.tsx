import React, { type FC } from "react";
import style from "./TaskInputField.module.css";
import { type TaskType } from "../../../../data/task_data.ts";
import type { TaskFormAction } from "../../../../pages/TaskPage/create_task_page/reducer/task_form_reducer.ts";
import SelectTaskType from "../../select_task_type/SelectTaskType.tsx";

interface TaskTypeFieldProps {
  dispatch: React.Dispatch<TaskFormAction>;
  value: TaskType;
}

const TaskTypeField: FC<TaskTypeFieldProps> = ({ dispatch, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const taskType = e.target.value as TaskType;
    dispatch({ type: "SET_TASK_TYPE", payload: taskType });
  };

  return (
    <SelectTaskType
      value={value}
      handleChange={handleChange}
      className={style.task_input_field}
    />
  );
};

export default TaskTypeField;

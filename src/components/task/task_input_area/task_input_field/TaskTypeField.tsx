import React, { type FC } from "react";
import style from "./TaskInputField.module.css";
import "../../../../app/index.css";
import { type TaskType, taskTypes } from "../../../../data/task_data.ts";
import type { TaskFormAction } from "../../../../pages/TaskPage/create_task_page/reducer/task_form_reducer.ts";

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
    <div className={style.task_input_field}>
      <select value={value} onChange={handleChange} className="line_none">
        <option value="" disabled>
          select type
        </option>

        {taskTypes.map((taskType) => (
          <option key={taskType} value={taskType}>
            {taskType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskTypeField;

import React, { type FC } from "react";
import style from "./TaskInputField.module.css";
import "../../../../app/index.css";
import type { TaskFormAction } from "../../../../pages/TaskPage/create_task_page/reducer/task_form_reducer.ts";

interface TaskTitleFieldProps {
  dispatch: React.Dispatch<TaskFormAction>;
  value: string;
}

const TaskTitleField: FC<TaskTitleFieldProps> = ({ dispatch, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const taskTitle = e.target.value;
    dispatch({ type: "SET_TASK_TITLE", payload: taskTitle });
  };

  return (
    <div className={style.task_input_field}>
      <input
        onChange={handleChange}
        className="line_none"
        value={value}
        type="text"
      ></input>
    </div>
  );
};

export default TaskTitleField;

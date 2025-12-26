import React, { type FC } from "react";
import style from "./TaskInputArea.module.css";
import TaskTypeField from "./task_input_field/TaskTypeField.tsx";
import TaskTitleField from "./task_input_field/TaskTitleField.tsx";
import type {
  TaskFormAction,
  TaskFormState,
} from "../../../pages/TaskPage/create_task_page/reducer/task_form_reducer.ts";

interface TaskInputAreaProps {
  title: string;
  dispatch: React.Dispatch<TaskFormAction>;
  state: TaskFormState;
}

const TaskInputArea: FC<TaskInputAreaProps> = ({ title, dispatch, state }) => {
  const inputCase = title.split(" ")[1];

  return (
    <div className={style.task_input_area}>
      <h3 className={style.title}>{title}</h3>
      {inputCase === "Type" ? (
        <TaskTypeField dispatch={dispatch} value={state.taskType} />
      ) : (
        <TaskTitleField dispatch={dispatch} value={state.taskTitle} />
      )}
    </div>
  );
};

export default TaskInputArea;

import type { FC } from "react";
import style from "./TaskStartDateField.module.css";

interface TaskStartDateField {
  startDate: string;
}

const TaskStartDateField: FC<TaskStartDateField> = ({ startDate }) => {
  return <p className={style.task_start_date}>{startDate}</p>;
};

export default TaskStartDateField;

import type { FC } from "react";
import style from "./TaskStartDateField.module.css";
import { parseDate } from "../../../../../utils/parse_date.ts";

interface TaskStartDateField {
  startDate: Date;
}

const TaskStartDateField: FC<TaskStartDateField> = ({ startDate }) => {
  const { year, month, day } = parseDate(startDate);
  const dateString = `${year}-${month}-${day}`;

  return <p className={style.task_start_date}>{dateString}</p>;
};

export default TaskStartDateField;

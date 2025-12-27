import React, { type FC } from "react";
import { type TaskType, taskTypes } from "../../../data/task_data.ts";
import "../../../app/index.css";

interface SelectTaskTypeProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  value: TaskType;
}

const SelectTaskType: FC<SelectTaskTypeProps> = ({
  handleChange,
  value,
  className,
}) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      className={`${className} line_none`}
    >
      <option value="" disabled>
        select type
      </option>

      {taskTypes.map((taskType) => (
        <option key={taskType} value={taskType}>
          {taskType}
        </option>
      ))}
    </select>
  );
};

export default SelectTaskType;

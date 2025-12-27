import React, { type FC, useRef } from "react";
import style from "./TaskItem.module.css";
import "../../../../app/index.css";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import type { Task } from "../../../../data/task_data";
import TaskTitleField from "./task_title/TaskTitleField.tsx";
import TaskTypeField from "./task_type/TaskTypeField.tsx";
import TaskIdField from "./task_id/TaskIdField.tsx";

interface TaskItemProps {
  task: Task;
  isEditingAllIds: boolean;
  setIsEditingAllIds: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  task,
  isEditingAllIds,
  setIsEditingAllIds,
  isChecked,
  onCheck,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleItemClick = () => {
    if (isEditingAllIds && checkboxRef.current) {
      checkboxRef.current.click();
    }
  };

  return (
    <li className={style.task_item} onClick={handleItemClick}>
      <div
        className={`${style.task_item_area} ${isEditingAllIds ? style.task_item_area_hover : style.task_item_area}`}
      >
        <TaskIdField
          _taskId={task.id!}
          isEditingAllIds={isEditingAllIds}
          setIsEditingAllIds={setIsEditingAllIds}
          checkboxRef={checkboxRef}
          isChecked={isChecked}
          onCheck={onCheck}
        />
        <TaskTitleField _taskId={task.id!} _taskTitle={task.title} />
        <TaskTypeField _taskId={task.id!} _taskType={task.type} />
        <p className={`${style.task_start_date}`}>{task.startDate}</p>
        <p className={`${style.task_complete}`}>
          {task.complete ? (
            <MdDone color="green" className={style.task_complete_icon} />
          ) : (
            <IoMdClose color="red" className={style.task_complete_icon} />
          )}
        </p>
      </div>
      <div className={`${style.task_scroll_area}`}></div>
    </li>
  );
};

export default TaskItem;

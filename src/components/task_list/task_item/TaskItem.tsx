import type { FC } from "react";
import type { Task } from "../../../data/task_data";
import style from "./TaskItem.module.css";
import "../../../app/index.css";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <li className={`${style.task_item} `}>
      <div className={`${style.task_item_area}`}>
        <p className={`${style.task_id}`}>#{task.id}</p>
        <p className={`${style.task_title}`}>{task.title}</p>
        <p className={`${style.task_type}`}>{task.type}</p>
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

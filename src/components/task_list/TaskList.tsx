import { type FC } from "react";
import { tasks } from "../../data/task_data";
import TaskItem from "./task_item/TaskItem";
import style from "./TaskList.module.css";
import "../../app/index.css";

const TaskList: FC = () => {
  return (
    <>
      <div className={`${style.task_list_header} main_border`}>
        <p className={`${style.task_id_col}`}>ID</p>
        <p className={`${style.task_title_col}`}>Title</p>
        <p className={`${style.task_type_col}`}>Type</p>
        <p className={`${style.task_start_date_col}`}>Start Date</p>
        <p className={`${style.task_complete_col}`}>Status</p>
        <p className={`${style.task_scroll_col}`}></p>
      </div>
      <ul className={style.task_list_body}>
        {...tasks.map((task) => <TaskItem task={task} />)}
      </ul>
    </>
  );
};

export default TaskList;

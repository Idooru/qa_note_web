import { type FC, useEffect, useRef } from "react";
import TaskItem from "./task_item/TaskItem";
import style from "./TaskList.module.css";
import "../../../app/index.css";
import { useTaskStore } from "../../../hooks/useTasks.ts";

const TaskList: FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const listRef = useRef<HTMLUListElement | null>(null);
  const prevLengthRef = useRef<number>(tasks.length);

  useEffect(() => {
    const prevLength = prevLengthRef.current;
    const currentLength = tasks.length;

    if (currentLength > prevLength) {
      listRef.current?.scrollTo({
        top: listRef.current?.scrollHeight,
        behavior: "smooth",
      });
    }

    prevLengthRef.current = currentLength;
  }, [tasks.length]);

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
      <ul ref={listRef} className={style.task_list_body}>
        {...tasks.map((task) => <TaskItem task={task} />)}
      </ul>
    </>
  );
};

export default TaskList;

import style from "../../../pages/TaskPage/show_task_calender_page/ShowTaskCalenderPage.module.css";
import type { FC } from "react";
import { useConnectFetchTasks } from "../../../hooks/react-query/query/useConnectFetchTasks.ts";

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

interface RenderMonthTaskProps {
  date: Date;
}

const RenderMonthTask: FC<RenderMonthTaskProps> = ({ date }) => {
  const startDate = `${date.getFullYear()}-${date.getMonth() + 1}`;
  const { data: tasks = [] } = useConnectFetchTasks(startDate, "month");

  const filteredTasks = tasks.filter((task) =>
    isSameDay(new Date(task.startDate), date),
  );

  if (filteredTasks.length === 0) return null;

  const completedTasks = filteredTasks.filter((task) => task.complete);
  const notCompletedTasks = filteredTasks.filter((task) => !task.complete);

  return (
    <div className={style.task_summary}>
      <div className={style.task_badges}>
        {completedTasks.length > 0 && (
          <span className={`${style.badge} ${style.complete}`}>
            ✓ {completedTasks.length}
          </span>
        )}
        {notCompletedTasks.length > 0 && (
          <span className={`${style.badge} ${style.pending}`}>
            ✕ {notCompletedTasks.length}
          </span>
        )}
      </div>
      <div className={style.progress_bar}>
        <div
          className={style.progress_fill}
          style={{
            width: `${(completedTasks.length / filteredTasks.length) * 100}%`,
          }}
        />
      </div>
      <span className={style.total}>Total {filteredTasks.length}</span>
    </div>
  );
};

export default RenderMonthTask;

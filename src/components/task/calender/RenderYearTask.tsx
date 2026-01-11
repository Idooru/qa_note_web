import style from "../../../pages/TaskPage/show_task_calender_page/ShowTaskCalenderPage.module.css";
import type { FC } from "react";
import { useConnectFetchTasks } from "../../../hooks/react-query/query/useConnectFetchTasks.ts";

const isSameMonth = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

const isSameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear();

interface RenderYearTaskProps {
  date: Date;
  view: "year" | "decade";
}

const RenderYearTask: FC<RenderYearTaskProps> = ({ date, view }) => {
  let startDate: string;

  if (view === "year") {
    startDate = `${date.getFullYear()}-${date.getMonth() + 1}`;
  } else {
    startDate = `${date.getFullYear()}`;
  }

  const mode = view === "decade" ? "year" : "month";
  const { data: tasks = [] } = useConnectFetchTasks(startDate, mode);

  const monthTasks = tasks.filter((task) =>
    view === "year"
      ? isSameMonth(new Date(task.startDate), date)
      : isSameYear(new Date(task.startDate), date),
  );

  if (monthTasks.length === 0) return null;

  const completedTasks = monthTasks.filter((task) => task.complete);
  const pendingTasks = monthTasks.filter((task) => !task.complete);

  return (
    <div className={style.year_task_summary}>
      <div className={style.year_task_badges}>
        {completedTasks.length > 0 && (
          <span className={`${style.badge} ${style.complete}`}>
            ✓ {completedTasks.length}
          </span>
        )}
        {pendingTasks.length > 0 && (
          <span className={`${style.badge} ${style.pending}`}>
            ✕ {pendingTasks.length}
          </span>
        )}
      </div>

      <div className={style.year_progress_bar}>
        <div
          className={style.year_progress_fill}
          style={{
            width: `${(completedTasks.length / monthTasks.length) * 100}%`,
          }}
        />
      </div>

      <span className={style.year_total}>Total {monthTasks.length}</span>
    </div>
  );
};

export default RenderYearTask;

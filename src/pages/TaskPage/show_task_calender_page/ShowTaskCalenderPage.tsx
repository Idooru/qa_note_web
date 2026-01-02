import type { FC } from "react";
import style from "./ShowTaskCalenderPage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { parseDate } from "../../../utils/parse_date.ts";
import "../../../app/index.css";
import { tasks } from "../../../data/task_data.ts";

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const ShowTaskCalenderPage: FC = () => {
  const navigate = useNavigate();

  const handleClickDay = (date: Date) => {
    const { year, month, day } = parseDate(date);
    const newRoute = `${location.pathname.replace(/\/task\/calender$/, "/task")}?year=${year}&month=${month}&day=${day}`;
    navigate(newRoute, { replace: true });
  };

  return (
    <div className={`${style.calender_top} center`}>
      <Calendar
        locale="en-US"
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        className={`${style.task_calendar}`}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) => {
          // month view에서만 표시
          if (view !== "month") return null;

          const filteredTasks = tasks.filter((task) =>
            isSameDay(task.startDate, date),
          );

          if (filteredTasks.length === 0) return null;

          const completedTasks = filteredTasks.filter((task) => task.complete);
          const notCompletedTasks = filteredTasks.filter(
            (task) => !task.complete,
          );

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
        }}
      />
    </div>
  );
};

export default ShowTaskCalenderPage;

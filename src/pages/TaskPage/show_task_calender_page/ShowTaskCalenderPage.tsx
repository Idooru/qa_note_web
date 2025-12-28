import type { FC } from "react";
import style from "./ShowTaskCalenderPage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ShowTaskCalenderPage: FC = () => {
  return (
    <div className={style.calender_top}>
      <Calendar
        locale="en-US"
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        className={style.task_calendar}
      />
    </div>
  );
};

export default ShowTaskCalenderPage;

import type { FC } from "react";
import style from "./ShowTaskCalenderPage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { parseDate } from "../../../utils/parse_date.ts";
import "../../../app/index.css";
import { generateDateQuery } from "../../../utils/generate_date_query.ts";
import RenderYearTask from "../../../components/task/calender/RenderYearTask.tsx";
import RenderMonthTask from "../../../components/task/calender/RenderMonthTask.tsx";
import { useDate } from "../../../hooks/useDate.ts";
import { generateDateString } from "../../../utils/generate_date_string.ts";

const ShowTaskCalenderPage: FC = () => {
  const navigate = useNavigate();
  const { year, month, day, setDate } = useDate();

  const handleClickDay = (date: Date) => {
    const { year, month, day } = parseDate(date);
    const dateString = generateDateString({ year, month, day });
    setDate(new Date(dateString));

    const query = generateDateQuery({ year, month, day });
    const newRoute = `${location.pathname.replace("/task/calender", "/task")}${query}`;
    navigate(newRoute, { replace: true });
  };

  return (
    <div className={`${style.calender_top} center`}>
      <Calendar
        value={generateDateString({ year, month, day })}
        locale="en-US"
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        className={`${style.task_calendar}`}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) => {
          if (view === "year" || view === "decade") {
            return <RenderYearTask date={date} view={view} />;
          }

          if (view == "month") {
            return <RenderMonthTask date={date} />;
          }
          return null;
        }}
      />
    </div>
  );
};

export default ShowTaskCalenderPage;

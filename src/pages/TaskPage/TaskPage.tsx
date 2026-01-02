import { type FC, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaPencil } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import "../common/page.css";
import "../../app/index.css";
import PageTitle from "../../components/common/page_title/PageTitle";
import Button from "../../components/common/button/Button";
import style from "./TaskPage.module.css";
import TaskList from "../../components/task/task_list/TaskList";
import ShowTaskCalenderPage from "./show_task_calender_page/ShowTaskCalenderPage.tsx";
import { useMatch, useNavigate, useOutlet } from "react-router-dom";
import { parseDate } from "../../utils/parse_date.ts";

const TaskPage: FC = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const isCreateTask = useMatch("/task/create-task");
  const isCalendar = useMatch("/task/calender");

  /** ✅ 쿼리 없으면 오늘 날짜로 보정 */
  useEffect(() => {
    if (location.search) return;

    const today = new Date();
    const { year, month, day } = parseDate(today);

    navigate(`${location.pathname}?year=${year}&month=${month}&day=${day}`, {
      replace: true,
    });
  }, [location.search, location.pathname, navigate]);

  return (
    <div className="page">
      <header className={style.task_page_header}>
        <PageTitle
          title={isCalendar ? "Task Calender" : "Task Dashboard"}
          showToday={!isCalendar}
        />
        <div className={`${style.button_area} main_border`}>
          {/* 왼쪽 버튼 */}
          {isCalendar ? (
            <Button
              icon={FaListCheck}
              className={`${style.button_icon} ${style.button}`}
              onClick={() => navigate(`..`)}
            />
          ) : (
            <Button
              icon={SlCalender}
              className={`${style.button_icon} ${style.button}`}
              onClick={() => navigate("calender")}
            />
          )}

          {/* 오른쪽 버튼 */}
          {!isCalendar &&
            (isCreateTask ? (
              <Button
                icon={IoMdClose}
                className={`${style.button_icon} ${style.button}`}
                onClick={() => navigate(`..`)}
              />
            ) : (
              <Button
                icon={FaPencil}
                className={`${style.button_icon} ${style.button}`}
                onClick={() => navigate(`create-task`)}
              />
            ))}
        </div>
      </header>

      {isCalendar && <ShowTaskCalenderPage />}

      {/* create-task 전용 레이아웃 */}
      {isCreateTask ? (
        <main className={style.task_page_body}>
          <section className={style.left}>
            <TaskList />
          </section>
          <section className={style.right}>{outlet}</section>
        </main>
      ) : !isCalendar ? (
        /* 기본 task 페이지 */
        <main>
          <TaskList />
        </main>
      ) : null}
    </div>
  );
};

export default TaskPage;

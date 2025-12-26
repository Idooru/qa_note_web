import type { FC } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "../common/page.css";
import "../../app/index.css";
import PageTitle from "../../components/common/page_title/PageTitle";
import Button from "../../components/common/button/Button";
import style from "./TaskPage.module.css";
import TaskList from "../../components/task/task_list/TaskList";

const TaskPage: FC = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();

  return (
    <>
      <div className="page">
        <header className={style.task_page_header}>
          <PageTitle title="Task Page" />
          {outlet ? (
            <Button
              icon={IoMdClose}
              className={`${style.go_back} ${style.button}`}
              onClick={() => navigate("..")}
            />
          ) : (
            <Button
              icon={IoMdCreate}
              className={`${style.create_task} ${style.button}`}
              onClick={() => navigate("create-task")}
              title="Create Task"
            />
          )}
        </header>

        {outlet ? (
          <main className={style.task_page_body}>
            <section className={style.left}>
              <TaskList />
            </section>
            <section className={style.right}>{outlet}</section>
          </main>
        ) : (
          <main>
            <TaskList />
          </main>
        )}
      </div>
    </>
  );
};

export default TaskPage;

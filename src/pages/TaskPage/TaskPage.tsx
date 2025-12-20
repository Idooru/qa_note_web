import type { FC } from "react";

import "../common/page.css";
import "../../app/index.css";
import PageTitle from "../../components/page_title/PageTitle";
import TaskList from "../../components/task_list/TaskList";

const TaskPage: FC = () => {
  return (
    <>
      <div className="page">
        <header>
          <PageTitle title="Task Page" />
        </header>
        <main>
          <TaskList />
        </main>
      </div>
    </>
  );
};

export default TaskPage;

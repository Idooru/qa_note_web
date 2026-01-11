import { type FC, useReducer } from "react";
import "../../common/page.css";
import "../../../app/index.css";
import style from "./CreateTaskPage.module.css";
import TaskInputArea from "../../../components/task/task_input_area/TaskInputArea.tsx";
import { taskFormReducer } from "./reducer/task_form_reducer.ts";
import Button from "../../../components/common/button/Button.tsx";
import { useConnectCreateTask } from "../../../hooks/react-query/mutation/task/useConnectCreateTask.ts";
import { useDate } from "../../../hooks/useDate.ts";
import { generateDateString } from "../../../utils/generate_date_string.ts";

const CreateTaskPage: FC = () => {
  const [state, dispatch] = useReducer(taskFormReducer, {
    taskType: "",
    taskTitle: "",
  });

  const { year, month, day } = useDate();
  const { mutate: createTask } = useConnectCreateTask();

  const handleCreateButtonClick = () => {
    const { taskTitle, taskType } = state;
    const startDate = generateDateString({ year, month, day });

    if (taskType === "") return alert("테스크의 타입이 선택되지 않았습니다!");
    if (!taskTitle.length) return alert("테스크의 제목이 입력되지 않았습니다!");

    createTask({
      title: taskTitle,
      type: taskType,
      startDate,
    });

    dispatch({ type: "RESET" });
  };

  return (
    <div className="page">
      <header className={style.create_task_page_header_area}>
        <h1 className="main_text_color">Create Task</h1>
      </header>
      <main className={style.create_task_page_main_area}>
        <TaskInputArea
          title={"Task Type"}
          dispatch={dispatch}
          state={state}
        ></TaskInputArea>
        <TaskInputArea
          title={"Task Title"}
          dispatch={dispatch}
          state={state}
        ></TaskInputArea>
        <div className={style.button_area}>
          <Button
            title={"task creation"}
            className={style.create_task_button}
            onClick={handleCreateButtonClick}
          />
        </div>
      </main>
    </div>
  );
};

export default CreateTaskPage;

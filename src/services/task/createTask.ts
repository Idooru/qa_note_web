import type { TaskFormState } from "../../pages/TaskPage/create_task_page/reducer/task_form_reducer.ts";
import type { Task } from "../../data/task_data.ts";
import { v4 as uuidv4 } from "uuid";

type CreateTask = (params: {
  state: TaskFormState;
  createTaskStore: (task: Task) => void;
}) => void;

export const createTask: CreateTask = ({ state, createTaskStore }) => {
  createTaskStore({
    id: uuidv4(),
    title: state.taskTitle,
    type: state.taskType,
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  });

  alert("테스크가 생성되었습니다!");
};

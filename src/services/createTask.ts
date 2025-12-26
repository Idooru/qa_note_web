import type { TaskFormState } from "../pages/TaskPage/create_task_page/reducer/task_form_reducer.ts";
import { type Task } from "../data/task_data.ts";

type CreateTask = (params: {
  state: TaskFormState;
  addTask: (task: Task) => void;
}) => void;

export const createTask: CreateTask = ({ state, addTask }) => {
  addTask({
    title: state.taskTitle,
    type: state.taskType,
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  });

  alert("테스크가 생성되었습니다!");
};

import type { TaskType } from "../../../../data/task_data.ts";

export interface TaskFormState {
  taskType: TaskType;
  taskTitle: string;
}

export type TaskFormAction =
  | { type: "SET_TASK_TYPE"; payload: TaskType }
  | { type: "SET_TASK_TITLE"; payload: string }
  | { type: "RESET" };

export const taskFormReducer = (
  state: TaskFormState,
  action: TaskFormAction,
): TaskFormState => {
  switch (action.type) {
    case "SET_TASK_TYPE":
      return { ...state, taskType: action.payload };

    case "SET_TASK_TITLE":
      return { ...state, taskTitle: action.payload };

    case "RESET":
      return { taskType: "", taskTitle: "" };

    default:
      return state;
  }
};

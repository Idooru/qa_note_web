import { type Task, tasks, type TaskType } from "../data/task_data.ts";
import { create } from "zustand";

interface TaskStore {
  tasks: Task[];
  createTask: (task: Task) => void;
  modifyTaskTitle: (id: number, title: string) => void;
  modifyTaskType: (id: number, type: TaskType) => void;
  modifyTaskStatus: (id: number, complete: boolean) => void;
}

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks,
  createTask: (payload) =>
    set((state) => {
      const lastId = state.tasks.at(-1)?.id ?? 0;

      const newTask: Task = {
        ...payload,
        id: lastId + 1,
      };

      return {
        tasks: [...state.tasks, newTask],
      };
    }),
  modifyTaskTitle: (id, title) =>
    set((state) => {
      return {
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, title } : task,
        ),
      };
    }),
  modifyTaskType: (id, type) =>
    set((state) => {
      return {
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, type } : task,
        ),
      };
    }),
  modifyTaskStatus: (id, complete) =>
    set((state) => {
      return {
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, complete } : task,
        ),
      };
    }),
}));

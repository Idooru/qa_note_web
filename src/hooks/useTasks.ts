import { type Task, tasks, type TaskType } from "../data/task_data.ts";
import { create } from "zustand";

interface TaskStore {
  tasks: Task[];
  createTask: (task: Task) => void;
  modifyTaskTitle: (id: string, title: string) => void;
  modifyTaskType: (id: string, type: TaskType) => void;
  modifyTaskStatus: (id: string, complete: boolean) => void;
  deleteTask: (id: string) => void;
  updateTasks: (newTasks: Task[]) => void;
}

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks,
  createTask: (task) =>
    set((state) => {
      return {
        tasks: [...state.tasks, task],
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
  deleteTask: (id) =>
    set((state) => {
      return { tasks: state.tasks.filter((task) => task.id !== id) };
    }),
  updateTasks: (tasks) =>
    set(() => {
      return { tasks };
    }),
}));

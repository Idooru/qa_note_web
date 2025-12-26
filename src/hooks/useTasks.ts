import { type Task, tasks } from "../data/task_data.ts";
import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const useTaskStore = create<TaskStore>()(
  // persist() // local-storage에 저장
  (set) => ({
    tasks,
    addTask: (payload) =>
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
  }),
  // persist({
  //   name: "task-store", // localStorage key
  // }),
);

import { type Task, tasks, type TaskType } from "../data/task_data.ts";
import { create } from "zustand";
import { parseDate } from "../utils/parse_date.ts";

interface TaskStore {
  tasks: Task[];
  loadTasks: (date: Date) => void;
  createTask: (task: Task) => void;
  modifyTaskTitle: (id: string, title: string) => void;
  modifyTaskType: (id: string, type: TaskType) => void;
  modifyTaskStatus: (id: string, complete: boolean) => void;
  deleteTask: (id: string) => void;
  updateTasks: (newTasks: Task[]) => void;
}

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks,
  loadTasks: (date) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        const today = parseDate(date);
        const startDate = parseDate(task.startDate);

        const todayStr = `${today.year}-${today.month}-${today.day}`;
        const startDateStr = `${startDate.year}-${startDate.month}-${startDate.day}`;

        return todayStr === startDateStr;
      }),
    })),
  createTask: (payload) =>
    set((state) => {
      const lastSeq = state.tasks.at(-1)?.seq ?? 0;

      const newTask: Task = {
        ...payload,
        seq: lastSeq + 1,
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
  deleteTask: (id) =>
    set((state) => {
      return { tasks: state.tasks.filter((task) => task.id !== id) };
    }),
  updateTasks: (tasks) =>
    set(() => {
      return { tasks };
    }),
}));

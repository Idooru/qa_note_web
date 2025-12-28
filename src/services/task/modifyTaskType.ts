import type { TaskType } from "../../data/task_data.ts";

type ModifyTaskType = (params: {
  taskId: string;
  type: TaskType;
  modifyTaskTypeStore: (id: string, type: TaskType) => void;
}) => void;

export const modifyTaskType: ModifyTaskType = ({
  taskId,
  type,
  modifyTaskTypeStore,
}) => {
  modifyTaskTypeStore(taskId, type);

  alert("테스크 타입을 수정하였습니다!");
};

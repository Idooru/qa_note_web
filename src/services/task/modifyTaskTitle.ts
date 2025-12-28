type ModifyTaskTitle = (params: {
  taskId: string;
  title: string;
  modifyTaskTitleStore: (id: string, title: string) => void;
}) => void;

export const modifyTaskTitle: ModifyTaskTitle = ({
  taskId,
  title,
  modifyTaskTitleStore,
}) => {
  modifyTaskTitleStore(taskId, title);

  alert("테스크 제목을 수정하였습니다!");
};

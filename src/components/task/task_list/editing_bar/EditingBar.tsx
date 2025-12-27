import style from "./EditingBar.module.css";
import React, { type FC } from "react";
import "../../../../app/index.css";
import Button from "../../../common/button/Button.tsx";
import { useTaskStore } from "../../../../hooks/useTasks.ts";

interface EditingBarProps {
  isEditingAllIds: boolean;
  checkedTaskIds: Set<number>;
  setIsEditingAllIds: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedTaskIds: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const EditingBar: FC<EditingBarProps> = ({
  isEditingAllIds,
  checkedTaskIds,
  setIsEditingAllIds,
  setCheckedTaskIds,
}) => {
  const modifyTaskStatus = useTaskStore((state) => state.modifyTaskStatus);

  const handleClickDone = () => {
    checkedTaskIds.forEach((id) => modifyTaskStatus(id, true));
    alert("선택한 테스크의 상태를 'done'로 변경하였습니다!");
    setIsEditingAllIds(false);
    setCheckedTaskIds(new Set());
  };

  const handleClickNotDone = () => {
    checkedTaskIds.forEach((id) => modifyTaskStatus(id, false));
    alert("선택한 테스크의 상태를 'not done'로 변경하였습니다!");
    setIsEditingAllIds(false);
    setCheckedTaskIds(new Set());
  };

  return (
    <div className={isEditingAllIds ? style.editing_bar : "display_none"}>
      <div className={style.button_area}>
        <Button
          title={"set done"}
          className={style.set_done_button}
          onClick={handleClickDone}
        />
        <Button
          title={"set not done"}
          className={style.set_not_done_button}
          onClick={handleClickNotDone}
        />
      </div>
    </div>
  );
};

export default EditingBar;

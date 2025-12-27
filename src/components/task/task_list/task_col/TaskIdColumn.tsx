import style from "./TaskIdColumn.module.css";
import React, { type FC } from "react";

interface TaskIdColumnProps {
  isEditingAllIds: boolean;
  setIsEditingAllIds: React.Dispatch<React.SetStateAction<boolean>>;
  isAllChecked: boolean;
  checkAll: (checked: boolean) => void;
}

const TaskIdColumn: FC<TaskIdColumnProps> = ({
  isEditingAllIds,
  setIsEditingAllIds,
  isAllChecked,
  checkAll,
}) => (
  <>
    {isEditingAllIds ? (
      <div className={style.task_id_col}>
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={(e) => checkAll(e.target.checked)}
        />
      </div>
    ) : (
      <p
        className={style.task_id_col}
        onDoubleClick={() => setIsEditingAllIds(true)}
      >
        ID
      </p>
    )}
  </>
);

export default TaskIdColumn;

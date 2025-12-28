import style from "./TaskSeqColumn.module.css";
import React, { type FC } from "react";

interface TaskSeqColumnProps {
  isEditingAllIds: boolean;
  setIsEditingAllIds: React.Dispatch<React.SetStateAction<boolean>>;
  isAllChecked: boolean;
  checkAll: (checked: boolean) => void;
}

const TaskSeqColumn: FC<TaskSeqColumnProps> = ({
  isEditingAllIds,
  setIsEditingAllIds,
  isAllChecked,
  checkAll,
}) => (
  <>
    {isEditingAllIds ? (
      <div className={style.task_seq_col}>
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={(e) => checkAll(e.target.checked)}
        />
      </div>
    ) : (
      <p
        className={style.task_seq_col}
        onDoubleClick={() => setIsEditingAllIds(true)}
      >
        Seq
      </p>
    )}
  </>
);

export default TaskSeqColumn;

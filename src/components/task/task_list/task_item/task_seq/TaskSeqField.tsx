import React, { type FC, useRef } from "react";
import style from "./TaskSeqField.module.css";

interface TaskSeqFieldProps {
  taskSeq: number;
  isEditingAllIds: boolean;
  setIsEditingAllIds: React.Dispatch<React.SetStateAction<boolean>>;
  checkboxRef: React.RefObject<HTMLInputElement | null>;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
}

const TaskSeqField: FC<TaskSeqFieldProps> = ({
  taskSeq,
  isEditingAllIds,
  setIsEditingAllIds,
  checkboxRef,
  isChecked,
  onCheck,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleActiveEdit = () => {
    setIsEditingAllIds(true);
  };

  return (
    <>
      {isEditingAllIds ? (
        <div ref={wrapperRef} className={`${style.task_seq_edit} center`}>
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={isChecked}
            onChange={(e) => onCheck(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : (
        <p className={style.task_seq_display} onDoubleClick={handleActiveEdit}>
          #{taskSeq}
        </p>
      )}
    </>
  );
};

export default TaskSeqField;

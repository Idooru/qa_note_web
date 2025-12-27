import React, { type FC, useRef } from "react";
import style from "./TaskIdField.module.css";

interface TaskIdFieldProps {
  _taskId: number;
  isEditingAllIds: boolean;
  setIsEditingAllIds: React.Dispatch<React.SetStateAction<boolean>>;
  checkboxRef: React.RefObject<HTMLInputElement | null>;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
}

const TaskIdField: FC<TaskIdFieldProps> = ({
  _taskId,
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
        <div ref={wrapperRef} className={`${style.task_id_edit} center`}>
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={isChecked}
            onChange={(e) => onCheck(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : (
        <p className={style.task_id_display} onDoubleClick={handleActiveEdit}>
          #{_taskId}
        </p>
      )}
    </>
  );
};

export default TaskIdField;

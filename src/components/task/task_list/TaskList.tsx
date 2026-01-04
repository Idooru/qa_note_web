import { type FC, useEffect, useRef, useState } from "react";
import TaskItem from "./task_item/TaskItem";
import style from "./TaskList.module.css";
import "../../../app/index.css";
import { useTaskStore } from "../../../hooks/useTasks.ts";
import EditingBar from "./editing_bar/EditingBar.tsx";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import TaskSeqColumn from "./task_col/TaskSeqColumn.tsx";
import { useToday } from "../../../hooks/useToday.ts";
import { useConnectFetchTasks } from "../../../hooks/react-query/query/useConnectFetchTasks.ts";
import { FetchTasksService } from "../../../services/task/fetch-tasks-service.ts";

const TaskList: FC = () => {
  const updateTasks = useTaskStore((state) => state.updateTasks);
  const { year, month, day } = useToday();
  const startDate = `${year}-${month}-${day}`;

  const service = new FetchTasksService();
  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useConnectFetchTasks(service, startDate, "full");

  const [isEditingAllIds, setIsEditingAllIds] = useState(false); // 아이디를 전부 체크박스로 전환하는 상태
  const [checkedTaskIds, setCheckedTaskIds] = useState<Set<string>>(new Set()); // 체크박스를 전부 체크하는 상태

  const listRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef<number>(tasks.length);

  useEffect(() => {
    const prevLength = prevLengthRef.current;
    const currentLength = tasks.length;

    if (currentLength > prevLength) {
      listRef.current?.scrollTo({
        top: listRef.current?.scrollHeight,
        behavior: "smooth",
      });
    }

    prevLengthRef.current = currentLength;
  }, [tasks.length]);

  useEffect(() => {
    if (!isEditingAllIds) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsEditingAllIds(false);
        setCheckedTaskIds(new Set()); // 선택 해제까지 원하면
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditingAllIds]);

  const checkAll = (checked: boolean) => {
    if (checked) {
      setCheckedTaskIds(new Set(tasks.map((task) => task.id) as string[]));
    } else {
      setCheckedTaskIds(new Set());
    }
  };

  const handleCheckOne = (taskId: string, checked: boolean) => {
    setCheckedTaskIds((prev) => {
      const next = new Set(prev);

      if (checked) {
        next.add(taskId);
      } else {
        next.delete(taskId);
      }

      return next;
    });
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    // 1. 배열 복사
    const reorderedTasks = Array.from(tasks);

    // 2. 순서 변경
    const [moved] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, moved);

    // 3. seq만 다시 부여 (1부터)
    const tasksWithReorderedIds = reorderedTasks.map((task, index) => ({
      ...task,
      seq: index + 1,
    }));

    updateTasks(tasksWithReorderedIds);
  };

  /* 상태 처리 */
  if (isLoading)
    return (
      <div className={`${style.fetching_area} center`}>
        <h1>Loading...</h1>
      </div>
    );

  if (isError)
    return (
      <div className={`${style.fetching_area} center`}>
        <h1>Failed to load tasks</h1>
      </div>
    );

  return (
    <div ref={containerRef}>
      <div className={`${style.task_list_header} main_border`}>
        <TaskSeqColumn
          isEditingAllIds={isEditingAllIds}
          setIsEditingAllIds={setIsEditingAllIds}
          isAllChecked={checkedTaskIds.size === tasks.length}
          checkAll={checkAll}
        />
        <p className={`${style.task_title_col}`}>Title</p>
        <p className={`${style.task_type_col}`}>Type</p>
        <p className={`${style.task_start_date_col}`}>Start Date</p>
        <p className={`${style.task_complete_col}`}>Status</p>
        <p className={`${style.task_scroll_col}`}></p>
      </div>
      {tasks.length ? (
        <div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={"task_list"}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <ul
                    ref={listRef}
                    className={`${style.task_list_body} ${isEditingAllIds ? style.isEditing : ""}`}
                  >
                    {tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskItem
                              task={task}
                              isDragging={snapshot.isDragging}
                              isEditingAllIds={isEditingAllIds}
                              setIsEditingAllIds={setIsEditingAllIds}
                              isChecked={checkedTaskIds.has(task.id)}
                              onCheck={(checked) =>
                                handleCheckOne(task.id, checked)
                              }
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <EditingBar
            isEditingAllIds={isEditingAllIds}
            checkedTaskIds={checkedTaskIds}
            setIsEditingAllIds={setIsEditingAllIds}
            setCheckedTaskIds={setCheckedTaskIds}
          />
        </div>
      ) : (
        <h2 className={`${style.no_tasks} sub_text_color`}>No tasks added</h2>
      )}
    </div>
  );
};

export default TaskList;

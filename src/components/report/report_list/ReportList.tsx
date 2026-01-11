import type { FC } from "react";
import { useToday } from "../../../hooks/useToday.ts";
import { useConnectFetchTasks } from "../../../hooks/react-query/query/useConnectFetchTasks.ts";

const ReportList: FC = () => {
  const { year, month, day } = useToday();
  const startDate = `${year}-${month}-${day}`;

  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useConnectFetchTasks(startDate, "full");

  console.log(tasks);

  return <div></div>;
};

export default ReportList;

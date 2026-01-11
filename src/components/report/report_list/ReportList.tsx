import type { FC } from "react";
import { useConnectFetchTasks } from "../../../hooks/react-query/query/useConnectFetchTasks.ts";
import { useDate } from "../../../hooks/useDate.ts";
import { generateDateString } from "../../../utils/generate_date_string.ts";

const ReportList: FC = () => {
  const { year, month, day } = useDate();
  const startDate = generateDateString({ year, month, day });

  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useConnectFetchTasks(startDate, "full");

  return <div></div>;
};

export default ReportList;

import { Navigate, Outlet, useMatch } from "react-router-dom";
import { useTodayQuery } from "../../../hooks/useTodayQuery.ts";

const TaskDateGuard = () => {
  const todayQuery = useTodayQuery();
  const isCalender = useMatch("/task/calender");

  if (todayQuery !== "" && !isCalender) {
    return <Navigate to={`${todayQuery}`} replace />;
  }

  return <Outlet />;
};

export default TaskDateGuard;

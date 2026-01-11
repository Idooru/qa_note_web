import { Navigate, Outlet, useMatch } from "react-router-dom";
import { useDateQuery } from "../../../hooks/useDateQuery.ts";

const TaskDateGuard = () => {
  const todayQuery = useDateQuery();
  const isCalender = useMatch("/task/calender");

  if (todayQuery !== "" && !isCalender) {
    return <Navigate to={`${todayQuery}`} replace />;
  }

  return <Outlet />;
};

export default TaskDateGuard;

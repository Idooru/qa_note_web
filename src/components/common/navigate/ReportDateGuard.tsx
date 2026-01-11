import { Navigate, Outlet } from "react-router-dom";
import { useTodayQuery } from "../../../hooks/useTodayQuery.ts";

const ReportDateGuard = () => {
  const todayQuery = useTodayQuery();

  if (todayQuery !== "") {
    return <Navigate to={`${todayQuery}`} replace />;
  }

  return <Outlet />;
};

export default ReportDateGuard;

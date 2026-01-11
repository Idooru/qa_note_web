import { Navigate, Outlet } from "react-router-dom";
import { useDateQuery } from "../../../hooks/useDateQuery.ts";

const ReportDateGuard = () => {
  const todayQuery = useDateQuery();

  if (todayQuery !== "") {
    return <Navigate to={`${todayQuery}`} replace />;
  }

  return <Outlet />;
};

export default ReportDateGuard;

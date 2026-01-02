import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";

const TaskDateGuard = () => {
  const location = useLocation();
  const [params] = useSearchParams();

  const hasDate =
    params.get("year") && params.get("month") && params.get("day");

  if (!hasDate) {
    const now = new Date();
    const query = `?year=${now.getFullYear()}&month=${now.getMonth() + 1}&day=${now.getDate()}`;

    return <Navigate to={`${location.pathname}${query}`} replace />;
  }

  return <Outlet />;
};

export default TaskDateGuard;

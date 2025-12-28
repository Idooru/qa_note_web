import { Navigate, useLocation } from "react-router-dom";
import { parseDate } from "../../../utils/parse_date.ts";

const TaskIndexRedirect = () => {
  const { search } = useLocation();

  // ✅ 이미 날짜가 있으면 사용자의 선택을 존중
  if (search) return null;

  const today = new Date();
  const { year, month, day } = parseDate(today);

  return (
    <Navigate to={`/task?year=${year}&month=${month}&day=${day}`} replace />
  );
};

export default TaskIndexRedirect;

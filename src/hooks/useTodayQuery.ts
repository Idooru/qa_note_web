import { useLocation, useSearchParams } from "react-router-dom";

export const useTodayQuery = () => {
  const location = useLocation();
  const [params] = useSearchParams();

  const hasDate =
    params.get("year") !== null &&
    params.get("month") !== null &&
    params.get("day") !== null;

  if (!hasDate) {
    const now = new Date();
    const query = `?year=${now.getFullYear()}&month=${now.getMonth() + 1}&day=${now.getDate()}`;

    return `${location.pathname}${query}`;
  }

  return "";
};

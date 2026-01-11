import { useLocation, useSearchParams } from "react-router-dom";
import { generateDateQuery } from "../utils/generate_date_query.ts";
import { formatDate } from "../utils/format_date.ts";

export const useTodayQuery = () => {
  const location = useLocation();
  const [params] = useSearchParams();

  const hasDate =
    params.get("year") !== null &&
    params.get("month") !== null &&
    params.get("day") !== null;

  if (!hasDate) {
    const now = new Date();
    const query = generateDateQuery({
      year: now.getFullYear(),
      month: formatDate(now.getMonth() + 1),
      day: formatDate(now.getDate()),
    });

    return `${location.pathname}${query}`;
  }

  return "";
};

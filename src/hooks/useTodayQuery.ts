import { useLocation, useSearchParams } from "react-router-dom";
import { generateDateQuery } from "../utils/generate_date_query.ts";

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
      month: now.getMonth() + 1,
      day: now.getDate(),
    });

    return `${location.pathname}${query}`;
  }

  return "";
};

import { useLocation, useSearchParams } from "react-router-dom";
import { generateDateQuery } from "../utils/generate_date_query.ts";
import { useDate } from "./useDate.ts";

export const useDateQuery = () => {
  const location = useLocation();
  const [params] = useSearchParams();
  const { year, month, day } = useDate();

  const hasDate =
    params.get("year") !== null &&
    params.get("month") !== null &&
    params.get("day") !== null;

  if (!hasDate) {
    const query = generateDateQuery({
      year,
      month,
      day,
    });

    return `${location.pathname}${query}`;
  }

  return "";
};

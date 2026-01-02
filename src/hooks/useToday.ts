import { useSearchParams } from "react-router-dom";

export const useToday = () => {
  const [params] = useSearchParams();

  const year = params.get("year");
  const month = params.get("month");
  const day = params.get("day");

  return { year, month, day };
};

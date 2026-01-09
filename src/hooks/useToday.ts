import { useSearchParams } from "react-router-dom";

export const useToday = () => {
  const [params] = useSearchParams();

  const year = params.get("year") || "none year";
  const month = params.get("month") || "none month";
  const day = params.get("day") || "none day";

  return { year, month, day };
};

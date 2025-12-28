import { useSearchParams } from "react-router-dom";

export const useToday = () => {
  const [params] = useSearchParams();

  const year = Number(params.get("year"));
  const month = Number(params.get("month"));
  const day = Number(params.get("day"));

  return { year, month, day };
};

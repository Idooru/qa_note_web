import { formatDate } from "./format_date.ts";

export const parseDate = (date: Date) => {
  const year = date.getFullYear();
  const month = formatDate(date.getMonth() + 1);
  const day = formatDate(date.getDate());

  return { year, month, day };
};

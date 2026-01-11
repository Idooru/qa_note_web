import { useContext } from "react";
import { DateContext } from "../context/date/DateContext.tsx";

export const useDate = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDate must be used within DateProvider");
  }
  return context;
};

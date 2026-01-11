import { createContext } from "react";

export interface DateState {
  year: string;
  month: string;
  day: string;
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
  setDay: (day: string) => void;
  setDate: (date: Date) => void;
}

export const DateContext = createContext<DateState | null>(null);

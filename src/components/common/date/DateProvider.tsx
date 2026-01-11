import React, { useState } from "react";
import { DateContext } from "../../../context/date/DateContext";
import { formatDate } from "../../../utils/format_date.ts";
import { generateDateString } from "../../../utils/generate_date_string.ts";

interface DateProviderProps {
  children: React.ReactNode;
}

const setToday = () => {
  if (localStorage.getItem("date") == null) {
    return new Date();
  } else {
    const item = localStorage.getItem("date");
    if (item === null) return new Date();

    const date = JSON.parse(item).date;
    return new Date(date);
  }
};

const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const today = setToday();

  const [year, setYear] = useState(String(today.getFullYear()));
  const [month, setMonth] = useState(formatDate(today.getMonth() + 1));
  const [day, setDay] = useState(formatDate(today.getDate()));

  const setDate = (date: Date) => {
    const year = String(date.getFullYear());
    const month = formatDate(date.getMonth() + 1);
    const day = formatDate(date.getDate());

    localStorage.setItem(
      "date",
      JSON.stringify({
        saveTime: Date.now(),
        date: generateDateString({ year, month, day }),
      }),
    );

    setYear(year);
    setMonth(month);
    setDay(day);
  };

  return (
    <DateContext.Provider
      value={{
        year,
        month,
        day,
        setYear,
        setMonth,
        setDay,
        setDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;

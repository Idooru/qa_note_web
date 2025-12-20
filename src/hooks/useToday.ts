import { useEffect, useState } from "react";

export const useToday = () => {
  const [today, setToday] = useState(() => new Date());

  useEffect(() => {
    const updateAtMidnight = () => {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // 다음날
        0,
        0,
        0,
        0
      );

      const timeout = nextMidnight.getTime() - now.getTime();

      setTimeout(() => {
        setToday(new Date());
        updateAtMidnight(); // 다음 자정 예약
      }, timeout);
    };

    updateAtMidnight();
  }, []);

  return today;
};

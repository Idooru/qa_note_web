import { useEffect } from "react";
import { msUntilMidnight } from "../utils/ms_until_midnight.ts";

export const useMidnightStorageReset = () => {
  useEffect(() => {
    let intervalId: number;

    const timeoutId = window.setTimeout(() => {
      // 🔥 오직 자정에만 실행
      localStorage.clear();

      // 이후 매일 24시간마다 반복
      intervalId = window.setInterval(
        () => {
          localStorage.clear();
        },
        24 * 60 * 60 * 1000,
      );
    }, msUntilMidnight());

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);
};

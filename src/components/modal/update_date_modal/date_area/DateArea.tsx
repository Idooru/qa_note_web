import { type FC, type ReactNode } from "react";
import style from "./DateArea.module.css";

interface DateAreaProps {
  children: ReactNode;
}

const DateArea: FC<DateAreaProps> = ({ children }) => {
  return <div className={style.date_area}>{children}</div>;
};

export default DateArea;

import type { FC } from "react";
import { useToday } from "../../../hooks/useToday";
import "../../../app/index.css";
import style from "./PageTitle.module.css";

interface PageTitleProps {
  title: string;
  showToday: boolean;
}

const PageTitle: FC<PageTitleProps> = ({ title, showToday }) => {
  const today = useToday();

  return (
    <div className={`${style.title} main_border`}>
      <h1 className="main_text_color">{title}</h1>
      {showToday && (
        <div
          className={`${style.today_date} sub_text_color`}
        >{`${today.toLocaleDateString()} ${today.toLocaleDateString("ko-KR", {
          weekday: "short",
        })}`}</div>
      )}
    </div>
  );
};

export default PageTitle;

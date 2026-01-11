import type { FC } from "react";
import { useDate } from "../../../hooks/useDate.ts";
import style from "./PageTitle.module.css";
import "../../../app/index.css";

interface PageTitleProps {
  title: string;
  showToday: boolean;
}

const PageTitle: FC<PageTitleProps> = ({ title, showToday }) => {
  const { year, month, day } = useDate();

  return (
    <div className={`${style.title} main_border`}>
      <h1 className="main_text_color">{title}</h1>
      {showToday && (
        <div
          className={`${style.today_date} sub_text_color`}
        >{`${year}. ${month}. ${day}`}</div>
      )}
    </div>
  );
};

export default PageTitle;

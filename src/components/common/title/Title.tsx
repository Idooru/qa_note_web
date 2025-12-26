import type { FC } from "react";
import "../../../app/index.css";
import style from "./Title.module.css";

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <div id={style.title_area}>
      <h1 className="main_text_color">{text}</h1>
    </div>
  );
};

export default Title;

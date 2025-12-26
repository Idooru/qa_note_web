import type { FC } from "react";
import type { IconType } from "react-icons";
import style from "./Button.module.css";
import "../../../app/index.css";

interface ButtonProps {
  className?: string;
  icon?: IconType;
  title?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, title, onClick, icon: Icon }) => {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      <span className={style.button_icon_area}>
        <span className={`${style.button_icon}`}>{Icon && <Icon />}</span>
      </span>
      {title ? (
        <span className={`${style.button_text} center`}>{title}</span>
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;

import type { FC } from "react";
import style from "./NumberCard.module.css";

interface NumberCardProps {
  number: string;
}

const NumberCard: FC<NumberCardProps> = ({ number }) => {
  return <div className={`${style.number_card} center`}>{number}</div>;
};

export default NumberCard;

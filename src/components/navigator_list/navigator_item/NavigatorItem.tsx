import type { FC } from "react";
import style from "./NavigatorItem.module.css";
import { useNavigate } from "react-router-dom";

export interface NavItems {
  title: string;
  route: string;
  isSelected: boolean;
}

export interface NavigatorItemProps {
  item: NavItems;
}

const NavigatorItem: FC<NavigatorItemProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClickNav = () => {
    navigate(item.route);
  };

  return (
    <li
      onClick={handleClickNav}
      className={`${style.navigator_item} ${
        item.isSelected ? style.selected_item : ""
      }`}
    >
      {item.title}
    </li>
  );
};

export default NavigatorItem;

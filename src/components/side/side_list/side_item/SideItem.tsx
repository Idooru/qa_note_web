import type { FC } from "react";
import style from "./SideItem.module.css";
import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";

export interface NavItems {
  title: string;
  route: string;
  isSelected: boolean;
  icon?: IconType;
}

export interface NavigatorItemProps {
  item: NavItems;
}

const SideItem: FC<NavigatorItemProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClickNav = () => {
    navigate(item.route);
  };

  const Icon = item.icon;

  return (
    <li
      onClick={handleClickNav}
      className={`${style.navigator_item} ${
        item.isSelected ? style.selected_item : ""
      }`}
    >
      <span className={style.icon_area}>{Icon && <Icon size={20} />}</span>
      {item.title}
    </li>
  );
};

export default SideItem;

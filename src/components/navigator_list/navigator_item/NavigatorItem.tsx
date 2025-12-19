import type { FC } from "react";
import style from "./NavigatorItem.module.css";
import type { NavItems } from "../../../app/page";

export interface NavigatorItemProps {
  item: NavItems;
  index: number;
  setNavItemsFn: React.Dispatch<React.SetStateAction<NavItems[]>>;
}

const NavigatorItem: FC<NavigatorItemProps> = ({
  item,
  index,
  setNavItemsFn,
}) => {
  const handleClickNav = () => {
    setNavItemsFn((navItems) =>
      navItems.map((navItem, i) => ({
        ...navItem,
        isSelected: i === index, // 클릭한 것만 true
      }))
    );
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

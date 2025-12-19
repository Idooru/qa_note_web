import type { FC } from "react";
import "../../app/index.css";
import type { NavItems } from "../../app/page";
import NavigatorItem from "./navigator_item/NavigatorItem";
import style from "./NavigatorList.module.css";

interface NavigatorListProps {
  navItems: NavItems[];
  setNavItems: React.Dispatch<React.SetStateAction<NavItems[]>>;
}

const NavigatorList: FC<NavigatorListProps> = ({ navItems, setNavItems }) => {
  return (
    <div id={style.navigator_area}>
      <h3 id={style.nav_main_text} className="sub_text_color">
        Navigator
      </h3>
      <ul>
        {navItems.map((item, index) => (
          <NavigatorItem
            key={item.title}
            item={item}
            index={index}
            setNavItemsFn={setNavItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavigatorList;

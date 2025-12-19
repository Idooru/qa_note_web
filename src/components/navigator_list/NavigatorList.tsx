import { type FC } from "react";
import "../../app/index.css";
import NavigatorItem, { type NavItems } from "./navigator_item/NavigatorItem";
import style from "./NavigatorList.module.css";
import { useLocation } from "react-router-dom";

const _navItems: Array<NavItems> = [
  { title: "Task", route: "/task", isSelected: true },
  { title: "Report", route: "/report", isSelected: false },
  { title: "Summary", route: "/summary", isSelected: false },
  { title: "Memo", route: "/memo", isSelected: false },
  { title: "Idea", route: "/idea", isSelected: false },
];
const NavigatorList: FC = () => {
  const location = useLocation();

  const navItems = _navItems.map((item) => ({
    ...item,
    isSelected: location.pathname === item.route,
  }));

  return (
    <div id={style.navigator_area}>
      <h3 id={style.nav_main_text} className="sub_text_color">
        Navigator
      </h3>
      <ul>
        {navItems.map((item) => (
          <NavigatorItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default NavigatorList;

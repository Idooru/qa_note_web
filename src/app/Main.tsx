import type { FC } from "react";
import "./index.css";
import type { NavItems } from "./page";

interface MainProps {
  navItems: NavItems[];
}

const Main: FC<MainProps> = ({ navItems }) => {
  const title = navItems.find((navItem) => navItem.isSelected)!.title;

  return (
    <main id="main" className="margin_10">
      <h1>{title}</h1>
    </main>
  );
};

export default Main;

import Title from "../components/title/Title";
import NavigatorList from "../components/navigator_list/NavigatorList";
import "./index.css";
import type { FC } from "react";
import type { NavItems } from "./page";

interface SideProps {
  navItems: NavItems[];
  setNavItems: React.Dispatch<React.SetStateAction<NavItems[]>>;
}

const Side: FC<SideProps> = ({ navItems, setNavItems }) => (
  <nav id="nav">
    <Title text={"QA Note"} />
    <NavigatorList navItems={navItems} setNavItems={setNavItems} />
  </nav>
);

export default Side;

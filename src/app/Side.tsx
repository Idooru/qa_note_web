import Title from "../components/common/title/Title";
import NavigatorList from "../components/nav/navigator_list/NavigatorList";
import "./index.css";
import type { FC } from "react";

const Side: FC = () => (
  <nav id="nav">
    <Title text={"QA Note"} />
    <NavigatorList />
  </nav>
);

export default Side;

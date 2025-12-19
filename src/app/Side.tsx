import Title from "../components/title/Title";
import NavigatorList from "../components/navigator_list/NavigatorList";
import "./index.css";
import type { FC } from "react";

const Side: FC = () => (
  <nav id="nav">
    <Title text={"QA Note"} />
    <NavigatorList />
  </nav>
);

export default Side;

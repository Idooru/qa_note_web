import Title from "../components/common/title/Title";
import SideList from "../components/side/side_list/SideList";
import "./index.css";
import React, { type FC } from "react";
import FloatingButton from "../components/side/floating_button/FloatingButton.tsx";

interface SideProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Side: FC<SideProps> = ({ setIsModal }) => (
  <nav id="side">
    <Title text={"QA Note"} />
    <SideList />
    <FloatingButton setIsModal={setIsModal} />
  </nav>
);

export default Side;

import { useState } from "react";
import "./index.css";
import Main from "./Main";
import Side from "./Side";

export interface NavItems {
  title: string;
  isSelected: boolean;
}

const _navItems: Array<NavItems> = [
  { title: "Task", isSelected: true },
  { title: "Report", isSelected: false },
  { title: "Summary", isSelected: false },
  { title: "Memo", isSelected: false },
  { title: "Idea", isSelected: false },
];

const Page = () => {
  const [navItems, setNavItems] = useState(_navItems);
  return (
    <div id="page">
      <Side navItems={navItems} setNavItems={setNavItems} />
      <Main navItems={navItems} />
    </div>
  );
};

export default Page;

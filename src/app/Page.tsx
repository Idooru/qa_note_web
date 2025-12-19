import type { FC, ReactNode } from "react";
import "./index.css";

interface PageProps {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <main id="page" className="margin_10">
      {children}
    </main>
  );
};

export default Page;

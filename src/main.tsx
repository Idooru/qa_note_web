import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Page from "./app/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);

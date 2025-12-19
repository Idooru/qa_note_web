import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Main from "./app/Main";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>
);

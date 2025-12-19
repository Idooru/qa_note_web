import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Page from "./Page";
import Side from "./Side";
import Task from "../pages/Task/Task";
import Report from "../pages/Report/Report";
import Summary from "../pages/Summary/Summary";
import Memo from "../pages/Memo/Memo";
import Idea from "../pages/Idea/Idea";

const Main = () => {
  return (
    <div id="main">
      <Side />
      <Page>
        <Routes>
          <Route path="/" element={<Navigate to="/task" replace />} />
          <Route path="/task" element={<Task />} />
          <Route path="/report" element={<Report />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/idea" element={<Idea />} />
        </Routes>
      </Page>
    </div>
  );
};

export default Main;

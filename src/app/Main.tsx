import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Page from "./Page";
import Side from "./Side";
import TaskPage from "../pages/TaskPage/TaskPage";
import Summary from "../pages/Summary/Summary";
import Memo from "../pages/Memo/Memo";
import Idea from "../pages/Idea/Idea";
import CreateTaskPage from "../pages/TaskPage/create_task_page/CreateTaskPage";
import ShowTaskCalenderPage from "../pages/TaskPage/show_task_calender_page/ShowTaskCalenderPage.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import TaskDateGuard from "../components/common/navigate/TaskDateGuard.tsx";
import { useState } from "react";
import UpdateDateModal from "../components/modal/update_date_modal/UpdateDateModal.tsx";
import ReportPage from "../pages/ReportPage/ReportPage.tsx";
import ReportDateGuard from "../components/common/navigate/ReportDateGuard.tsx";
import DateProvider from "../components/common/date/DateProvider.tsx";
import { useMidnightStorageReset } from "../hooks/useMidnightStorageReset.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      staleTime: 0, // 항상 stale
      refetchOnMount: true, // 마운트 시 항상 재요청
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: false,
    },
  },
});

const Main = () => {
  const [isModal, setIsModal] = useState(false);
  useMidnightStorageReset();

  return (
    <div id="main">
      <QueryClientProvider client={queryClient}>
        <DateProvider>
          <Side setIsModal={setIsModal} />
          <Page>
            <Routes>
              <Route path="/" element={<Navigate to="/task" replace />} />

              <Route path="/task" element={<TaskDateGuard />}>
                <Route path="" element={<TaskPage />}>
                  <Route path="create-task" element={<CreateTaskPage />} />
                  <Route path="calender" element={<ShowTaskCalenderPage />} />
                </Route>
              </Route>

              <Route path="/report" element={<ReportDateGuard />}>
                <Route path="" element={<ReportPage />}></Route>
              </Route>

              <Route path="/summary" element={<Summary />} />
              <Route path="/memo" element={<Memo />} />
              <Route path="/idea" element={<Idea />} />
            </Routes>
          </Page>
          {isModal && <UpdateDateModal onClose={() => setIsModal(false)} />}
        </DateProvider>
      </QueryClientProvider>
    </div>
  );
};

export default Main;

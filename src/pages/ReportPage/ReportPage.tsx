import type { FC } from "react";
import "../common/page.css";
import PageTitle from "../../components/common/page_title/PageTitle.tsx";
import ReportList from "../../components/report/report_list/ReportList.tsx";

const ReportPage: FC = () => {
  return (
    <div className="page">
      <header>
        <PageTitle title={"Report Dashboard"} showToday={true} />
      </header>
      <main>
        <ReportList />
      </main>
    </div>
  );
};

export default ReportPage;

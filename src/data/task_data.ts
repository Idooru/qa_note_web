import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  seq?: number;
  title: string;
  type:
    | ""
    | "regression test"
    | "jira done"
    | "report"
    | "update"
    | "test case"
    | "etc";
  startDate: string;
  complete: boolean;
}

export type TaskType = Task["type"];

export const taskTypes: TaskType[] = [
  "regression test",
  "jira done",
  "report",
  "update",
  "test case",
  "etc",
];

export const tasks: Task[] = [
  {
    id: uuidv4(),
    seq: 1,
    title: "Weekly meeting Agenda",
    type: "update",
    startDate: new Date().toLocaleTimeString(),
    complete: true,
  },
  {
    id: uuidv4(),
    seq: 2,
    title: "견적서 작성, 전송 관련 테스트 케이스 작성",
    type: "test case",
    startDate: new Date().toLocaleTimeString(),
    complete: true,
  },
  {
    id: uuidv4(),
    seq: 3,
    title: "app beta 회원가입 되는지 확인",
    type: "regression test",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 4,
    title: "상담 예약 부터 결제, 리뷰 작성까지 버그 확인",
    type: "regression test",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 5,
    title: "작성한 테스트 케이스 google docs 업데이트",
    type: "update",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 6,
    title: "수술 일정 제안 날짜 중복되는 버그 리포트",
    type: "report",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 7,
    title:
      "이번주 qa 업무 내용 google docs로 작성 후 도윤님께 공유 (퇴근전까지)",
    type: "update",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 8,
    title: "jira board complete => done",
    type: "jira done",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 9,
    title: "Weekly meeting Agenda",
    type: "update",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 10,
    title: "견적서 작성, 전송 관련 테스트 케이스 작성",
    type: "test case",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 11,
    title: "app beta 회원가입 되는지 확인",
    type: "regression test",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 12,
    title: "상담 예약 부터 결제, 리뷰 작성까지 버그 확인",
    type: "regression test",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 13,
    title: "작성한 테스트 케이스 google docs 업데이트",
    type: "update",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 14,
    title: "수술 일정 제안 날짜 중복되는 버그 리포트",
    type: "report",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 15,
    title:
      "이번주 qa 업무 내용 google docs로 작성 후 도윤님께 공유 (퇴근전까지)",
    type: "update",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
  {
    id: uuidv4(),
    seq: 16,
    title: "jira board complete => done",
    type: "jira done",
    startDate: new Date().toLocaleTimeString(),
    complete: false,
  },
];

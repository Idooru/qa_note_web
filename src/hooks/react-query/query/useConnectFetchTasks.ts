import type { Task } from "../../../data/task_data.ts";
import { useQuery } from "@tanstack/react-query";
import {
  type FetchTasksMode,
  FetchTasksService,
} from "../../../services/task/fetch-tasks-service.ts";
import type { AxiosError } from "axios";

export interface FetchTasksResponse {
  message: string;
  result: Task[];
}

export const useConnectFetchTasks = (
  service: FetchTasksService,
  startDate: string,
  mode: FetchTasksMode,
) => {
  return useQuery<FetchTasksResponse, AxiosError, Task[]>({
    queryKey: [FetchTasksService.QUERY_KEY, startDate, mode],
    queryFn: () => service.fetchTasks(startDate, mode),
    select: (data) => data.result,
  });
};

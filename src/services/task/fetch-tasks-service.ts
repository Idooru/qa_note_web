import { NetworkService } from "../common/network-service.ts";
import type { FetchTasksResponse } from "../../hooks/react-query/query/useConnectFetchTasks.ts";

export type FetchTasksMode = "year" | "month" | "full";

export class FetchTasksService extends NetworkService {
  public static readonly QUERY_KEY = "FETCH_TASKS";

  public async fetchTasks(
    startDate: string,
    mode: FetchTasksMode,
  ): Promise<FetchTasksResponse> {
    const res = await this.axiosInstance.get<FetchTasksResponse>(
      `/api/v1/task?start-date=${startDate}&mode=${mode}`,
    );

    return res.data;
  }
}

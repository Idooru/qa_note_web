import { NetworkService } from "../common/network-service.ts";
import type { ModifyTaskStatusResponse } from "../../hooks/react-query/mutation/task/useConnectModifyTaskStatus.ts";
import type { QueryClient } from "@tanstack/react-query";
import { FetchTasksService } from "./fetch-tasks-service.ts";
import type { AxiosError } from "axios";
import type {
  DeleteTaskRequest,
  DeleteTaskResponse,
} from "../../hooks/react-query/mutation/task/useConnectDeleteTask.ts";

export class DeleteTaskService extends NetworkService {
  public static readonly MUTATION_KEY = "DELETE_TASK";

  public async deleteTask(
    body: DeleteTaskRequest,
  ): Promise<DeleteTaskResponse> {
    const res = await this.axiosInstance.delete<DeleteTaskResponse>(
      "/api/v1/task",
      { data: body },
    );

    return res.data;
  }

  private async updateSequence(startDate: string): Promise<void> {
    await this.axiosInstance.patch(
      `/api/v1/task/after-delete/start-date/${startDate}`,
    );
  }

  public async handleSuccess(
    data: ModifyTaskStatusResponse,
    queryClient: QueryClient,
    startDate: string,
  ): Promise<void> {
    const { message } = data;

    await this.updateSequence(startDate);

    await queryClient.invalidateQueries({
      queryKey: [FetchTasksService.QUERY_KEY],
    });

    alert(message);
  }

  public handleError(err: AxiosError): void {
    const defaultMessage = super.branchDefaultNetworkError(err);
    if (defaultMessage !== "")
      return alert(`기본 오류 실패: ${defaultMessage}`);
  }
}

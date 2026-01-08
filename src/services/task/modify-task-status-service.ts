import { NetworkService } from "../common/network-service.ts";
import type { QueryClient } from "@tanstack/react-query";
import { FetchTasksService } from "./fetch-tasks-service.ts";
import type { AxiosError } from "axios";
import type {
  ModifyTaskStatusRequest,
  ModifyTaskStatusResponse,
} from "../../hooks/react-query/mutation/task/useConnectModifyTaskStatus.ts";

export class ModifyTaskStatusService extends NetworkService {
  public static MUTATION_KEY = "MODIFY_TASK_STATUS";

  public async modifyTaskStatus(
    body: ModifyTaskStatusRequest,
  ): Promise<ModifyTaskStatusResponse> {
    const res = await this.axiosInstance.patch<ModifyTaskStatusResponse>(
      "/api/v1/task/status",
      body,
    );

    return res.data;
  }

  public async handleSuccess(
    data: ModifyTaskStatusResponse,
    queryClient: QueryClient,
  ): Promise<void> {
    const { message } = data;

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

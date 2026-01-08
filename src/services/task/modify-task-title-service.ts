import { NetworkService } from "../common/network-service.ts";
import type { QueryClient } from "@tanstack/react-query";
import { FetchTasksService } from "./fetch-tasks-service.ts";
import type { AxiosError } from "axios";
import type {
  ModifyTaskTitleRequest,
  ModifyTaskTitleResponse,
} from "../../hooks/react-query/mutation/task/useConnectModifyTaskTitle.ts";

export class ModifyTaskTitleService extends NetworkService {
  public static readonly MUTATION_KEY = "MODIFY_TASK_TITLE";

  public async modifyTaskTitle(
    body: ModifyTaskTitleRequest,
  ): Promise<ModifyTaskTitleResponse> {
    const res = await this.axiosInstance.patch<ModifyTaskTitleResponse>(
      "/api/v1/task/title",
      body,
    );

    return res.data;
  }

  public async handleSuccess(
    data: ModifyTaskTitleResponse,
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

    const validationMessage = super.branchValidationError(err);
    if (validationMessage !== "")
      return alert(`유효성 검사 실패: ${validationMessage}`);
  }
}

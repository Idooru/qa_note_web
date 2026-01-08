import { NetworkService } from "../common/network-service.ts";
import type { QueryClient } from "@tanstack/react-query";
import { FetchTasksService } from "./fetch-tasks-service.ts";
import type { AxiosError } from "axios";
import type {
  ModifyTaskTypeRequest,
  ModifyTaskTypeResponse,
} from "../../hooks/react-query/mutation/task/useConnectModifyTaskType.ts";

export class ModifyTaskTypeService extends NetworkService {
  public static MUTATION_KEY = "MODIFY_TASK_TYPE";

  public async modifyTaskType(
    body: ModifyTaskTypeRequest,
  ): Promise<ModifyTaskTypeResponse> {
    const res = await this.axiosInstance.patch<ModifyTaskTypeResponse>(
      "/api/v1/task/type",
      body,
    );

    return res.data;
  }

  public async handleSuccess(
    data: ModifyTaskTypeResponse,
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

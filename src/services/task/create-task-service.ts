import type {
  CreateTaskRequest,
  CreateTaskResponse,
} from "../../hooks/react-query/mutation/task/useConnectCreateTask.ts";
import { NetworkService } from "../common/network-service.ts";
import type { AxiosError } from "axios";
import { type QueryClient } from "@tanstack/react-query";
import { FetchTasksService } from "./fetch-tasks-service.ts";

export class CreateTaskService extends NetworkService {
  public static readonly QUERY_KEY = "CREATE_TASK";

  public async createTask(
    body: CreateTaskRequest,
  ): Promise<CreateTaskResponse> {
    const res = await this.axiosInstance.post<CreateTaskResponse>(
      "/api/v1/task",
      body,
    );

    return res.data;
  }

  public async handleSuccess(
    data: CreateTaskResponse,
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

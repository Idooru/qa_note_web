import type { Task } from "../../data/task_data.ts";
import type {
  CreateTaskRequest,
  CreateTaskResponse,
} from "../../hooks/react-query/mutation/task/useConnectCreateTask.ts";
import { NetworkService } from "../common/network-service.ts";
import type { AxiosError } from "axios";

export class CreateTaskService extends NetworkService {
  public static readonly QUERY_KEY = "CREATE_TASK";
  public readonly renderFn: (task: Task) => void;

  constructor(renderFn: (task: Task) => void) {
    super();
    this.renderFn = renderFn;
  }

  public async createTask(
    body: CreateTaskRequest,
  ): Promise<CreateTaskResponse> {
    const res = await this.axiosInstance.post<CreateTaskResponse>(
      "/api/v1/task",
      body,
    );

    return res.data;
  }

  public handleSuccess(data: CreateTaskResponse): void {
    const { result: task, message } = data;
    this.renderFn(task);
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

import { NetworkService } from "../common/network-service.ts";
import type {
  ChangeTaskSeqRequest,
  ChangeTaskSeqResponse,
} from "../../hooks/react-query/mutation/task/useConnectChangeTaskSeq.ts";
import type { QueryClient } from "@tanstack/react-query";
import { FetchTasksService } from "./fetch-tasks-service.ts";
import type { AxiosError } from "axios";

export class ChangeTaskSeqService extends NetworkService {
  public static readonly MUTATION_KEY = "CHANGE_TASK_SEQ";

  public async changeTaskSeq(
    body: ChangeTaskSeqRequest,
  ): Promise<ChangeTaskSeqResponse> {
    const res = await this.axiosInstance.patch<ChangeTaskSeqResponse>(
      "/api/v1/task/seq",
      body,
    );

    return res.data;
  }

  public async handleSuccess(queryClient: QueryClient): Promise<void> {
    await queryClient.invalidateQueries({
      queryKey: [FetchTasksService.QUERY_KEY],
    });
  }

  public handleError(err: AxiosError): void {
    const defaultMessage = super.branchDefaultNetworkError(err);
    if (defaultMessage !== "")
      return alert(`기본 오류 실패: ${defaultMessage}`);
  }
}

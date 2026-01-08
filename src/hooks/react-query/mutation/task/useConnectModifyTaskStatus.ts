import { ModifyTaskStatusService } from "../../../../services/task/modify-task-status-service.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface ModifyTaskStatusRequest {
  ids: Array<string>;
  status: boolean;
}

export interface ModifyTaskStatusResponse {
  message: string;
}

export const useConnectModifyTaskStatus = (
  service: ModifyTaskStatusService,
) => {
  const queryClient = useQueryClient();
  return useMutation<
    ModifyTaskStatusResponse,
    AxiosError,
    ModifyTaskStatusRequest
  >({
    mutationKey: [ModifyTaskStatusService.MUTATION_KEY],
    mutationFn: (body) => service.modifyTaskStatus(body),
    onSuccess: (data) => service.handleSuccess(data, queryClient),
    onError: (err) => service.handleError(err),
  });
};

import { ModifyTaskTitleService } from "../../../../services/task/modify-task-title-service.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface ModifyTaskTitleRequest {
  id: string;
  title: string;
}

export interface ModifyTaskTitleResponse {
  message: string;
}

export const useConnectModifyTaskTitle = (service: ModifyTaskTitleService) => {
  const queryClient = useQueryClient();
  return useMutation<
    ModifyTaskTitleResponse,
    AxiosError,
    ModifyTaskTitleRequest
  >({
    mutationKey: [ModifyTaskTitleService.MUTATION_KEY],
    mutationFn: (body) => service.modifyTaskTitle(body),
    onSuccess: (data) => service.handleSuccess(data, queryClient),
    onError: (err) => service.handleError(err),
  });
};

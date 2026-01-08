import { DeleteTaskService } from "../../../../services/task/delete-task-service.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface DeleteTaskRequest {
  ids: Array<string>;
}

export interface DeleteTaskResponse {
  message: string;
}

export const useConnectDeleteTask = (service: DeleteTaskService) => {
  const queryClient = useQueryClient();
  return useMutation<DeleteTaskResponse, AxiosError, DeleteTaskRequest>({
    mutationKey: [DeleteTaskService.MUTATION_KEY],
    mutationFn: (body) => service.deleteTask(body),
    onSuccess: (data) => service.handleSuccess(data, queryClient),
    onError: (err) => service.handleError(err),
  });
};

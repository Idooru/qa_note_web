import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { TaskType } from "../../../../data/task_data.ts";
import { ModifyTaskTypeService } from "../../../../services/task/modify-task-type-service.ts";

export interface ModifyTaskTypeRequest {
  id: string;
  type: TaskType;
}

export interface ModifyTaskTypeResponse {
  message: string;
}

export const useConnectModifyTaskType = () => {
  const service = new ModifyTaskTypeService();
  const queryClient = useQueryClient();
  return useMutation<ModifyTaskTypeResponse, AxiosError, ModifyTaskTypeRequest>(
    {
      mutationKey: [ModifyTaskTypeService.MUTATION_KEY],
      mutationFn: (body) => service.modifyTaskType(body),
      onSuccess: (data) => service.handleSuccess(data, queryClient),
      onError: (err) => service.handleError(err),
    },
  );
};

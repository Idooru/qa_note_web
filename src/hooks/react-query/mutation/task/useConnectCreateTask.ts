import { useMutation } from "@tanstack/react-query";
import type { Task, TaskType } from "../../../../data/task_data.ts";
import type { AxiosError } from "axios";
import { CreateTaskService } from "../../../../services/task/create-task-service.ts";
import { useQueryClient } from "@tanstack/react-query";

export interface CreateTaskRequest {
  title: string;
  type: TaskType;
  startDate: string;
}

export interface CreateTaskResponse {
  message: string;
  result: Task;
}

export const useConnectCreateTask = (service: CreateTaskService) => {
  const queryClient = useQueryClient();
  return useMutation<CreateTaskResponse, AxiosError, CreateTaskRequest>({
    mutationKey: [CreateTaskService.QUERY_KEY],
    mutationFn: (body) => service.createTask(body),
    onSuccess: (data) => service.handleSuccess(data, queryClient),
    onError: (err) => service.handleError(err),
  });
};

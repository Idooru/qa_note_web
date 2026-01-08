import type { ChangeTaskTuple } from "../../../../data/task_data.ts";
import { ChangeTaskSeqService } from "../../../../services/task/change-task-seq-service.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface ChangeTaskSeqRequest {
  tasks: Array<ChangeTaskTuple>;
}

export interface ChangeTaskSeqResponse {
  message: string;
}

export const useConnectChangeTaskSeq = () => {
  const service = new ChangeTaskSeqService();
  const queryClient = useQueryClient();
  return useMutation<ChangeTaskSeqResponse, AxiosError, ChangeTaskSeqRequest>({
    mutationKey: [ChangeTaskSeqService.MUTATION_KEY],
    mutationFn: (body) => service.changeTaskSeq(body),
    onSuccess: () => service.handleSuccess(queryClient),
    onError: (err) => service.handleError(err),
  });
};

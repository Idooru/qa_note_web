import axios, { type AxiosError } from "axios";

export abstract class NetworkService {
  protected axiosInstance = axios.create({ baseURL: "http://localhost:5148" });

  protected branchDefaultNetworkError(err: AxiosError): string {
    if (err.message === "Network Error") return "서버와 연결되지 않음";
    else if (err.status === 500) return "서버 오류";
    return "";
  }

  protected branchValidationError(err: AxiosError): string {
    const response = err.response.data;
    if (response.error === "ValidationException" && response.reason) {
      return JSON.stringify(response.reason);
    }
    return "";
  }
}

import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useCallback, useState } from "react";

export type DeleteResponse = boolean;

const api = axios;

export type ApiErrorResponse<T = string> = {
  detail: T;
  error_code: "validation_error";
  status_code: number;
};
export type ApiErrorDetail<T> = ApiErrorResponse<T>["detail"];
export interface ApiError<T = string> extends AxiosError {
  response: AxiosResponse<ApiErrorResponse<T>>;
}

type ApiState<ResponseObj> =
  | {
      loading: boolean;
      data: null;
      error: null;
    }
  | {
      loading: false;
      data: ResponseObj;
      error: null;
    }
  | {
      loading: false;
      data: null;
      error: ApiError;
    };

type AugmentedRequestConfig<RequestDataObj> = Omit<
  AxiosRequestConfig,
  "method" | "url" | "data"
> & { data: RequestDataObj | FormData };

type UseMutateFetchParams = {
  method: "POST" | "PATCH" | "DELETE" | "PUT";
  url: string;
};

type UseMutateFetchReturn<ResponseDataObj, RequestDataObj> = [
  (config?: AugmentedRequestConfig<RequestDataObj>) => Promise<void>,
  ApiState<ResponseDataObj> & { reset: () => void }
];

/**
 * A React Hook to preform a data mutation operation
 * on the server. Only allows the use `POST`, `PUT`, `DELETE`,
 * or `PATCH` HTTP methods
 *
 * All methods for getting data should utilize the useSWR
 * React hook
 */
export function useMutateFetch<
  ResponseDataObj,
  // API Request
  RequestDataObj = Record<string, unknown>
>({
  url,
  method
}: UseMutateFetchParams): UseMutateFetchReturn<
  ResponseDataObj,
  RequestDataObj
> {
  const [apiState, setApiState] = useState<ApiState<ResponseDataObj>>({
    loading: false,
    data: null,
    error: null
  });

  const handleResponse = useCallback(
    async (response: AxiosResponse<ResponseDataObj>): Promise<void> => {
      /**
       * @todo decide on when something should be rejected from the server
       * I know this is a mess but I'll work this out with Jack later
       */
      if ((response.statusText = "ok") && method === "DELETE") {
        setApiState({
          loading: false,
          data: (true as unknown) as ResponseDataObj,
          error: null
        });
      } else if (response.status >= 400) {
        throw new Error(JSON.stringify(response.data));
      } else {
        setApiState({
          loading: false,
          data: response.data,
          error: null
        });
      }
    },
    [method]
  );

  const reset = useCallback(() => {
    setApiState({
      loading: false,
      data: null,
      error: null
    });
  }, []);

  const fetcher = useCallback(
    async (config?: AugmentedRequestConfig<RequestDataObj>) => {
      setApiState({
        loading: true,
        data: null,
        error: null
      });
      try {
        const apiResponse = await api.request<ResponseDataObj>({
          url,
          method,
          ...config,
          data: config?.data || {}
        });
        await handleResponse(apiResponse);
      } catch (error) {
        setApiState({
          data: null,
          error: error as ApiError,
          loading: false
        });
      }
    },
    [method, url, handleResponse]
  );

  return [
    fetcher,
    {
      ...apiState,
      reset
    }
  ];
}

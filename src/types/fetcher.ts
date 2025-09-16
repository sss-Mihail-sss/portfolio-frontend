type SuccessfulResponse<T> = {
  error: false;
  message: string;
  statusCode: number;
  data: T;
  meta?: {
    page: number;
    pageSize: number;
    pageCount: number;
    rowCount: number;
  };
};

type ErrorResponse = {
  error: true;
  message: string;
  statusCode: number;
};

export type FetchResponse<T = unknown> = SuccessfulResponse<T> | ErrorResponse;

export type FetchOptions = Omit<RequestInit, 'signal'> & {
  timeout?: number;
};

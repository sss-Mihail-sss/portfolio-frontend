declare type FetchResponse<T = unknown> =
  | {
      message: string;
      statusCode: number;
      data?: T;
    }
  | {
      message: string;
      statusCode: number;
      error: string;
    };

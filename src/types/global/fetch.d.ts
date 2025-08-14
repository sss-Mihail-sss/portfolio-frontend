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
    }
  | {
      message: string;
      statusCode: number;
      data: T[];
      meta: {
        page: number;
        pageSize: number;
        pageCount: number;
        rowCount: number;
      };
    };

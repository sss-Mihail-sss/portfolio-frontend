export type Pagination = {
  pageIndex: number;
  pageSize: number;
};

export type PaginationResponse<T> = {
  data: T[];
  page: number;
  pageSize: number;
  rowCount: number;
  pageCount: number;
};

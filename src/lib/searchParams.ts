import { useQueryStates } from 'nuqs';
import { createSearchParamsCache, createSerializer, parseAsIndex, parseAsInteger } from 'nuqs/server';

const paginationParsers = {
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(10),
};

const paginationUrlKeys = {
  pageIndex: 'page',
  pageSize: 'perPage',
};

export const paginationSearchParamsCache = createSearchParamsCache(paginationParsers);
export const serializePagination = createSerializer(paginationParsers, {
  urlKeys: paginationUrlKeys,
  clearOnDefault: false,
});

export function usePaginationSearchParams() {
  return useQueryStates(paginationParsers, {
    urlKeys: paginationUrlKeys,
  });
}

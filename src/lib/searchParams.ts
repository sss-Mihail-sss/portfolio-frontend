import { useQueryStates } from 'nuqs';
import { createSearchParamsCache, createSerializer, parseAsInteger, parseAsIndex, createLoader } from 'nuqs/server';

const searchParams = {
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(10),
};

const searchParamsUrlKeys = {
  pageIndex: 'page',
  pageSize: 'perPage',
};

export const searchParamsCache = createSearchParamsCache(searchParams, {
  urlKeys: searchParamsUrlKeys
});
export const loadSearchParams = createLoader(searchParams, {
  urlKeys: searchParamsUrlKeys
});

export const serialize = createSerializer(searchParams, {
  urlKeys: searchParamsUrlKeys,
});

export const serializeWithDefault = createSerializer(searchParams, {
  urlKeys: searchParamsUrlKeys,
  clearOnDefault: false,
});

export function useSearchParams() {
  return useQueryStates(searchParams, {
    urlKeys: searchParamsUrlKeys,
  });
}

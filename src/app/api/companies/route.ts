import { NextRequest } from 'next/server';

import companies from '@/fake/data/companies.json';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('perPage')) || 10;

  const data = companies.slice((page - 1) * pageSize, page * pageSize);
  const length = companies.length;

  const response = {
    data,
    page,
    pageSize,
    rowCount: length,
    pageCount: Math.ceil(length / pageSize),
  };

  return Response.json(response);
}

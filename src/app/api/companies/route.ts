import companies from '@/fake/data/companies.json';

export function GET() {
  return Response.json(companies);
}

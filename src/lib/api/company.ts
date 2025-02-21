import { Session } from 'next-auth';

import { Company } from '@/types/company';
import { generateCompanies } from '@/fake/company';

export async function getCompanies(session: Session | null): Promise<Company[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateCompanies(10));
    }, 5000);
  });
}
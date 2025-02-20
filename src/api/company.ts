import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export async function getCompanies() {
  const session = await getSession();
  console.log(session);
}

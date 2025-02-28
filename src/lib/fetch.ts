import { getSession } from 'next-auth/react';
import { auth } from '@/lib/auth';

export async function withAccessToken(headers: HeadersInit): Promise<HeadersInit> {
  let session;

  if (typeof window !== 'undefined') {
    session = await getSession();
  } else {
    session = await auth();
  }

  return {
    ...(session?.tokens?.accessToken && {
      Authorization: `Bearer ${session.tokens.accessToken}`,
    }),
    ...headers,
  };
}

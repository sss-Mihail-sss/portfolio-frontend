import { getSession } from 'next-auth/react';

export async function withAccessToken(headers: HeadersInit): Promise<HeadersInit> {
  const session = await getSession();

  return {
    ...(session?.tokens?.accessToken && {
      Authorization: `Bearer ${session.tokens.accessToken}`,
    }),
    ...headers,
  };
}

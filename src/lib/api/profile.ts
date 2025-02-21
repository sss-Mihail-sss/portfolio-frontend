import { auth } from '@/lib/auth';
import { Profile } from '@/types/profile';

export async function getProfile(options?: RequestInit): Promise<Profile | null> {
  const session = await auth();
  const accessToken = session?.tokens?.accessToken;

  const response = await fetch(process.env.API_URL + '/profile', {
    ...options,
    headers: {
      ...options?.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  if (!response.ok) {
    return null;
  }
  const json = await response.json();

  return json;
}

import { auth } from '@/lib/auth';
import { Profile } from '@/types/profile';

export async function getProfile(options?: RequestInit): Promise<Profile> {
  const session = await auth();
  const accessToken = session?.accessToken;

  const response = await fetch(process.env.API_URL + '/profile', {
    ...options,
    headers: {
      ...options?.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  return await response.json();
}

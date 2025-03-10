import { User } from '@/types/user';

export async function login({
  username,
  password,
}: {
  username: string,
  password: string,
}): Promise<{
  accessToken: string;
  refreshToken: string;
  userInfo: User
}> {
  const response = await fetch(process.env.API_URL + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return await response.json();
}

export async function refresh(refreshToken: string): Promise<{
  accessToken: string;
  refreshToken: string;
}> {
  const response = await fetch(process.env.API_URL + '/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  const json = await response.json();
  console.log('json', json);

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return json;
}

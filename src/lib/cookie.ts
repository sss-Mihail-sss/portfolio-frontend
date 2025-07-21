import 'server-only';

import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  const cookie = await cookies();
  return cookie.get(name);
}

export async function setCookie(name: string, value: string, expires?: Date) {
  const cookie = await cookies();

  cookie.set(name, value, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: 'strict',
    path: '/',
  });
}

export async function deleteCookie(name: string) {
  const cookie = await cookies();
  cookie.delete(name);
}

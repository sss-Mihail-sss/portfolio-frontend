'use server';

import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  const cookie = await cookies();
  const value = cookie.get(name);

  return value?.value;
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

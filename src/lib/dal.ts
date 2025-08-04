import 'server-only';

import { cache } from 'react';
import { getLocale } from 'next-intl/server';

import { redirect } from '@/config/i18n/navigation';
import { decrypt } from '@/lib/session';
import { getCookie } from '@/lib/cookie';

export const verifySession = cache(async () => {
  const locale = await getLocale();
  const cookie = await getCookie('session');
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect({ href: '/login', locale });
  }

  return {
    isAuth: true,
    userId: session!.userId,
  };
});

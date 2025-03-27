import 'server-only';

import { cache } from 'react';
import { cookies } from 'next/headers';
import { getLocale } from 'next-intl/server';

import { redirect } from '@/i18n/navigation';
import { decrypt } from '@/lib/session';

export const verifySession = cache(async () => {
  const locale = await getLocale();
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect({ href: '/login', locale });
  }

  return { isAuth: true, userId: session!.userId };
});

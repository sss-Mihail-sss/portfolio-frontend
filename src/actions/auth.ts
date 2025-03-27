'use server';

import { getLocale } from 'next-intl/server';

import { deleteSession } from '@/lib/session';
import { redirect } from '@/i18n/navigation';

export async function signin() {

}

export async function signup() {

}

export async function logout() {
  const locale = await getLocale();
  deleteSession();
  redirect({ href: '/login', locale });
}

import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { LoginForm } from '@/components/form/login';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.login' });

  return {
    title: t('title'),
  };
}

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{t('form.login.title')}</h1>
        <p className="text-balance text-sm text-muted-fg">{t('form.login.description')}</p>
      </div>

      <Tabs
        defaultValue="credentials"
        className="mt-4"
      >
        <TabsList>
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="phone">Phone</TabsTrigger>
        </TabsList>
        <TabsContent value="credentials">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </>
  );
}

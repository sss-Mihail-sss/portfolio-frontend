import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: LayoutProps<'/[locale]/forgot-password'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.forgot-password' });

  return {
    title: t('title'),
  };
}

export default async function Layout({ params, children }: LayoutProps<'/[locale]/forgot-password'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'form.forgot-password' });

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-heading-2xl">{t('title')}?</h1>
        <p className="text-secondary text-sm">{t('description')}.</p>
      </div>

      {children}
    </>
  );
}

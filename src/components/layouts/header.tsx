import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';

import { Navbar } from '@/components/layouts/navbar';
import { Logo } from '@/components/logo';
import { SelectLanguages } from '@/components/select-languages';
import { SelectTheme } from '@/components/select-theme';
import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

const Header = async () => {
  const t = await getTranslations();

  const cookie = await cookies();
  const isAuthenticated = cookie.get('accessToken');

  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-center bg-card py-4">
      <div className="container flex items-center justify-between">
        <Logo />

        <Navbar />

        <div className="flex items-center justify-between gap-2">
          <SelectTheme />
          <SelectLanguages />
          {isAuthenticated ? (
            <Button>{t('logout')}</Button>
          ) : (
            <Button
              color="brand"
              asChild
            >
              <Link
                unstyled
                href="/login"
              >
                {t('login')}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };

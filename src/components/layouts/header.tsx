import { cookies } from 'next/headers';

import { Navbar } from '@/components/layouts/navbar';
import { Logo } from '@/components/logo';
import { SelectTheme } from '@/components/select-theme';
import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

const Header = async () => {
  const cookie = await cookies();
  const isAuthenticated = cookie.get('accessToken');

  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-center bg-card py-4">
      <div className="container flex items-center justify-between">
        <Logo />

        <Navbar />

        <div className="flex items-center justify-between gap-2">
          <SelectTheme />
          {isAuthenticated ? (
            <Button>Logout</Button>
          ) : (
            <Button asChild>
              <Link
                unstyled
                href="/login"
              >
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };

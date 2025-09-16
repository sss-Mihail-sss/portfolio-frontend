import { cookies } from 'next/headers';

import { Navbar } from '@/components/layouts/navbar';
import { Logo } from '@/components/logo';
import { Button } from '@/ui/button';

const Header = async () => {
  const cookie = await cookies();
  const isAuthenticated = cookie.get('accessToken');

  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-center bg-card py-4">
      <div className="container flex items-center justify-between">
        <Logo className="hidden md:block" />

        <Navbar />

        {isAuthenticated ? <Button>Logout</Button> : <Button>Login</Button>}
      </div>
    </header>
  );
};

export { Header };

import { House, Search, User } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Link } from '@/ui/link';

const Header = async () => {
  return (
    <header className="sticky bottom-0 z-10 flex w-full items-center bg-card py-4 shadow md:top-0 md:h-20">
      <div className="container-wrapper flex items-center justify-between">
        <Logo className="hidden md:block" />

        <nav className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-center md:[&>a]:underline-offset-4">
          <Link
            underline
            href="/"
          >
            <House className="md:hidden" />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            underline
            href="/about"
          >
            <Search className="md:hidden" />
            <span className="hidden md:block">About</span>
          </Link>
          <Link
            underline
            href="/contact"
          >
            <User className="md:hidden" />
            <span className="hidden md:block">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { Header };

import { House, Search, User } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Link } from '@/ui/link';

const Header = async () => {
  return (
    <header className="sticky w-full bottom-0 md:top-0 bg-card shadow flex items-center md:h-20 py-4 z-10">
      <div className="container-wrapper flex items-center justify-between">
        <Logo className="hidden md:block" />

        <nav className="flex items-center justify-between md:justify-center w-full md:w-auto gap-4 md:[&>a]:underline-offset-4">
          <Link
            variant="underline"
            href="/"
          >
            <House className="md:hidden" />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            variant="underline"
            href="/about"
          >
            <Search className="md:hidden" />
            <span className="hidden md:block">About</span>
          </Link>
          <Link
            variant="underline"
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

import { Logo } from '@/components/logo';
import { Link } from '@/ui/link';
import { auth, signOut } from '@/lib/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Button } from '@/ui/button';

const Header = async () => {
  const session = await auth();

  async function logout() {
    'use server';
    await signOut();
  }

  return (
    <header className="bg-card py-4">
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-4 [&>a]:underline-offset-4">
          <Link variant="underline" href="/">
            Home
          </Link>
          <Link variant="underline" href="/about">
            About
          </Link>
          <Link variant="underline" href="/contact">
            Contact
          </Link>

          {
            (session && session.user) ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={session.user.avatar} alt={session.user.username} />
                    <AvatarFallback>
                      {`${session.user.firstName?.trim()[0].toUpperCase()}${session.user.lastName?.trim()[0].toUpperCase()}`}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-34 mt-2">
                  <DropdownMenuLabel>
                    {session.user.username}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile">
                      <div>
                        Profile
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link href="/login">
                  Login
                </Link>
              </Button>
            )
          }
        </nav>
      </div>
    </header>
  );
};

export { Header };

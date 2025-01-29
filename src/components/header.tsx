import { House, LayoutDashboard, LogOut, Menu, Search, Settings, User } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Link } from '@/ui/link';
import { auth } from '@/lib/auth';
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
import { logout } from '@/actions/auth';

const Header = async () => {
  const session = await auth();

  let avatar = '/users/default/avatar/male-avatar-boy-face-man-user-9-svgrepo-com.svg';

  if (session?.profile) {
    avatar = session.profile.avatar;
  }

  return (
    <header className='sticky w-full bottom-0 md:top-0 bg-card flex items-center md:h-20 py-4 '>
      <div className='container flex items-center justify-between'>
        <Logo className='hidden md:block' />

        <nav className='flex items-center justify-between md:justify-center w-full md:w-auto gap-4 px-6 md:px-0 md:[&>a]:underline-offset-4'>
          <Link variant='underline' href='/'>
            <House className='md:hidden' />
            <span className='hidden md:block'>Home</span>
          </Link>
          <Link variant='underline' href='/about'>
            <Search className='md:hidden' />
            <span className='hidden md:block'>About</span>
          </Link>
          <Link variant='underline' href='/contact'>
            <User className='md:hidden' />
            <span className='hidden md:block'>Contact</span>
          </Link>

          <Menu className='md:hidden cursor-pointer' />

          {
            (session && session.user) ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild className='hidden md:flex'>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src={avatar} alt={session.user.username} />
                    <AvatarFallback>
                      {`${session?.profile?.firstName?.trim()[0].toUpperCase()}${session?.profile?.lastName?.trim()[0].toUpperCase()}`}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-42 mt-2'>
                  <DropdownMenuLabel>
                    <p className=''>
                      {session?.profile?.firstName} {session?.profile?.lastName}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {session.user.role === 'admin' ? session.user.role : session.user.email}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href='/profile'>
                    <DropdownMenuItem>
                      <User />
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href='/setting'>
                    <DropdownMenuItem>
                      <Settings />
                      Setting
                    </DropdownMenuItem>
                  </Link>
                  {
                    session.user.role === 'admin' && (
                      <Link href='/admin'>
                        <DropdownMenuItem>
                          <LayoutDashboard />
                          Admin
                        </DropdownMenuItem>
                      </Link>
                    )
                  }
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link href='/login'>
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

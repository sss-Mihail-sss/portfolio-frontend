import { ReactNode } from 'react';
import { SwipeAnimation } from '@/components/swipe-animation';

type Props = {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='container flex-1 flex items-center justify-center'>
      {children}
    </div>
  );
}

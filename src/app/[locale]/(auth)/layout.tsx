import { ReactNode } from 'react';
import * as m from 'motion/react-m';

type Props = {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="container flex-1 flex items-center justify-center">
      <div className="flex bg-card rounded overflow-hidden">
        {children}

        <m.div className="w-sm bg-gray-600">
        </m.div>
      </div>
    </div>
  );
}

import { ReactNode } from 'react';

import { Sidebar } from './components/sidebar';
import { Navbar } from './components/navbar';

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='flex flex-col sm:flex-row flex-1 gap-2 p-2'>
      <Sidebar />

      <div className='flex flex-col flex-1 gap-2'>
        <Navbar />

        <main className='flex-1 p-4 bg-card rounded-lg'>
          {children}
        </main>
      </div>
    </div>
  );
}

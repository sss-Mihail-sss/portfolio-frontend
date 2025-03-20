import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='bg-background p-2 flex gap-2 min-h-dvh'>
      <aside className='w-72 bg-muted rounded-2xl'>

      </aside>

      <main className='flex-1 p-4 bg-card rounded-2xl'>
        {children}
      </main>
    </div>
  );
}

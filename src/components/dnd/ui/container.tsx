import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('bg-background', className)}>
      {children}
    </div>
  );
};

export { Container };
export type { Props as ContainerProps };

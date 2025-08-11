import { cn } from '@/lib/utils';
import { Link } from '@/ui/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link
      href="/"
      className={cn('font-bold uppercase tracking-widest text-3xl', className)}
    >
      Bear
    </Link>
  );
};

export { Logo };

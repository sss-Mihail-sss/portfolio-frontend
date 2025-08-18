import { cn } from '@/lib/utils/classnames';
import { Link } from '@/ui/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link
      href="/"
      className={cn('font-bold text-3xl uppercase tracking-widest', className)}
    >
      Bear
    </Link>
  );
};

export { Logo };

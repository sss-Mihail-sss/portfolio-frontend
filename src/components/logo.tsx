import { cn } from '@/lib/utils/classnames';
import { Link } from '@/ui/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link
      unstyled
      href="/"
      className={cn('font-bold text-3xl uppercase tracking-widest', className)}
    >
      LOGO
    </Link>
  );
};

export { Logo };

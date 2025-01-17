import { Link } from '@/ui/link';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href='/' className={cn('font-bold uppercase tracking-widest text-3xl', className)}>
      Bear
    </Link>
  );
};

export { Logo };

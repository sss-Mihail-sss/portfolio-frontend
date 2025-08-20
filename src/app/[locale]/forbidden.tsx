import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

export default function Forbidden() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1>Forbidden: You do not have permission to access this resource.</h1>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </main>
  );
}

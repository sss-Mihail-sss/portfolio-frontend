import { auth, signOut } from '@/lib/auth';
import { Button } from '@/ui/button';

type Props = {
  params: Promise<{
    locale: string;
  }>
}

export default async function HomePage({}: Props) {
  const session = await auth();

  return (
    <>
      <Button onClick={async () => {
        'use server';
        await signOut()
      }}>
        Logout
      </Button>
    </>
  );
}

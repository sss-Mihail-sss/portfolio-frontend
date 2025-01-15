import { auth } from '@/lib/auth';

type Props = {
  params: Promise<{
    locale: string;
  }>
}

export default async function HomePage({}: Props) {
  const session = await auth();

  return (
    <>
      main page
    </>
  );
}

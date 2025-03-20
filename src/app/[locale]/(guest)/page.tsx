import { Locale } from 'next-intl';

type Props = {
  params: Promise<{
    locale: Locale;
  }>
}

export default async function HomePage({}: Props) {
  return (
    <>
      main page
    </>
  );
}

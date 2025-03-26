import { Locale } from 'next-intl';

type Props = {
  params: Promise<{
    locale: Locale;
  }>
}

export default async function Page({}: Props) {
  return (
    <div>
      Storage dashboard
    </div>
  );
}

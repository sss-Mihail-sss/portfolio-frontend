import { Header } from '@/components/layouts/header';

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

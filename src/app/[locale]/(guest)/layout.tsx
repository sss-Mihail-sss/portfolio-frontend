import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <>
      <Header />

      <main className="flex flex-1 justify-center">{children}</main>

      <Footer />
    </>
  );
}

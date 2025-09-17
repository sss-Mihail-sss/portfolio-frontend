import { type Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="m-2 rounded bg-overlay px-4 xs:px-12 py-8 shadow-overlay md:w-lg">{children}</div>
    </div>
  );
}

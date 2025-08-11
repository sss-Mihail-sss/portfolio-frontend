import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Graduate, Inter, Montserrat, Open_Sans, Raleway, Roboto, Roboto_Mono } from 'next/font/google';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
});

export const geistMono = GeistMono;

export const geistSans = GeistSans;

export const openSans = Open_Sans({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-open-sans',
});

export const raleway = Raleway({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-raleway',
});

export const roboto = Roboto({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-roboto',
});

export const robotoMono = Roboto_Mono({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-roboto-mono',
});

export const inter = Inter({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-inter',
});

export const graduate = Graduate({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-graduate',
});

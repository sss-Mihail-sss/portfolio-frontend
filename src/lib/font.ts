export { GeistSans as geistSans } from 'geist/font/sans';
export { GeistMono as geistMono } from 'geist/font/mono';

import { Inter, Montserrat, Open_Sans, Raleway, Roboto, Roboto_Mono } from 'next/font/google';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
});

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

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Logo } from '@/components/logo';
import { Separator } from '@/ui/base-ui/separator';
import { Link } from '@/ui/link';

const links: {
  title: string;
  href: Parameters<typeof Link>[0]['href'];
}[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'News',
    href: '/',
  },
  {
    title: 'Contact',
    href: '/',
  },
  {
    title: 'Test',
    href: '/',
  },
  {
    title: 'Test',
    href: '/',
  },
];

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="flex items-center justify-center bg-neutral">
      <div className="container flex flex-col">
        <div className="grid grid-cols-2 py-16">
          <div className="flex flex-col gap-2 text-on-neutral">
            <span className="text-brand">Contact</span>
            <a
              href="mailto:example@gmail.com"
              className="font-medium text-sm"
            >
              example@gmail.com
            </a>
            <a
              href="tel:+37312345678"
              className="font-medium text-sm"
            >
              +37312345678
            </a>
          </div>

          <div className="flex flex-col gap-2 text-on-neutral">
            <span className="text-brand">Follow us</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/logos/instagram/white.svg"
                  alt="Instagram logo"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/logos/linkedin/white.png"
                  alt="Linkedin logo"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="container flex justify-between py-16">
          <Logo className="text-on-neutral" />

          <div className="grid grid-cols-4 gap-8 text-on-neutral/70 text-sm">
            {links.map((link) => (
              <Link
                unstyled
                key={link.title}
                href={link.href}
                className="font-medium transition hover:text-on-neutral"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between py-8 text-on-neutral/50 text-xs">
          <div className="flex gap-2">
            <span>© Name</span>
            <Separator
              orientation="vertical"
              className="bg-brand-subtle"
            />
            <span>Company Name, P.C.</span>
            <Separator
              orientation="vertical"
              className="bg-brand-subtle"
            />
            <span>2025</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex gap-4">
            <Link
              unstyled
              href="/terms-and-conditions"
              className="transition hover:text-on-neutral"
            >
              {t('navigation.terms-and-conditions')}
            </Link>
            <Link
              unstyled
              href="/processing-of-personal-data"
              className="transition hover:text-on-neutral"
            >
              {t('navigation.processing-personal-data')}
            </Link>
            <Link
              unstyled
              href="/cookie-policy"
              className="transition hover:text-on-neutral"
            >
              {t('navigation.cookie-policy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

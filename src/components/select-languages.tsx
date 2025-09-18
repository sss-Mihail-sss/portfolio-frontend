'use client';

import { CheckIcon, LanguagesIcon } from 'lucide-react';
import { useLocale } from 'next-intl';

import { locales } from '@/config/i18n/routing';
import {
  Menu,
  MenuContent,
  MenuRadioGroup,
  MenuRadioGroupItem,
  MenuRadioGroupItemIndicator,
  MenuTrigger,
} from '@/ui/base-ui/menu';
import { IconButton } from '@/ui/icon-button';
import { Link } from '@/ui/link';

const SelectLanguages = () => {
  const selectedLocale = useLocale();

  return (
    <Menu>
      <MenuTrigger render={<IconButton variant="ghost" />}>
        <LanguagesIcon
          className="size-4 stroke-[1.5]"
          absoluteStrokeWidth
        />
      </MenuTrigger>
      <MenuContent>
        <MenuRadioGroup defaultValue={selectedLocale}>
          {locales.map((locale) => {
            const languageDisplayNames = new Intl.DisplayNames([locale], { type: 'language' });
            const languageDisplayName = languageDisplayNames.of(locale);

            return (
              <MenuRadioGroupItem
                closeOnClick
                value={locale}
                key={locale}
                render={
                  <Link
                    locale={locale}
                    unstyled
                    href={{ pathname: '/' }}
                  />
                }
              >
                <span className="capitalize">{languageDisplayName}</span>
                <MenuRadioGroupItemIndicator>
                  <CheckIcon className="size-3" />
                </MenuRadioGroupItemIndicator>
              </MenuRadioGroupItem>
            );
          })}
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
};

export { SelectLanguages };

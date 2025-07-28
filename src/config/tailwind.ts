import { ConfigExtension, DefaultClassGroupIds, DefaultThemeGroupIds } from 'tailwind-merge';

export const tailwindConfig: ConfigExtension<DefaultClassGroupIds, DefaultThemeGroupIds> = {
  extend: {
    theme: {
      breakpoint: ['xs'],
      color: [
        'border-focus',
        'brand',
        'brand-fg',
        'brand-hover',
        'brand-press',
        'disabled',
        'disabled-fg',
      ],
      text: [
        'heading-2xl',
        'heading-xl',
        'heading-lg',
        'heading',
        'heading-sm',
        'heading-xs',
        'heading-2xs',
        'body-lg',
        'body',
        'body-sm',
      ]
    }
  }
};

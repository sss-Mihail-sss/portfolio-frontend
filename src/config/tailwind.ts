import { ConfigExtension, DefaultClassGroupIds, DefaultThemeGroupIds } from 'tailwind-merge';

export const tailwindConfig: ConfigExtension<DefaultClassGroupIds, DefaultThemeGroupIds> = {
  extend: {
    theme: {
      breakpoint: ['xs'],
      color: [
        'bg',
        'fg',
        'selection',
        'selection-fg',
        'primary',
        'primary-fg',
        'secondary',
        'secondary-fg',
        'overlay',
        'overlay-fg',
        'accent',
        'accent-fg',
        'muted',
        'muted-fg',
        'succes',
        'succes-fg',
        'warning',
        'warning-fg',
        'error',
        'error-fg',
        'navbar',
        'navbar-fg',
        'sidebar',
        'sidebar-fg',
        'border',
        'input',
        'ring'
      ]
    }
  }
};


import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV } from 'tailwind-variants';

import { tailwindConfig } from '@/config/tailwind';

const twMerge = extendTailwindMerge(tailwindConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tv = createTV({
  twMergeConfig: tailwindConfig,
});

export function parseBoolean(value: string | boolean | null) {
  if (typeof value === 'boolean') {
    return value;
  }

  return value === 'true';
}

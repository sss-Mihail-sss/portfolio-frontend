import { type ClassValue, clsx } from 'clsx';
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

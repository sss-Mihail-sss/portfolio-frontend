import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseBoolean(value: string | boolean | null) {
  if (typeof value === 'boolean') {
    return value;
  }

  return value === 'true';
}

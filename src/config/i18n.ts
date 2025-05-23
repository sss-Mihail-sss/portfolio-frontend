import { Formats } from 'next-intl';

export const files = [
  'common.json',
  'error.json',
  'form.json',
  'meta.json',
  'navigation.json',
  'validation.json',
] as const;

export const FileNames = files.map((file) => `./messages/en/${file}`);

export const formats: Formats = {
  dateTime: {
    'date-short': {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  },
};

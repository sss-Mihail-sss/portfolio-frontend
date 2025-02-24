import { format as fnsFormat } from 'date-fns';
import {  } from 'date-fns/locale';

export function format(date?: string) {
  if (!date) {
    return;
  }

  return fnsFormat(
    new Date(date)
  );
}

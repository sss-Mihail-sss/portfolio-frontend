import { Log } from '@/types/log';

export function logDebug({ context, message, source }: Log): void {
  console.debug('DEBUG:', { context, message, source });
}

export function logInfo({ context, message, source }: Log): void {
  console.info('INFO:', { context, message, source });
}

export function logWarning({ context, message, source }: Log): void {
  console.warn('WARNING:', { context, message, source });
}

export function logError({ context, message, source }: Log): void {
  console.error('ERROR:', { context, message, source });
}
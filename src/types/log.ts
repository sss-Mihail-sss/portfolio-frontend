export type Log = {
  source: string;
  message: string;
  context?: Object;
  exception?: string;
  userId?: number;
}

export enum LogLevel {
  ERROR,
  WARNING,
  INFO,
  DEBUG
}
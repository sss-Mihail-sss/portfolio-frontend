export type Log = {
  source: string;
  message: string;
  context?: object;
  exception?: string;
  userId?: number;
};

export enum LogLevel {
  ERROR,
  WARNING,
  INFO,
  DEBUG,
}

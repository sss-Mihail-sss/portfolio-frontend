export type Log = {
  source: string;
  message: string;
  context?: object;
  exception?: string;
  userId?: number;
};

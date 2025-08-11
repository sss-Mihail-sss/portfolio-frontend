export type User = {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  role: string;
};

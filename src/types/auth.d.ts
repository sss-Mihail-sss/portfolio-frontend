// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth , { type DefaultSession }from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    username: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    role?: string;

    accessToken?: string;
    refreshToken?: string;
    expiresAt?: string;
  }

  interface Account {
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

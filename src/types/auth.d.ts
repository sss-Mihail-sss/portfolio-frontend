// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number,
    username: string,
    firstName?: string,
    lastName?: string,
    avatar?: string
  }

  interface Account {}

  interface Session {}
}

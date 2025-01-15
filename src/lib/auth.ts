import chalk from 'chalk';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  experimental: {
    enableWebAuthn: true,
  },
  logger: {
    debug(message, metadata) {
      console.log(chalk.blue('Debug'), message, metadata);
    },
    warn(code) {
      console.warn(chalk.yellow('Warning'), code);
    },
    error(error) {
      console.error(chalk.red('Error'), error);
    },
  },
  events: {
    session(message) {
      console.log('Event session', message);
    },
    signIn(message) {
      console.log('Event signIn', message);
    },
    signOut(message) {
      console.log('Event signOut', message);
    },
    createUser(message) {
      console.log('Event createUser', message);
    },
    updateUser(message) {
      console.log('Event updateUser', message);
    },
    linkAccount(message) {
      console.log('Event linkAccount', message);
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/register',
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async ({ password, username }) => {
        if (username === 'maggie' && password === 'admin123') {
          return {
            id: '1',
            username: 'maggie',
            firstName: 'Maggie',
            lastName: 'Simpson',
            avatar: '/users/1/maggie.png',
          };
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
  callbacks: {
    async jwt({
      token, // signIn or signUp
      user,  // signIn or signUp
      session,
      trigger,
    }) {
      console.log('JWT callback', { session, token, user, trigger });

      return {
        ...token,
        ...user
      };
    },
    async signIn({ user, account, credentials }) {
      console.log('SignIn callback', { user, account, credentials });

      return true;
    },
    async session({ session, trigger, token }) {
      console.log('Session callback', { session, trigger, token });
      session.user = token as any;

      return session;
    },
  },
});

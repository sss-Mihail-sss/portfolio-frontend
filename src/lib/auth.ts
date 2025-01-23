import NextAuth, { DecodedJWT, Validity } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';

import { login, refresh } from '@/api/auth';
import { loginSchema } from '@/lib/zod';
import { getProfile } from '@/api/profile';
import { jwtDecode } from 'jwt-decode';

async function refreshAccessToken(nextAuthJWT: JWT) {
  try {
    const tokens = await refresh(nextAuthJWT.data.tokens.refreshToken);

    if (!tokens) {
      throw tokens;
    }

    const { exp } = jwtDecode(tokens.accessToken);
    nextAuthJWT.data.validity.validUntil = exp;
    nextAuthJWT.data.tokens.accessToken = tokens.accessToken;

    return { ...nextAuthJWT };
  } catch (error) {
    return {
      ...nextAuthJWT,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  experimental: {
    enableWebAuthn: true,
  },
  // logger: {
  //   debug(message, metadata) {
  //     console.log(chalk.blue('Debug'), message, metadata);
  //   },
  //   warn(code) {
  //     console.warn(chalk.yellow('Warning'), code);
  //   },
  //   error(error) {
  //     console.error(chalk.red('Error'), error);
  //   },
  // },
  // events: {
  //   session(message) {
  //     console.log('Event session', message);
  //   },
  //   signIn(message) {
  //     console.log('Event signIn', message);
  //   },
  //   signOut(message) {
  //     console.log('Event signOut', message);
  //   },
  //   createUser(message) {
  //     console.log('Event createUser', message);
  //   },
  //   updateUser(message) {
  //     console.log('Event updateUser', message);
  //   },
  //   linkAccount(message) {
  //     console.log('Event linkAccount', message);
  //   },
  // },
  pages: {
    signIn: '/login',
    signOut: '/register',
  },
  providers: [
    Credentials({
      credentials: {
        username: {
          type: 'text',
        },
        password: {
          type: 'text',
        },
      },
      authorize: async (credentials) => {
        try {
          const { password, username } = await loginSchema.parseAsync(credentials);
          const tokens = await login({ username, password });

          if (!tokens) {
            return null;
          }

          const { accessToken, refreshToken, userInfo } = tokens;

          const decodedAccessToken: DecodedJWT = jwtDecode(accessToken);
          const decodedRefreshToken: DecodedJWT = jwtDecode(refreshToken);

          const validity: Validity = {
            validUntil: decodedAccessToken.exp,
            refreshUntil: decodedRefreshToken.exp,
          };

          const profile = await getProfile({
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          return {
            user: userInfo,
            profile: profile,
            tokens: tokens,
            validity: validity,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log('JWT CALLBACK');
      if (user && account) {
        return {
          ...token,
          data: user,
        };
      }

      if (Date.now() < token.data.validity.validUntil * 1000) {
        console.log('JWT CALLBACK | Access token is still valid');
        return token;
      }

      if (Date.now() < token.data.validity.validUntil * 1000) {
        console.log('JWT CALLBACK | Refresh token is still valid');
        return await refreshAccessToken(token);
      }

      return {
        ...token,
        error: 'RefreshTokenError',
      };
    },
    async session({ session, token }) {
      session.user = token.data.user;
      session.validity = token.data.validity;
      session.error = token.error;

      return session;
    },
  },
});

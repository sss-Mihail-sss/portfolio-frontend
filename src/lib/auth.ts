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

    console.log(tokens);
    if (!tokens) {
      throw tokens;
    }

    const { accessToken, refreshToken } = tokens;

    const decodedAccessToken: DecodedJWT = jwtDecode(accessToken);
    const decodedRefreshToken: DecodedJWT = jwtDecode(refreshToken);

    nextAuthJWT.data.validity.validUntil = decodedAccessToken.exp;
    nextAuthJWT.data.validity.refreshUntil = decodedRefreshToken.exp;

    nextAuthJWT.data.tokens.accessToken = accessToken;
    nextAuthJWT.data.tokens.refreshUntil = refreshToken;

    return { ...nextAuthJWT };
  } catch (error) {
    console.error(error);
    return {
      ...nextAuthJWT,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: false,
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
            tokens: {
              accessToken,
              refreshToken,
            },
            validity: validity,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        return {
          ...token,
          data: user,
        };
      }

      console.log(Date.now(), new Date(Date.now()));
      console.log(token.data.validity.validUntil * 1000, new Date(token.data.validity.validUntil * 1000));

      if (Date.now() < token.data.validity.validUntil * 1000) {
        console.debug('JWT CALLBACK | Access token is still valid');
        return token;
      }

      if (Date.now() < token.data.validity.refreshUntil * 1000) {
        console.debug('JWT CALLBACK | Updating access and refresh token');
        return await refreshAccessToken(token);
      }

      console.error('JWT CALLBACK | Refresh and access token are expired');
      return {
        ...token,
        error: 'RefreshTokenError',
      };
    },
    async session({ session, token }) {
      session.user = token.data.user;
      session.profile = token.data.user.profile;
      session.validity = token.data.validity;
      session.tokens = token.data.tokens;

      return session;
    },
  },
});

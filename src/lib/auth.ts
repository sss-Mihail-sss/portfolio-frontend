import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
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
            avatar: '/users/1/maggie.png'
          };
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
});

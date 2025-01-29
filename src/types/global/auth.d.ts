import { JWT as JWTType } from 'next-auth/jwt';

import { Profile } from '@/types/profile';
import { User as UserType } from '@/types/user';

declare module 'next-auth' {
  interface User {
    user: UserType,
    tokens: Tokens;
    profile: Profile | null;
    validity: Validity;
  }

  interface Tokens {
    accessToken: string;
    refreshToken: string;
  }

  interface Validity {
    validUntil: number;
    refreshUntil: number;
  }

  interface Session {
    user: UserType;
    profile: Profile | null;
    validity: Validity;
    tokens: Tokens;
    error: string;
  }

  interface DecodedJWT {
    sub: number;
    username: string;
    role: string;
    iat: number;
    exp: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends JWTType {
    data: User;
    error: string;
  }
}
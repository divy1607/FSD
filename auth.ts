import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcryptjs';

function getUser(email: string): number {
    try {
      const user = [0, 1, 2, 3];
      return user[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [ ],
});
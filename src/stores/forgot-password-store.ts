import { create } from 'zustand';

export type ForgotPasswordStore = {
  type: 'email' | 'phone';
  identifier: string;
};

export const forgotPasswordState = {
  type: 'email',
  identifier: '',
};

export const useForgotPasswordStore = create<ForgotPasswordStore>((set, get) => ({
  type: 'email',
  identifier: '',
}));

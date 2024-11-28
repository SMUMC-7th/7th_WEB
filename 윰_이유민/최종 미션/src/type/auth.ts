export type TRole = 'admin' | 'user';

export type TAuthBody = {
  email: string;
  password: string;
  role?: TRole;
};

export type TAuthResponse = {
  id: number;
  email: string;
  password: string;
  refreshToken: string;
  role: string;
};

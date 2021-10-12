import { createContext, ReactNode } from 'react';
import { apiAuth } from '../services/api';

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const isAuthenticated = false;

  const signIn = async ({ email, password }: SignInCredentials) => {

    try {
      const response = await apiAuth.post('sessions', {
        email,
        password
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  )
}
import {
  FC,
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import api from '../services/api';

interface AuthState {
  name: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@conexa:token');
    const name = localStorage.getItem('@conexa:name');

    if (token && name) {
      return { token, name };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', {
      email,
      password,
    });

    const { token, name } = response.data;

    localStorage.setItem('@conexa:token', token);
    localStorage.setItem('@conexa:name', name);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, name });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@conexa:token');
    localStorage.removeItem('@conexa:name');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.name, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export type { SignInCredentials };
export { AuthProvider, useAuth };

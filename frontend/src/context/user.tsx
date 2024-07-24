import { createContext, ReactNode, useContext, useState } from 'react';
import { UserType } from '../models/UserType.ts';

interface UserContextType {
  email: string;
  type: UserType;
}

interface UserContextValue extends UserContextType {
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

const UserContext = createContext<UserContextValue>({
  email: '',
  type: 'guest',
  logIn: () => {},
  logOut: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const email = window.sessionStorage.getItem('email') || '';
  const type: UserType =
    (window.sessionStorage.getItem('type') as UserType) || 'guest';
  const [user, setUser] = useState<UserContextType>({ email, type });

  const logIn = (email: string) => {
    let type: UserType = 'register';
    if (email.includes('vip@')) {
      type = 'VIP';
    }

    setUser({ email, type });
    window.sessionStorage.setItem('email', email);
    window.sessionStorage.setItem('type', type);
  };

  const logOut = () => {
    setUser({ email: '', type: 'guest' });
    window.sessionStorage.removeItem('email');
    window.sessionStorage.removeItem('type');
  };

  return (
    <UserContext.Provider value={{ ...user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};

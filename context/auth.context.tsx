"use client";

import { validateSession } from "@/actions/utils/auth/validate-session";
import { User } from "@/app/generated/prisma/client";

import { createContext, useState, useContext, useEffect } from "react";

type SessionUser = Partial<User> & {
  subscriptions?: { plan?: { name?: string | null } | null }[] | null;
};

interface AuthContext {
  user: SessionUser | null;
  setUser: ((user: SessionUser) => void) | null;
  loading: boolean;
}

const initialContext: AuthContext = {
  user: null,
  setUser: null,
  loading: false,
};

const AuthContext = createContext(initialContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        const user = await validateSession();
        setUser(user);
      } catch (error: unknown) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    validateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

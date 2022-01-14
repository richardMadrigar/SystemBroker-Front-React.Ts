/* eslint-disable no-alert */
import React, { createContext, ReactNode, useEffect, useState } from "react";

import api from "../setup/api/api";
import { IUsers } from "../types/TypeModels";

interface AuthContextType {
  handleLogin({ email, senha }: IPropsUserLogin): Promise<void>;

  setAutorization: React.Dispatch<React.SetStateAction<boolean>>;
  autorization: boolean;

  setUserPerfil: React.Dispatch<React.SetStateAction<undefined>>;
  userPerfil: IUsers | undefined;

  token: TokenState;
  loading: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface IPropsUserLogin {
  email: string;
  senha: string;
}

interface TokenState {
  token: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [autorization, setAutorization] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userPerfil, setUserPerfil] = useState();

  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem("SystemBroker:token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      return { token };
    }
    return {} as TokenState;
  });

  useEffect(() => {
    const testTokenValid = async () => {
      const token = localStorage.getItem("SystemBroker:token");
      setLoading(true);

      try {
        if (!token) {
          setLoading(false);
          return setAutorization(false);
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        return await api.post("/sessions").then((response) => {
          console.log("usuario logado: ", response.data);
          setUserPerfil(response.data);

          setLoading(false);
          setAutorization(true);
        });
      } catch (error) {
        setLoading(false);
        return setAutorization(false);
      }
    };
    testTokenValid();
  }, [token]);

  const handleLogin = async (data: IPropsUserLogin) => {
    await api
      .post("/login", data)

      .then((response) => {
        const { token } = response.data;

        setToken(token);

        localStorage.setItem("SystemBroker:token", token);

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        setUserPerfil(response.data);
        return setAutorization(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        token,
        userPerfil,
        setUserPerfil,
        autorization,
        setAutorization,
        handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

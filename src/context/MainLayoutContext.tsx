import React, { createContext, ReactNode, useState } from "react";

type AuthContextTypee = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const LayoutMainProvider = createContext({} as AuthContextTypee);

export function LayoutMainProviderContext(props: AuthContextProviderProps) {
  const [open, setOpen] = useState(false);

  return (
    <LayoutMainProvider.Provider value={{ setOpen, open }}>
      {props.children}
    </LayoutMainProvider.Provider>
  );
}

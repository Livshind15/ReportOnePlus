/* eslint-disable no-empty */
import * as React from "react";
import { useEffect, useState } from "react";

export interface IAppContext {
  menuOpen: boolean;
  setMenu: (val: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>({
  menuOpen: false,
  setMenu: () => {},
});

export interface IAppContextProps {
  children: any;
}

export const AppProvider = ({ children }: IAppContextProps) => {
  const [menu, setMenu] = useState(false);
  return (
    <AppContext.Provider
      value={{
        menuOpen: menu,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

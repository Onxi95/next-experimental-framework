"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const stateContext = createContext<{
  state: number;
  setState: Dispatch<SetStateAction<number>>;
}>({
  state: 0,
  setState: () => null,
});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(0);
  return (
    <stateContext.Provider value={{ state, setState }}>
      {children}
    </stateContext.Provider>
  );
};

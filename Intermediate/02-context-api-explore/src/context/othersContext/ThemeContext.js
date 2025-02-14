import React, { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const name = "Muntasir Ahmed";
  return <ThemeContext.Provider value={name}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

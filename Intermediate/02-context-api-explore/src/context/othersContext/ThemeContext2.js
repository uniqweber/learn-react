import { createContext, useCallback, useContext,  useState } from "react";

const ThemeContext2 = createContext(null);

export const ThemeProvider2 = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => !prev);
    
    document.documentElement.classList.toggle("dark");
  }, [setTheme]);
  

  return <ThemeContext2.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext2.Provider>;
};

export const useTheme2 = () => {
  const context = useContext(ThemeContext2);
  if (!context) {
    throw new Error("useTheme 2 must be used within a ThemeProvider");
  }
  return context;
};

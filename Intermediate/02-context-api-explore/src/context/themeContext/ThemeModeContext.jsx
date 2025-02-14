import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeModeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeModeProvider = ({ children }) => {
  const getStoredTheme = () => localStorage.getItem("theme") === "dark";
  const [isDark, setIsDark] = useState(getStoredTheme);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return <ThemeModeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeModeContext.Provider>;
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
};

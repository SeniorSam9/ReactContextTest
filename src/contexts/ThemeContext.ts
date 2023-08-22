import { createContext, useState } from "react";

interface Theme {
  isDarkTheme: boolean;
  toggleDarkTheme: Function;
}

export function useTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  function toggleDarkTheme() {
    setIsDarkTheme((prevTheme) => {
      return !prevTheme;
    });
  }
  return { isDarkTheme, toggleDarkTheme };
}

export const ThemeContext = createContext<Theme>({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
});

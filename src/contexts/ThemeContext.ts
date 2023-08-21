import { createContext } from "react";

export const ThemeContext = createContext<{
  isDarkTheme: boolean;
  toggleDarkTheme: Function;
}>({ isDarkTheme: false, toggleDarkTheme: () => {} });

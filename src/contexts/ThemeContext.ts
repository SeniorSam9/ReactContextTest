import { createContext } from "react";

interface Theme {
  isDarkTheme: boolean;
  toggleDarkTheme: Function;
}
export const ThemeContext = createContext<Theme>({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
});

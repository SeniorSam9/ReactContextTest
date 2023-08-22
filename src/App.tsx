import { useEffect } from "react";
import Child from "./components/Child";
import { ThemeContext, useTheme } from "./contexts/ThemeContext";
export default function App() {
  const { isDarkTheme, toggleDarkTheme } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme ? "#333" : "white";
    document.body.style.color = isDarkTheme ? "white" : "#333";
  }, [isDarkTheme]);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
        <Child />
      </ThemeContext.Provider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aperiam
        numquam iste natus, hic odit velit vitae voluptates pariatur asperiores,
        laudantium possimus. Quibusdam asperiores blanditiis ad aliquid veniam
        iste assumenda.
      </p>
    </>
  );
}

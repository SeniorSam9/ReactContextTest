import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function GrandChild() {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <button
        style={{
          backgroundColor: themeContext?.isDarkTheme ? "#333" : "white",
          color: themeContext?.isDarkTheme ? "white" : "#333",
          border: "none",
          padding: "0.5em",
          borderRadius: "0.5em",
          cursor: "pointer",
        }}
        onClick={() => {
          themeContext?.toggleDarkTheme(themeContext?.isDarkTheme);
        }}
      >
        Toggle Theme
      </button>
    </>
  );
}

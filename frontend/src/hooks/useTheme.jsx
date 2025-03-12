import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: localStorage.getItem("hs_theme") || "auto",
  toggleTheme: () => {}
});

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode =
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    isDark: theme === "dark" || isDarkMode,
    toggleTheme,
    theme
  };
};

// eslint-disable-next-line react/prop-types
function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("hs_theme") || "auto"
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    const isAuto = theme === "auto";
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (theme === "light" || (isAuto && !isDarkMode)) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else if (theme === "dark" || (isAuto && isDarkMode)) {
      html.classList.remove("light");
      html.classList.add("dark");
    }
    localStorage.setItem("hs_theme", theme);
  }, [theme]);

  return (
    <ThemeContext
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeContextProvider, useTheme };

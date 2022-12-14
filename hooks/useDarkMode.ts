

import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? (localStorage.theme || "light") : "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {

    const root = window.document.body;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;

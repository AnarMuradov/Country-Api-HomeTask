import { useEffect } from "react";
import useLocal from "./useLocal";

function DarkMode() {
  const [theme, setTheme] = useLocal("theme", "light");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, [theme]);

  function handleTheme() {
    if (document.body.classList.contains("dark")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    document.body.classList.toggle("dark");
  }
  return {theme, handleTheme};
}

export default DarkMode;


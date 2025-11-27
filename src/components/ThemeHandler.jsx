// src/components/ThemeHandler.jsx
import { useEffect } from "preact/hooks";
import { isDark } from "../signals/theme";

export default function ThemeHandler() {
  // read the signal so this component rerenders when isDark changes
  const dark = isDark.value;

  // When dark changes → run side effect
  useEffect(() => {
    // toggle class on <html> (document.documentElement)
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !!dark);
    }
  }, [dark]);

  return null; // invisible component, only side-effect
}

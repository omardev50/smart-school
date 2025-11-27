import { signal } from "@preact/signals";

/*
  Initialize:
  - prefer stored value in localStorage
  - else use OS preference (prefers-color-scheme)
  - default to light
*/

export function getInitial() {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  // fallback to system preference
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export const isDark = signal(getInitial());

// helpers to change theme and persist
export function setThemeDark(dark) {
  isDark.value = Boolean(dark);
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  }
}

export function toggleTheme() {
  setThemeDark(!isDark.value)
}

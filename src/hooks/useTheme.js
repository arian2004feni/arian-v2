// src/hooks/useTheme.js
import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("arian-v1-theme");
    if (saved) return saved;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    // Apply DaisyUI theme
    html.setAttribute("data-theme", theme);

    // Save preference
    localStorage.setItem("arian-v1-theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
